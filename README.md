# Wonder Star International School

Frontend website for **Wonder Star International School**.

The website provides information about the school, academic programmes, admissions, faculty, facilities, notices, gallery, and contact details.

## Tech Stack

- React
- React Router DOM
- Tailwind CSS
- Lucide React
- JavaScript
- Node.js

## Project Structure

```text
wonder-star-school/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Top navigation bar
│   │   ├── Footer.jsx              # 4-column footer layout
│   │   ├── HeroCarousel.jsx        # Auto-rotating home slider
│   │   ├── NoticesMarquee.jsx      # Scrolling announcements
│   │   ├── WhyUs.jsx               # Feature grid section
│   │   ├── Leadership.jsx          # Tabbed leadership profiles
│   │   ├── Programmes.jsx          # Academic programme cards
│   │   ├── Facilities.jsx          # Campus infrastructure section
│   │   ├── AdmissionSteps.jsx      # Step-by-step admission process
│   │   ├── FacultyGrid.jsx         # Faculty profile grid
│   │   ├── ContactSection.jsx      # Contact info and forms
│   │   ├── PageHero.jsx            # Reusable inner-page banner
│   │   └── WhatsAppButton.jsx      # Floating WhatsApp button
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Admissions.jsx
│   │   ├── Faculty.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   │
│   ├── data/
│   │   └── mock.js                 # Centralized local data source
│   │
│   ├── App.js                      # Router and application layout
│   ├── App.css                     # Custom animations and styles
│   ├── index.js                    # Application entry point
│   └── index.css                   # Tailwind imports and base styles
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd wonder-star-school
```

Install dependencies:

```bash
npm install
```

Start the project:

```bash
npm start
```

The website will run at:

```text
http://localhost:3000
```

## Features

- Responsive website layout
- Mobile navigation menu
- Auto-rotating hero carousel
- Scrolling school notices
- Leadership profiles
- Academic programme cards
- School facilities section
- Admission process
- Faculty profiles
- Gallery
- Contact form
- WhatsApp contact button
- Client-side routing

## Project Data

The current website content is stored in:

```text
src/data/mock.js
```

This file contains local data used by different sections of the website.

## Forms

The Admission and Contact forms are currently frontend-based.

Backend APIs can be connected later to store and process submitted form data.

## Future Integration

The project can later be integrated with:

- Node.js and Express.js backend
- MongoDB
- School ERP
- Student login
- Teacher login
- Admin dashboard
- Dynamic notices
- Faculty management
- Gallery and event management
- Admission APIs
- Notification system

## School Address

**Wonder Star International School**

209/26, Chandranagari, Phase 2nd,  
Behind K.D.A Colony,  
Near Bhadauria Petrol Pump.

## Build

Create the production build:

```bash
npm run build
```