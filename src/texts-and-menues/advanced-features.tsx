export interface ListbadgProps {
  title: string
  href: string
}
export interface ListProps {
  title: string
  desc: string
}
export interface FeatureProps {
  link: string
  title: string
  description: string
  image: string
  list: ListProps[]
}
export const features_advanced: FeatureProps[] = [
  {
    link: "Admin",
    title: "Admin Dashboard",
    description:
      "A powerful dashboard for administrators to manage users, settings, and other aspects of the application.",
    image: "",
    list: [
      { title: "Manage users", desc: "Add Update delete client accounts" },
      { title: "Manage payement", desc: "Track subscription payement" }
    ]
  },
  {
    link: "Api",
    title: "API Ready",
    description:
      "Built-in API endpoints for seamless integration with other services and applications.",
    image: "",
    list: []
  },
  {
    link: "Forms",
    title: "Forms Examples",
    description:
      "Ready-to-use form templates for various use cases, including registration, contact, and feedback forms.",
    image: "",
    list: []
  },
  {
    link: "ORM",
    title: "Full ORM CRUD Examples",
    description:
      "Comprehensive examples demonstrating how to perform Create, Read, Update, and Delete operations using an Object-Relational Mapper (ORM).",
    image: "",
    list: []
  },
  {
    link: "DataTable",
    title: "CRUD Data Table Examples",
    description:
      "Examples showcasing how to create, manage, and display data in interactive tables.",
    image: "",
    list: []
  },
  {
    link: "InfiniteScroll",
    title: "Infinite Scroll Posts Example",
    description:
      "Implementation of infinite scrolling for displaying large amounts of content efficiently.",
    image: "",
    list: []
  },

  {
    link: "dnd",
    title: "Drag and Drop Menu Example",
    description: "A user-friendly drag-and-drop interface for creating and customizing menus.",
    image: "",
    list: []
  },

  {
    link: "FeatureToggles",
    title: "Feature Subscription Toggles",
    description: "Enable or disable features based on user subscription plans.",
    image: "",
    list: []
  },

  {
    link: "Animation",
    title: "JS Less Animation",
    description: "Smooth and engaging animations without relying heavily on JavaScript.",
    image: "",
    list: []
  },
  {
    link: "FA",
    title: "2FA",
    description: "Two-factor authentication for enhanced security and account protection.",
    image: "",
    list: []
  },
  {
    link: "MagicLink",
    title: "User Magic Link",
    description:
      "A secure and convenient way for users to reset their passwords or access their accounts.",
    image: "",
    list: []
  },
  {
    link: "Subscription",
    title: "Subscription Management",
    description:
      "Tools for managing user subscriptions, including cancellation, renewal, and payment processing.",
    image: "",
    list: []
  },
  {
    link: "Billing",
    title: "Billing Management",
    description: "A comprehensive system for managing billing cycles, invoices, and payments.",
    image: "",
    list: []
  },
  {
    link: "StripeRecurent",
    title: "Stripe Recurrent Subscription",
    description:
      "Support for recurring subscriptions using Stripe for automated payment processing.",
    image: "",
    list: []
  }
]

