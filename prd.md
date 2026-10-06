Build a modern, responsive service-request web app in HTML, CSS, and JavaScript based closely on the attached reference image.

IMPORTANT:
- Reproduce the overall visual style, spacing, typography, rounded cards, icons, buttons, and layout shown in the reference image.
- The reference image is the UI/UX direction.
- I will provide ALL service names, icons, category data, resource logos, webhook URL, and other content separately.
- Do NOT invent service data when I have not provided it.
- Keep all content/data easy to modify from one JavaScript configuration object.
- Build this as a polished production-ready responsive UI.
- It must work perfectly on mobile, tablet, and desktop.
- Use clean semantic HTML5, modern CSS, and vanilla JavaScript unless a framework is specifically required.
- Avoid unnecessary dependencies.

==================================================
1. MAIN UI
==================================================

Create a service request interface similar to the reference image.

Top navigation/service category section:

[Website Icon] Website
[Apps Icon] Apps
[AI Automation Icon] AI Automation
[Meta Ads Icon] Meta Ads

Each category should have:
- Icon/image
- Category name
- Click interaction

When the user clicks ANY top category/icon:

Open a FULL-SCREEN / FULL-PAGE popup or modal.

The popup should:
- Cover the complete viewport
- Have a close button
- Have a clean modern design
- Show the selected category
- Display ALL services belonging to that category
- Use ACCORDIONS
- Every accordion must be COLLAPSED by default
- Clicking an accordion expands it
- Clicking it again collapses it
- Multiple accordions may be open at the same time unless otherwise specified
- Include all service information that I provide
- Make the popup vertically scrollable
- Work smoothly on mobile
- Prevent the background page from scrolling while the popup is open

The service/category data must come from JavaScript configuration rather than being hardcoded throughout the HTML.

==================================================
2. CATEGORY DROPDOWN
==================================================

Create a "Category" dropdown matching the reference image.

The dropdown must contain exactly these four categories:

1. Websites
2. Apps
3. AI Automation
4. Meta Ads

When a category is selected:
- Update the selected category visually
- Automatically update the "Select service" dropdown
- Only show services belonging to the selected category
- Reset the selected service whenever the category changes
- The category and service data should be controlled through a central JavaScript object

Example data structure:

const serviceData = {
  websites: {
    label: "Websites",
    icon: "...",
    services: [...]
  },
  apps: {
    label: "Apps",
    icon: "...",
    services: [...]
  },
  aiAutomation: {
    label: "AI Automation",
    icon: "...",
    services: [...]
  },
  metaAds: {
    label: "Meta Ads",
    icon: "...",
    services: [...]
  }
};

I will provide the actual service data later.

==================================================
3. SELECT SERVICE DROPDOWN
==================================================

Create a "Select service" dropdown similar to the reference.

Requirements:
- Initially show "Select service"
- Services depend on the selected category
- If Websites is selected, show only Website services
- If Apps is selected, show only App services
- If AI Automation is selected, show only AI Automation services
- If Meta Ads is selected, show only Meta Ads services
- Service selection should be required before submission
- Include proper visual states:
  - Default
  - Hover
  - Focus
  - Selected
  - Disabled

==================================================
4. FILL YOUR DETAILS POPUP
==================================================

When the user clicks "Fill your details", open a modal/popup.

The popup should contain a multi-step/tabbed form.

TAB 1:
"Personal Details"

Fields:
- Name
- Mobile
- Email

TAB 2:
"Company Details & Budget"

Fields should include:
- Company details
- Budget

Make the exact fields configurable because I will provide the final requirements.

The UI should have:
- Clear labels
- Input validation
- Required field indicators
- Mobile-friendly inputs
- Proper email validation
- Clean error messages
- Tab navigation
- Next/Back buttons where appropriate
- Ability to edit previously entered details
- Smooth transitions

Do not lose entered data when switching between tabs.

After the user completes the form, show a summary/review state before final submission if appropriate.

==================================================
5. SUBMIT BUTTON
==================================================

The main "Submit" button should collect ALL information:

- Selected category
- Selected service
- Name
- Mobile
- Email
- Company details
- Budget
- Any additional fields I provide later

Then send the complete submission to a webhook.

Use a configurable endpoint:

const WEBHOOK_URL = "YOUR_WEBHOOK_URL";

Do NOT hardcode the webhook throughout the application.

Use fetch() to send the data.

Example payload structure:

{
  category: "...",
  service: "...",
  name: "...",
  mobile: "...",
  email: "...",
  company: "...",
  budget: "...",
  timestamp: "..."
}

I will provide the actual webhook endpoint later.

The application should:
- Show a loading state while submitting
- Prevent duplicate submissions
- Handle success response
- Handle errors
- Show a success message after successful submission
- Show a useful error message if submission fails
- Reset the form only after successful submission

==================================================
6. GOOGLE SHEETS INTEGRATION
==================================================

The submitted data must also be stored in Google Sheets.

Design the code so that the frontend sends the submission to a webhook/API endpoint, and that endpoint can write the data into Google Sheets.

Do not expose Google Sheets credentials, API keys, or private credentials in frontend JavaScript.

Use placeholders/configuration such as:

const WEBHOOK_URL = "YOUR_WEBHOOK_URL";

The expected Google Sheet columns should be easy to configure.

For example:

Timestamp
Category
Service
Name
Mobile
Email
Company
Budget

I will provide the actual Google Sheets/webhook implementation details later.

==================================================
7. STICKY INQUIRY BUTTON
==================================================

Create a sticky/floating "Inquiry" button at the bottom of the screen, similar to the reference image.

Requirements:
- Always remain visible while scrolling
- Responsive on mobile and desktop
- Fixed position
- Modern rounded button
- Clicking it opens an Inquiry popup/modal

