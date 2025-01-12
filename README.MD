# Multi Technology Demo

The goal of this project is to displays multiples ways to build the same application using different technologies.

I have started this project in January 2025... And it will takes time to covers everyhing 😄 😄

## Technologies

### UIs

#### Frontend Web

For the frontend, it covers as set of javascript frameworks for [Single-page application](https://en.wikipedia.org/wiki/Single-page_application):

- [Angular](https://angular.dev/)
- [NextJs](https://nextjs.org/)
- [React](https://react.dev/)
- [Svelte](https://svelte.dev/)
- [VueJs](https://vuejs.org/)
- [Astro](https://astro.build/)

It use [Vite](https://vite.dev/) to instanciate [VueJs](https://vuejs.org/), [React](https://react.dev/) and [Svelte](https://svelte.dev/)

##### Styling for SPAs

It is using [Tailwindcss](https://tailwindcss.com/)

[The Frameworks guide](https://tailwindcss.com/docs/installation/framework-guides)

- [With Angular](https://tailwindcss.com/docs/guides/angular)
- [With React](https://tailwindcss.com/docs/guides/create-react-app)
- [With NextJs](https://tailwindcss.com/docs/guides/nextjs)
- [With Svelte](https://tailwindcss.com/docs/guides/sveltekit)
- [With VueJs](https://v2.tailwindcss.com/docs/guides/vue-3-vite)
- [With Astro](https://tailwindcss.com/docs/guides/astro)

[With Vite](https://tailwindcss.com/docs/guides/vite#vue)

#### Mobile

- [Flutter](https://flutter.dev/)
- [ReactNative](https://reactnative.dev/)
- [Ionic](https://ionicframework.com/)

#### Other

- [Python](https://www.python.org)

### Backend

For the backend it uses APIs, it covers a set of technologies / frameworks:

- [ExpressJs](https://expressjs.com/) with [Prisma](https://www.prisma.io/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [API Platform](https://api-platform.com/) which is built over [Symfony](https://symfony.com/) or [Laravel](https://laravel.com)

For [Spring Boot](https://spring.io/projects/spring-boot) and [API Platform](https://api-platform.com/), I will use [Docker](https://www.docker.com/)

### Database

For the database, it covers a set of technologies:

- [Postgresql](https://www.postgresql.org/)
- [MariaDB](https://mariadb.com/)
- [Oracle Database 21c XE](https://www.oracle.com/database/technologies/appdev/xe.html)

And I use [Docker](https://www.docker.com/) to instantiate those database.

The Oracle Container Registry for 21c XE is [here](https://container-registry.oracle.com/ords/f?p=113:4:111314654707551:::4:P4_REPOSITORY,AI_REPOSITORY,AI_REPOSITORY_NAME,P4_REPOSITORY_NAME,P4_EULA_ID,P4_BUSINESS_AREA_ID:803,803,Oracle%20Database%20Express%20Edition,Oracle%20Database%20Express%20Edition,1,0&cs=3ghtGX3zCDDLftv0TVGFjgU_UvhjtPwEr9xdYRMocvClE-2b7EohwfIotmOlo0WjkQxkt9T9IZZ9oY5cDlZHV2w)

### SMTP Server

- [MailDev](https://maildev.github.io/maildev/)

I use [Docker](https://www.docker.com/) to instantiate it.

### Supporting services for this project

- [Clerk](https://clerk.com) (for managing authentication)
- [Cloudinary](https://cloudinary.com) (for image cdn)

## The application

For this demo, I decided to create an application that...

- School Management? (Administrators, Teacher, Parent, Student, Classes[[Grade]A..[Grade]Z], Grades[1st-nth], Subjects, Lesson, Exam, Assignment, Result, Event, Announcement, Messages, Attendance)
- Travel App?
- E-Commerce?
- Food ordering?
- Doctor Appointment?
- House Rental Management?

### Features

The applicaton has the following features:

- Public Homepage
- Authentication for restricted features
- Role base restriction (admin, role[n])
- Dashboard per role (?)
- CRUD on specific features
- Data Exports
- Internal Messaging System