export const features: FeatureProps[] = [
  {
    link: "Marketing",
    title: "Marketing Landing Page",
    description:
      "A pre-designed landing page template to showcase your SaaS product and attract potential customers.",
    image: "",
    list: [
      { title: "All sections you need", desc: "Hero,CTA,Features .." },
      { title: "Social link", desc: "Connect all your social accounts" }
    ]
  },
  {
    link: "Dashboard",
    title: "Platform user interface",
    description: "The main user interface for your platform",
    image: "",
    list: [
      {
        title: "User dashboard",
        desc: "A personalized dashboard for users to access their account information, manage settings, and view their activity."
      }
    ]
  },
  {
    link: "Responsive",
    title: "Responsive Design",
    description:
      "Mobile-centric responsive design focuses on prioritizing and optimizing web content for mobile devices first, ensuring a seamless user experience before adapting the layout to larger screens like tablets and desktops.",
    image: "",
    list: [{ title: "Match any screen size", desc: "Adaptative display for mobile and desktop" }]
  },
  {
    link: "theme",
    title: "Intuitive User Interface",
    description:
      " Designed to be user-friendly and straightforward, allowing users to navigate and interact with the system efficiently and effectively, often feeling natural and obvious in its use.",
    image: "",
    list: [
      {
        title: "Dark Light theme",
        desc: "Adapt your color theme "
      },
      { title: "Interactive componants", desc: "Animated buttons, forms ..." },
      { title: "SEO friendly UI animation", desc: "Animated componants with css no javascript " }
    ]
  },
  {
    link: "Account",
    title: "User Management",
    description: "Tools for managing user accounts, roles, and permissions.",
    image: "",
    list: [
      { title: "User sign-up", desc: "user sign up form" },
      { title: "User sign-in", desc: "user sign in form" },
      {
        title: "User role access",
        desc: "Manage access to your features, API and UI sections based on roles"
      },
      { title: "User Forgot Password", desc: "User reset form my sending email" },
      { title: "User Email Account verification", desc: "Validate your account by sending email" },
      { title: "User Social login", desc: "Use your favorite social login provider to sign-in/up" }
    ]
  },

  {
    link: "Pricing",
    title: "Pricing",
    description: "A flexible pricing system for setting up different subscription plans and tiers.",
    image: "",
    list: [
      { title: "Configurable Pricing table", desc: "Configure many plans to your pricing table" },
      { title: "Most popular plan", desc: "Most popular plan custom display" },
      { title: "Stripe integration", desc: "Direct connect to stripe" }
    ]
  },
  {
    link: "Stripe",
    title: "Stripe Payment",
    description: "Integrated Stripe payment gateway for secure and convenient online payments.",
    image: "",
    list: [
      {
        title: "Stripe direct form integration",
        desc: "Direct form integration no redirect to stripe site"
      }
    ]
  },
  {
    link: "Docu",
    title: "Your Documentation Section",
    description:
      "Comprehensive documentation for developers and users to understand the application's features and functionalities.",
    image: "",
    list: [
      {
        title: "Markdown support",
        desc: "Easy add content to your documentation with markdown no code needed"
      }
    ]
  },
  {
    link: "Newsletter",
    title: "Newsletter",
    description:
      "A newsletter subscription feature to keep users updated on new features and announcements.",
    image: "",
    list: [{ title: "Newsletter form", desc: "Collect your clients emails" }]
  },

  {
    link: "SEO",
    title: "SEO Friendly",
    description:
      "Built-in SEO features to improve your application's visibility in search engine results.",
    image: "",
    list: [
      {
        title: "Optimized for google ranking",
        desc: "Get a score for 100 % SEO webvital indictor"
      }
    ]
  },
  {
    link: "Contact",
    title: "Contact Form",
    description: "A user-friendly contact form for users to reach out to your support team.",
    image: "",
    list: [{ title: "Contact form", desc: "Get direct messages from clients" }]
  },
  {
    link: "Performance",
    title: "Performance",
    description: "Designed for performance first",
    image: "",
    list: [
      {
        title: "Performance optimized",
        desc: "Load optimized by combining prefetching lazy-load SSR CSR and CDN"
      },
      {
        title: "Webvital optimized",
        desc: "Optimized for webvital performance indicators of google"
      }
    ]
  }
]

export const featureList: ListbadgProps[] = [
  { title: "Marketing Land Page", href: "#Marketing" },
  { title: "User Dashboard", href: "#Dashboard" },
  { title: "User Account Management", href: "#Account" },
  { title: "Pricing Table", href: "#Pricing" },
  { title: "Stripe Payment", href: "#Stripe" },
  { title: "Responsive Design", href: "#Responsive" },
  { title: "Seo Friendly", href: "#SEO" },
  { title: "Performance", href: "#Performance" },
  { title: "Dark / Light Theme", href: "#theme" },
  { title: "Documentation Markdown Section", href: "#Docu" },
  { title: "Contact Form", href: "#Contact" },
  { title: "Newsletter", href: "#Newsletter" }
]
export const featureListAdvanced: ListbadgProps[] = [
  { title: "Api Ready", href: "#Api" },
  { title: "Admin Dashboard", href: "#Admin" },
  { title: "Forms Exemples", href: "#Forms" },
  { title: "Full ORM Crud Exemples", href: "#ORM" },
  { title: "Crud DaTable Exemples", href: "#DataTable" },
  { title: "Infinite Scroll Posts Exemple", href: "#InfiniteScroll" },
  { title: "Drag And Drop Menu Exemple", href: "#dnd" },
  { title: "Feature Subscription Toggles", href: "#FeatureToggles" },
  { title: "Js Less Animation", href: "#Animation" },
  { title: "2FA", href: "#FA" },
  { title: "User Magic Link", href: "#MagicLink" },
  { title: "Subscription Management", href: "#Subscription" },
  { title: "Billing Management", href: "#Billing" },
  { title: "Stripe Recurent Payement", href: "#StripeRecurent" }
]
