Tracer Study Web Application

A full-stack web application built with Laravel (API Backend) and Next.js (Frontend SPA/SSR). This project is designed to manage tracer study questionnaires, alumni data, job postings, and related features.

🚀 Tech Stack
Backend: Laravel

-   PHP 8+
-   Laravel 10
-   JWT Authentication (tymon/jwt-auth)
-   RESTful API
-   MySQL
-   Middleware, Validation

Frontend: Next.js (Located in tracer-study-app/)

-   Next.js 14+ (App Router with SSR)
-   SSR & CSR
-   Axios
-   Tailwind CSS
-   Midleware Token
-   Dynamic Filtering and Routing
-   Dashboard Admin with Statistics

📁 Project Structure
.
├── app/ # Laravel application core
├── bootstrap/
├── config/
├── database/
├── public/ # Laravel public assets
├── resources/
│ └── views/
├── routes/
│ └── api.php # API Routes
├── storage/
├── tests/
├── tracer-study-app/ # Next.js frontend
│ ├── app/ # App directory (routes & SSR pages)
│ ├── components/ # UI components
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # (if used alongside app/)
│ ├── public/ # Static assets
│ ├── styles/ # Tailwind / Global styles
│ ├── utils/ # Axios & helper functions
│ └── ...
├── .env # Laravel environment variables
├── .gitignore
├── README.md
└── composer.json

🔧 Installation & Development

1. Clone the repository
   git clone https://github.com/ariefafwan/nextjs-tracer-study
   cd nextjs-tracer-study

2. Setup Laravel Backend
   cp .env.example .env
   composer install
   php artisan key:generate
   php artisan jwt:secret
   php artisan migrate --seed
   php artisan serve

Laravel will run at: http://localhost:8000

3. Setup Next.js Frontend
   cd tracer-study-app
   cp .env.example .env
   npm install
   npm run dev

Next.js will run at: http://localhost:3000

For Admin Panel, login with:

-   email: admin@admin.com
-   password: password

🧩 Features

-   🔐 Authentication using JWT
-   📋 Tracer Study Form submission & tracking
-   📄 SSR-Enabled Pages via Next.js
-   🔍 Filterable Job Listings (by date, category, etc.)
-   🔄 Axios Interceptors for automatic token handling
-   📊 Statistical Reporting for admin panel

📌 Usage Notes
Laravel backend runs on http://localhost:8000
Next.js frontend runs on http://localhost:3000
Dashboard & Other Protected routes are under /auth/\*
Tracer Study form is accessed via /kuisioner/

👥 Contribution Guide
Fork this repository
Create your feature branch (git checkout -b feature/your-feature-name)
Commit your changes (git commit -m 'Add your feature')
Push to the branch (git push origin feature/your-feature-name)
Create a Pull Request

📄 License
This project is open-source and available under the MIT License.
