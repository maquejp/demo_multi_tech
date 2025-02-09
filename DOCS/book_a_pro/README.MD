# Book a pro

A professional appointment platform.

## Sections

- Home
  - List of specialities (quick link to list of all professionals for selected specialities)
  - List of all professionals by specialities
  - Top 5 professionals list (with most appointments)
- About the app
- Contact the app owner or a professionals
- Header
  - Logo
  - Navigation
    - Home
    - All professionals
    - About
    - Contact
  - Create account (if not authenticated) / Update account (if authenticated)
- Footer

## Roles

- Administrators
- professionals
- clients

### Administrators

- Create and update professionals
- Create and update specialities (e.g. Architect, Plumber, General physician...)

### clients

- Create a new account (self registration)
- Update their profiles
- Requests appointments
- Check teir professionals (professionals have/had appointments with)
- Online payment

### Professionals

- Update their profiles
- Check their appointments with clients
- Check their earnings
- Check their clients (clients have/had appointments with)

# Screens - Ideas

Those are just mockups / ideas made in [Figma](https://www.figma.com/)

## Home page

![wf](./images/Home.png "Wireframe")

## About us page

![au](./images/AboutUs.png "AboutUs")

## Contact us page

![cu](./images/ContactUs.png "AboutUs")

## Pros list page

![dl](./images/ProsList.png "List")

## Pro details with availability page

![dd](./images/ProDetails.png "Details")

## Login page

![l](./images/Login.png "login")

## Create account page

![ca](./images/CreateAccount.png "create")

## User profile page

![up](./images/MyProfile.png "profile")

## User appointments page

![uap](./images/MyAppointments.png "appoint")

## Admin - Dashboard

![ad](./images/AdminDashboard.png "dashb")

## Admin - Add professionals

![adpro](./images/AdminAddPro.png "add")

## Admin - Check appointments

![aliap](./images/AdminAppointments.png "listapp")

# Data structure

## Entities

- Users
- User roles (administrators, professional, client)
- Specialities (tailor, plumber, physician...)
- Appointments

![dbschema](./images/book_a_pro_schema.png "dbschema")

# Implementation

```sh
cd ../../_tools
bun run setup:guis:web:reactjs:vite book_a_pro
```

- GUI
  - WEB
    - REACTJS
      - VITE
- DATABASES
  - MONGODB
