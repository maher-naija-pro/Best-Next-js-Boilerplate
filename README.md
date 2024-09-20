# Best Nextjs tailwindCSS boilerplate on github

Boilerplate and Starter for Next.js with App Router support, Tailwind CSS, and TypeScript ⚡️ Prioritizing developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky,VSCode, PostCSS, Tailwind CSS,Authentication, Database

Clone this project and use it to create your own Next.js project..

![image](https://github.com/user-attachments/assets/ab016103-394f-45e5-ba72-a33af6b555f8)

# Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

* [Configuration](#configuration)
  - [Authentication](#authentication)
  * [Database](#database)
* [Project Structure](#project-structure)
* [Customization](#customization)
* [Contributing](#contributing)

* [License](#license)

## Requirements

Node.js 20+ and npm

## Getting Started

Run the following command on your local environment:

```bash

git clone  https://github.com/maher-naija-pro/Best-Next-js-Boilerplate.git
cd Best-Next-js-Boilerplate
npm install
```

## Set up authentication

To generate an auth secret, run the following command:

```
npx auth secret

```

To configure the application, Rename .env_example file to .env ,you need to add this generate secret to your .env file as AUTH_SECRET="your-auth-secret".

Build your application by running :

```bash
npm run build

```

Then, you can run the project locally in development mode with live reload by executing:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Set up remote database

To set up a remote PostgreSQL database, follow these steps:

1. **Create a PostgreSQL database:**

   - If you don't have a PostgreSQL database, you can create one on a cloud provider like Heroku, AWS, or DigitalOcean.
   - Alternatively, you can install PostgreSQL locally using [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

2. **Configure your Prisma environment variables:**

   - Create a `.env` file in the root of your project and add the following environment variables:

     ```bash
     DATABASE_URL=postgresql://<your_db_user>:<your_db_password>@<your_db_host>:<your_db_port>/<your_db_name>
     ```

     - Replace `<your_db_user>`, `<your_db_password>`, `<your_db_host>`, `<your_db_port>`, and `<your_db_name>` with your actual database credentials.

3. **Initialize Prisma:**

   - Run the following command to initialize Prisma:

     ```bash
     npx prisma init
     ```

4. **Generate Prisma client:**

   - Run the following command to generate the Prisma client:

     ```bash
     npx prisma generate
     ```

5. **Apply database migrations:**

   - Run the following command to apply database migrations:

     ```bash
     npx prisma db push
     ```

Now you have a remote PostgreSQL database set up and ready to use with your Next.js application.

## Project structure

## Customization

This template is highly customizable. You can easily modify the code to fit your specific needs. Here are some examples:

- **Add new features:** You can add new features to the application by creating new components, pages, and routes.
- **Change the design:** You can change the design of the application by modifying the CSS files or using a different UI library.
- **Integrate with other services:** You can integrate the application with other services, such as a payment gateway or a social media platform.

For more detailed information on how to customize the application, please refer to the documentation.

## Sponsors

If you're interested in sponsoring this project, please contact us at [email protected]

## Philosophy

Developer experience first, extremely flexible code structure and only keep what you need:
Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.

- 🛠️ Easy to customize
- 📦 Minimal code
- 📈 SEO-friendly
- 🚀 Production-ready

## Features

- ⚡ Next.js with App Router support
- 💯 Maximize lighthouse score
- 🖥️ shadcn/ui components
- 🚀 Data Fetching, Caching and Mutation with TanStack Query
- 🔥 Type checking TypeScript
- ✨ Beautiful and consistent icons from Lucide
- ⏳ Loading UI using Skeleton Components
- 💎 Integrate with Tailwind CSS
- 🌐 Multi-language (i18n) with next-intl
- ✅ Strict Mode for TypeScript and React 18
- 🔒 Authentication with Authjs : Sign up, Sign in, Sign out, Forgot password, Reset password, and more.
- 👥 Social Auth (Google, GitHub, and more),Users Roles
- ⌨️ Form handling with React Hook Form
- 🔴 Validation library with Zod
- 🦊 Husky for Git Hooks
- 📏 Linter with ESLint (default Next.js, Next.js Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with Prettier
- 📝 Logging with Pino.js and Log Management with Better Stack
- 📦 Type-safe ORM with Prisma, compatible with PostgreSQL, SQLite, and MySQL
- 🚀 Ready for Next.js 15.
- 🧪 Integration and E2E Testing with Playwright
- 🎉 Storybook for UI development
- 🤖 SEO metadata, Open Graph tags,JSON-LD tags
- 🗺️ Sitemap.xml and robots.txt
- ⌘ Database exploration with PRisma Studio and CLI migration tool
- ⚙️ Bundler Analyzer
- 🔍 newsletter,contact forms
- 💡 Absolute Imports using @ prefix
- 🗂 VSCode configuration
- 🚓 Lint git commit with Commitlint
- 🦺 Unit Testing with Vitest and React Testing Library
- 🚫 Lint-staged for running linters on Git staged files
- 🦺 Unit Testing with Vitest
- ☂️ Code coverage with Vitest istanbul/v8
- 🔍 Visual testing with Percy
- 👷 Run tests on pull request with GitHub Actions
- 🖥️ Monitoring as Code with Checkly
- 🎁 Automatic changelog generation with Semantic Release
- 🚀 Observability - Open Telemetry integration for seamless monitoring
- 💲 Pricing table
- ✨ Features table
- 🚀 Marketing land page with sections: hero, stats, customers,
- 📄 Documentation template,content with markdown,
- 🚀 Platform template,
- 📱 Mobile side bars,
- 💻 Full responsive,
- 🖱️ Interactive component on hover
- 🔐 Centralized variables and content
- 📊 Full crud table with react table
- 💳 Stripe payment integration
- 👤 User dashboard example
- 👤 Admin dashboard
- 🌗 Darklight mode
- 📧 Email send integration
- ✨ css Animation
- 🤖 Automated google Gemini Code Reviews - Stay on the cutting edge with AI-powered code reviews!

# Built-in feature from Next.js:

☕ Minify HTML & CSS
💨 Live reload
✅ Cache busting

## Useful commands

# Bundle Analyzer

Next.js Boilerplate comes with a built-in bundle analyzer. It can be used to analyze the size of your JavaScript bundles. To begin, run the following command:

```bash
npm run build-stats
#By running the command, it'll automatically open a new browser window with the results.
```

# Database Studio

To explore the database, run the following command to open the database studio:

```bash
npx prisma studio
```

http://localhost:5555/

The project is already configured with prisma Studio to explore the database. You can run the following command to open the database studio:

## License

Licensed under the MIT License, Copyright © 2024

See LICENSE for more information.

## Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.

Inside that directory, you can run several commands:

## Testing

### Playwright

**Run end-to-end tests:**

````bash
npx playwright test


**Start interactive UI mode:**

```bash
npx playwright test --ui
````

**Run tests in a specific file:**

```bash
npx playwright test example
```

**Run tests in debug mode:**

```bash
npx playwright test --debug
```

### Visual Testing

```bash
npx percy exec -- npx playwright test
```

### Unit Testing

```bash
npx vite preview --outDir .\coverage\  # Build the project for production and output to the coverage directory
npx vitest --ui --api 3000  # Run unit tests with the UI and API server on port 3000
```

### Monitoring

```bash
npx checkly login  # Login to Checkly
npx checkly deploy # Deploy your Checkly tests
npx checkly test  # Run your Checkly tests
```

## semantic-release

```bash
npx semantic-release  # Automatically determine the next version number, generate a changelog, and publish a new release to npm
```

## Project Structure

```
├── src
│   ├── app
│   │   ├── api
│   │   │   ├── stripe
│   │   │   │   ├── subscription
│   │   │   │   │   └── route.ts
│   │   │   ├── auth
│   │   │   │   └── route.ts
│   │   │   ├── profile
│   │   │   │   └── route.ts
│   │   │   ├── logout
│   │   │   │   └── route.ts
│   │   │   ├── session
│   │   │   │   └── route.ts
│   │   │   ├── [locale]
│   │   │   │   ├── (stripe)
│   │   │   │   │   ├── componant_stripe
│   │   │   │   │   │   └── PaymentForm.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx
│   │   ├── components
│   │   │   ├── ui
│   │   │   │   ├── button.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── text.tsx
│   │   │   │   └── container.tsx
│   │   ├── lib
│   │   │   ├── auth
│   │   │   │   ├── session_user.ts
│   │   │   │   └── get_session.ts
│   │   │   ├── stripe.ts
│   │   ├── layouts
│   │   │   └── root.tsx
│   │   ├── pages
│   │   │   ├── _app.tsx
│   │   │   ├── [locale]
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx
│   │   ├── hooks
│   │   │   └── use-session.ts
│   │   ├── types
│   │   │   └── session.ts
│   │   ├── constants
│   │   │   └── locales.ts
│   │   ├── tailwind.config.js
│   │   └── prisma
│   │       └── schema.prisma
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── prisma
│       └── schema.prisma
├── public
│   ├── favicon.ico
│   ├── vercel.svg
│   └── robots.txt
├── .eslintrc.cjs
├── .prettierrc.js
├── .vscode
│   └── settings.json
├── .github
│   └── workflows
│       └── ci.yml
├── .env.local
├── .env
├── .next
│   └── static
│       └── chunks
│           └── pages
│               └── _app-page.js
├── .vercel
│   └── output
│       └── functions
│           └── api
│               └── stripe
│                   └── subscription
│                       └── route.js
├── .git
│   └── HEAD
├── .gitignore
├── package.json
├── README.md
└── tsconfig.app.json



```

```

```
