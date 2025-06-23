export const navigation = [
  {
    parent: "Dashboards",
    children: [
      { name: "CRM", href: "/admin/dashboards/crm" },
      { name: "Analytics", href: "/admin/dashboards/analytics" },
    ],
  },
  {
    parent: "Front Pages",
    children: [
      { name: "Landing", href: "/" },
      { name: "Pricing", href: "/" },
      { name: "Payment", href: "/" },
      { name: "Checkout", href: "/" },
      { name: "Help Center", href: "/" },
    ],
  },
  {
    header: "Apps and Pages",
  },
  {
    parent: "eCommerce",
    children: [
      { name: "Dashboard", href: "/" },
      {
        parent: "Products",
        children: [
          { name: "List", href: "/" },
          { name: "Add", href: "/" },
          { name: "Category", href: "/" },
        ],
      },
      {
        parent: "Orders",
        children: [
          { name: "List", href: "/" },
          { name: "Details", href: "/" },
        ],
      },
      {
        parent: "Customers",
        children: [
          { name: "List", href: "/" },
          { name: "Details", href: "/" },
        ],
      },
      { name: "Manage Reviews", href: "/" },
      { name: "Referrals", href: "/" },
      { name: "Settings", href: "/" },
    ],
  },
  {
    parent: "Academy",
    children: [
      { name: "Dashboard", href: "/admin/academy/dashboard" },
      { name: "My Courses", href: "/admin/academy/my-courses" },
      { name: "Course Details", href: "/admin/academy/course-details" },
    ],
  },
  { name: "Logistics", href: "/admin/logistics" },
  { name: "Email", href: "/admin/email" },
  { name: "Chat", href: "/" },
  { name: "Calendar", href: "/admin/calendar" },
  { name: "Kanban", href: "/admin/kanban" },
  {
    parent: "Invoice",
    children: [
      { name: "Add", href: "/admin/invoice/add" },
      { name: "Edit", href: "/admin/invoice/edit" },
      { name: "List", href: "/admin/invoice/list" },
      { name: "Preview", href: "/admin/invoice/preview" },
    ],
  },
  {
    parent: "User",
    children: [
      { name: "List", href: "/" },
      { name: "View", href: "/" },
    ],
  },
  {
    parent: "Roles and Permissions",
    children: [
      { name: "Roles", href: "/" },
      { name: "Permissions", href: "/" },
    ],
  },
  {
    parent: "Pages",
    children: [
      { name: "User Profile", href: "/admin/pages/user-profile" },
      { name: "Account Settings", href: "/" },
      { name: "FAQ", href: "/" },
      { name: "Pricing", href: "/" },
      {
        parent: "Miscellaneous",
        children: [
          { name: "Coming Soon", href: "/" },
          { name: "Under Maintenance", href: "/" },
          { name: "Page Not Found - 404", href: "/" },
          { name: "Not Authorized - 401", href: "/" },
        ],
      },
    ],
  },
  {
    parent: "Authentication",
    children: [
      {
        parent: "Login",
        children: [
          { name: "Login v1", href: "/" },
          { name: "Login v2", href: "/" },
        ],
      },
      {
        parent: "Register",
        children: [
          { name: "Register v1", href: "/" },
          { name: "Register v2", href: "/" },
          { name: "Register Multi - Steps", href: "/" },
        ],
      },
      {
        parent: "Verify Email",
        children: [
          { name: "Verify Email v1", href: "/" },
          { name: "Verify Email v2", href: "/" },
        ],
      },
      {
        parent: "Forgot Password",
        children: [
          { name: "Forgot Password v1", href: "/" },
          { name: "Forgot Password v2", href: "/" },
        ],
      },
      {
        parent: "Reset Password",
        children: [
          { name: "Reset Password v1", href: "/" },
          { name: "Reset Password v2", href: "/" },
        ],
      },
      {
        parent: "Two Steps",
        children: [
          { name: "Two Steps v1", href: "/" },
          { name: "Two Steps v2", href: "/" },
        ],
      },
    ],
  },
  {
    parent: "Wizard Examples",
    children: [
      { name: "Checkout", href: "/" },
      { name: "Property Listing", href: "/" },
      { name: "Create Deal", href: "/" },
    ],
  },
  { name: "Dialog Examples", href: "/" },
  {
    parent: "Widget Examples",
    children: [
      { name: "Basic", href: "/" },
      { name: "Advanced", href: "/" },
      { name: "Statistics", href: "/" },
      { name: "Charts", href: "/" },
      { name: "Gamification", href: "/" },
      { name: "Actions", href: "/" },
    ],
  },
  { header: "Forms and Tables" },
  { name: "Forms Layouts", href: "/" },
  // { name: "Form Validation", href: "/" },
  // { name: "Form Wizard", href: "/" },
  // { name: "Form Elements", href: "/" },
  { header: "Charts and Misc" },
  {
    parent: "Charts",
    children: [
      { name: "Apexchart", href: "/admin/charts/apex" },
      { name: "d3.js", href: "/" },
    ],
  },
  // { name: "Foundation", href: "/" },
  { name: "Components", href: "https://www.shadcn-svelte.com/" },
  // { name: "Menu Examples", href: "/" },
  // { name: "Raise Support", href: "/" },
  // { name: "Documentation", href: "/" },
  {
    parent: "Others",
    children: [
      { name: "Item with Badge", href: "/" },
      { name: "External Link", href: "/" },
    ],
  },
  {
    parent: "Menu Levels",
    children: [
      { name: "Menu Level 2", href: "/" },
      {
        parent: "Menu Level 2",
        children: [
          { name: "Menu Level 3", href: "/" },
          { name: "Menu Level 3", href: "/" },
        ],
      },
      { name: "Disabled Menu", href: "/" },
    ],
  },
];