Inquiry popup should contain:

"How can we help?"

Two options:

1. Call
2. WhatsApp

Phone number:

916394172884

Call button should open:

tel:916394172884

WhatsApp button should open WhatsApp using:

https://wa.me/916394172884

Open WhatsApp appropriately on mobile and desktop.

Use accessible buttons and proper icons.

==================================================
8. STACK RESOURCES
==================================================

Create a "Stack Resources" section similar to the reference image.

Display resource items such as:

- WordPress
- Supabase
- n8n
- RAG
- GitHub

IMPORTANT:
I will provide the actual icons/images and final resource list.

Each resource should contain:
- Circular icon/image
- Resource name

Create this as an AUTO-RUNNING INFINITE CAROUSEL.

Requirements:
- Automatically scroll horizontally
- Infinite loop
- Smooth continuous movement
- Pause on hover where appropriate
- Resume when hover ends
- Touch/swipe support on mobile if practical
- No visible jump when looping
- Responsive number/size of items
- Resource data controlled from JavaScript

Example:

const resources = [
  {
    name: "WordPress",
    icon: "..."
  },
  {
    name: "Supabase",
    icon: "..."
  }
];

Do not hardcode individual resource cards throughout the HTML.

==================================================
9. RESPONSIVE DESIGN
==================================================

The application must be designed mobile-first.

Desktop:
- Centered content
- Comfortable max-width
- Large typography
- Spacious layout

Tablet:
- Adjust spacing and component sizes

Mobile:
- Full-width controls
- Touch-friendly buttons
- Large tap targets
- Full-screen modals
- Proper mobile form layout
- No horizontal overflow
- Sticky Inquiry button should not cover important content

Match the reference image particularly closely on mobile.

==================================================
10. VISUAL DESIGN
==================================================

Use the reference image as the primary visual inspiration.

Visual characteristics:

- Clean white/light background
- Black/dark typography
- Rounded light-gray controls
- Dark/black primary buttons
- Large bold heading
- Minimal modern design
- Soft rounded corners
- Simple iconography
- Generous spacing
- Professional agency/SaaS appearance

Main heading:

"Request a service"

Controls similar to:

"Category"
"Select service"
"Fill your details"

Primary button:

"Submit"

Section:

"Stack Resources"

Sticky button:

"Inquiry"

Use modern system fonts or a clean web font.

Do not over-design the interface.
Keep it close to the supplied reference.

==================================================
11. ACCESSIBILITY
==================================================

Implement proper accessibility:

- Semantic HTML
- Labels for every form input
- Keyboard navigation
- Visible focus states
- ARIA labels where required
- Modal focus handling
- ESC closes modals
- Buttons should be actual <button> elements
- Dropdowns should be keyboard accessible
- Good color contrast
- Do not rely only on color to communicate errors

==================================================
12. MODAL BEHAVIOR
==================================================

There are multiple popup/modal experiences:

A. Category/Top Icon Service Popup
- Full-page modal
- Shows category services
- Accordion layout
- All collapsed by default

B. Fill Your Details Modal
- Personal Details tab
- Company Details & Budget tab
- Form validation

C. Inquiry Modal
- Call
- WhatsApp

All modals should:
- Have close button
- Close with ESC
- Have smooth open/close animation
- Prevent background scrolling
- Be responsive
- Restore background scrolling when closed

==================================================
13. DATA ARCHITECTURE
==================================================

Keep all editable content in one clearly marked configuration section.

For example:

const APP_CONFIG = {
  categories: [...],
  services: {...},
  resources: [...],
  webhook: {
    url: "YOUR_WEBHOOK_URL"
  },
  contact: {
    phone: "916394172884",
    whatsapp: "916394172884"
  }
};

This is extremely important.

I want to be able to replace:
- Categories
- Services
- Service descriptions
- Icons
- Resource logos
- Resource names
- Webhook URL
- Form fields
- Contact number

without modifying the core application logic.

==================================================
14. CODE STRUCTURE
==================================================

If generating a standalone project, use:

index.html
style.css
script.js

Keep the code clean and organized.

Suggested JavaScript structure:

1. Configuration/Data
2. DOM references
3. Category rendering
4. Service rendering
5. Modal management
6. Accordion functionality
7. Form handling
8. Validation
9. Webhook submission
10. Inquiry modal
11. WhatsApp/Call actions
12. Resource carousel
13. UI utilities

Add clear comments for sections.

==================================================
15. IMPORTANT UX DETAILS
==================================================

Add polished micro-interactions:

- Button hover effects
- Dropdown transitions
- Modal fade/slide animation
- Accordion expand/collapse animation
- Input focus animation
- Submit loading state
- Success state
- Error state
- Carousel smooth movement

Do not make animations excessive.

Performance should remain good on mobile devices.

==================================================
16. SECURITY / FRONTEND RULES
==================================================

Do not place:
- Google API private keys
- Service account credentials
- Secret tokens

inside frontend JavaScript.

The frontend should communicate with a secure webhook/backend endpoint.

Sanitize/validate user input before sending.

==================================================
17. FINAL OUTPUT
==================================================

Generate the complete working application.

Do not give me only a design mockup.

I need functional:
- Category selection
- Dynamic service dropdown
- Full-page service popup
- Accordion services
- Details popup
- Two-step/tabbed form
- Form validation
- Webhook submission
- Google Sheets-ready integration
- Sticky Inquiry popup
- Call button
- WhatsApp button
- Auto-running infinite Stack Resources carousel

Use the attached reference image as the visual design reference.

I will provide the actual data after the initial implementation.

Make the application easy to customize without changing the core JavaScript logic.