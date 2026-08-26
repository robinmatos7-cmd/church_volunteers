# Church Volunteers

A full-stack web application that helps churches organize volunteer opportunities and allows people to sign up to serve.

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- PostgreSQL
- Sequelize
- Express Session
- Express Rate Limit
- connect-pg-simple
- HTML
- CSS
- JavaScript

## Features

- Browse available volunteer opportunities
- View volunteer opportunity details
- Sign up for volunteer opportunities
- Secure admin login
- Manage volunteer signups
- Rate-limit login attempts
- Persistent login sessions using PostgreSQL
- Responsive design
- Light and dark themes

## Deployment

Live application:

https://church-volunteers.onrender.com

GitHub repository:

https://github.com/robinmatos7-cmd/church_volunteers

## Project Description

Church Volunteers is designed to help churches organize volunteer opportunities and connect those opportunities with people who want to serve.

Visitors can browse available opportunities, view details, and submit their contact information to volunteer. Administrators can log in to manage volunteer signups.

## Database

The application uses PostgreSQL with Sequelize ORM.

- VolunteerOpportunity: 6 records
- VolunteerSignup: 5 records

Volunteer opportunities contain information such as the role, description, date, and service times. Volunteer signups contain the volunteer's name, phone, email, and selected opportunity.

## Screenshots

### Homepage

![Church Volunteers Homepage](Screenshots\homepage.png)

### Admin Login

![Admin Login](Screenshots\admin-login.png)

### Volunteer Management

![Volunteer Management](Screenshots\volunteer-management.png)

### Dark Mode

![Homepage Dark Mode](Screenshots\Dark-mode.png)

## Future Development

- Add additional volunteer management features
- Allow administrators to create and edit volunteer opportunities
- Add additional tools for organizing volunteer schedules
