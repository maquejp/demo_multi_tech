# Multi Technology Demo

The goal of this project is to displays multiples ways to build the same application using different technologies.

I have started this project in January 2025... And it will takes time to covers everything 😄 😄

## Technologies

### UIs

#### Frontend Web

For the frontend, it covers as set of javascript frameworks for [Single-page application](https://en.wikipedia.org/wiki/Single-page_application):

- [Angular](./guis/web/angular/README.MD)
- [Astro](./guis/web/astro/README.MD)
- [NextJs](./guis/web/next/README.MD)
- [Svelte](./guis/web/svelte/README.MD)
- [VueJs](./guis/web/vue/README.MD)

#### Mobile

- [Flutter](./guis/mobile/flutter/README.MD)
- [ReactNative](./guis/mobile/react_native/README.MD)
- [Ionic](./guis/mobile/ionic/README.MD)

#### Other

- [Python](https://www.python.org) -> [more](./guis/other/python/README.MD)

### Backend

For the backend it uses APIs, it covers a set of technologies / frameworks:

- [ExpressJs](./backends/expressjs/README.MD)
- [Spring Boot](./backends/springboot/README.MD)
- [API Platform](./backends/apiplatform/README.MD)

### Database

For the database, it covers a set of technologies:

- [Postgresql](./databases/postgres/README.MD)
- [MariaDB](./databases/mariadb/README.MD)
- [Oracle Database](./databases/oracle/README.MD)

### SMTP Server

- [MailDev](https://maildev.github.io/maildev/)

It use [Docker](https://www.docker.com/) to instantiate it.

### Supporting services for this project

- [Clerk](https://clerk.com) (for managing authentication)
- [Cloudinary](https://cloudinary.com) (for image cdn)

## The application

For this demo, I decided to create an application that...

- School Management? (Administrators, Teacher, Parent, Student, Classes[[Grade]A..[Grade]Z], Grades[1st-nth], Subjects, Lesson, Exam, Assignment, Result, Event, Announcement, Messages, Attendance, Dashboard)
- Travel App?
- E-Commerce?
- Food ordering?
- Doctor Appointment?
- House Rental Management? (Administrators, Owners, Clients, Properties, Dashboard)

### Features

The applicaton has the following features:

- Public Homepage
- Authentication for restricted features
- Role base restriction (admin, role[n])
- Dashboard per role (?)
- CRUD on specific features
- Data Exports
- Internal Messaging System
