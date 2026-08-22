const router = require('express').Router();
const { VolunteerOpportunity, VolunteerSignup, User } = require('../models');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');
router.get('/', async (req, res) => {
  try {
    const opportunityData = await VolunteerOpportunity.findAll({
      include: [VolunteerSignup],
      order: [['role', 'ASC']],
    });

    const opportunities = opportunityData.map((opportunity) => opportunity.get({ plain: true }),
    );

    res.render('homepage', { opportunities });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/opportunity/:id', async (req, res) => {
  try {
    const opportunityData = await VolunteerOpportunity.findByPk(
      req.params.id,
      {
        include: [VolunteerSignup],
      },
    );

    if (!opportunityData) {
      return res.status(404).send("Opportunity not found.");
    }
    const opportunity = opportunityData.get({ plain: true });


    const success = req.query.success;

    res.render('opportunity', { opportunity, success });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/opportunity/:id/signup', async (req, res) => {
  try {
    if (
      !req.body.first_name ||
      !req.body.last_name ||
      !req.body.phone ||
      !req.body.email
    ) {
      return res.status(400).send("All fields are required.");
    }

    if (!req.body.email.includes('@')) {
      return res.status(400).send("Please enter a valid email.");
    }
    const opportunity = await VolunteerOpportunity.findByPk(req.params.id);

    if (!opportunity) {
      return res.status(404).send("Opportunity not found.");
    }
    await VolunteerSignup.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      opportunity_id: req.params.id,
    });

    res.redirect(`/opportunity/${req.params.id}?success=true`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT THE LOGIN ROUTES HERE

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: 'Too many login attempts. Please try again later.',
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', loginLimiter, async (req, res) => {  
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
  return res.status(401).render('login', {
    error: 'Invalid email or password.',
  });
}

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
  return res.status(401).render('login', {
    error: 'Invalid email or password.',
  });
}

    req.session.loggedIn = true;

    res.redirect('/manage');
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

router.get('/manage', async (req, res) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  try {
    const opportunityData = await VolunteerOpportunity.findAll({
      include: [VolunteerSignup],
      order: [['role', 'ASC']],
    });

    const opportunities = opportunityData.map((opportunity) =>
      opportunity.get({ plain: true })
    );
    res.render('manage', { opportunities });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/manage/volunteer/:id/delete', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      return res.redirect('/login');
    }

    await VolunteerSignup.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect('/manage');
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;