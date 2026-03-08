# Om Kumar Associates - Portfolio Website Project Structure

## Project Overview
This is a modern portfolio website for a civil construction firm, built with React + Vite frontend and Cloudflare Workers backend for contact form handling.

---

## 📁 Root Level Files

### `.gitignore`
- **Purpose**: Specifies which files/folders Git should ignore
- **Contains**: node_modules, build files, environment variables, etc.

### `README.md`
- **Purpose**: Project documentation (currently empty)
- **Should contain**: Setup instructions, deployment guide, project description

---

## 📁 Frontend: `om_kumar_associates/portfolio_frontend/`

### Configuration Files

#### `package.json`
- **Purpose**: Defines project dependencies and scripts
- **Key Dependencies**:
  - React 19 - UI framework
  - Vite - Build tool and dev server
  - Tailwind CSS - Styling framework
  - Radix UI - Accessible component primitives
  - React Router - Page navigation
  - Lucide React - Icon library
- **Scripts**:
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build

#### `vite.config.js`
- **Purpose**: Vite bundler configuration
- **Configures**: React plugin, path aliases (@/ points to src/)

#### `tailwind.config.cjs`
- **Purpose**: Tailwind CSS configuration
- **Configures**: Custom colors, fonts, animations for construction theme

#### `eslint.config.js`
- **Purpose**: Code linting rules
- **Ensures**: Code quality and consistency

#### `index.html`
- **Purpose**: Main HTML entry point
- **Contains**: Root div where React app mounts, meta tags

---

### Source Files: `src/`

#### `main.jsx`
- **Purpose**: Application entry point
- **Function**: Renders the root App component into the DOM

#### `App.jsx`
- **Purpose**: Main application component
- **Handles**: 
  - React Query setup for data fetching
  - React Router configuration
  - Toast notifications setup
  - Route definitions (/ and 404)

#### `App.css`
- **Purpose**: Component-specific styles for App
- **Note**: Most styling is done via Tailwind in index.css

#### `index.css`
- **Purpose**: Global styles and theme configuration
- **Contains**:
  - Google Fonts import (Rajdhani, Open Sans)
  - CSS custom properties for color theme
  - Light/dark mode color variables
  - Construction-themed colors (blue, gold, dark gray)
  - Base styles for body, headings
  - Smooth scroll behavior

---

### Pages: `src/pages/`

#### `Index.jsx`
- **Purpose**: Main landing page
- **Website Section**: Entire homepage
- **Assembles**: All section components in order:
  1. Navbar
  2. HeroSection
  3. AboutSection
  4. YearlyWorkSection
  5. EquipmentSection
  6. StaffSection
  7. ClientsSection
  8. GallerySection
  9. ContactSection
  10. Footer

#### `NotFound.jsx`
- **Purpose**: 404 error page
- **Website Section**: Shown when user visits invalid URL
- **Contains**: Error message and link back to homepage

---

### Components: `src/components/`

#### `Navbar.jsx`
- **Purpose**: Top navigation bar
- **Website Section**: Fixed header at top of page
- **Features**:
  - Sticky navigation that changes on scroll
  - Desktop menu with all section links
  - Mobile hamburger menu
  - "Get a Quote" CTA button
  - Smooth scroll to sections
- **Links to**: All page sections (#hero, #about, #projects, etc.)

#### `HeroSection.jsx`
- **Purpose**: Landing hero section
- **Website Section**: First section visitors see
- **Features**:
  - Full-screen background image (hero-bg.jpg)
  - Dark overlay for text readability
  - Company tagline and main heading
  - Service description
  - Two CTA buttons:
    - "Contact Us" - scrolls to contact form
    - "Download Portfolio" - downloads PDF
  - Animated down arrow
- **Editable Content**: Tagline, heading, description, button text

#### `AboutSection.jsx`
- **Purpose**: Company information section
- **Website Section**: #about
- **Features**:
  - Mission statement
  - Vision statement
  - Company history
  - 4 stat cards:
    - Years of experience
    - Projects completed
    - Awards & certifications
    - Team members
- **Editable Content**: All text, stat numbers

#### `YearlyWorkSection.jsx`
- **Purpose**: Project portfolio showcase
- **Website Section**: #projects
- **Features**:
  - Tabbed interface for years (2021-2024)
  - Table displaying projects with:
    - Project name
    - Client/organization
    - Project type (Road, Drainage, Residential, etc.)
    - Contract amount
  - Color-coded badges for project types
- **Editable Content**: Project data array, years, amounts

#### `EquipmentSection.jsx`
- **Purpose**: Machinery and equipment showcase
- **Website Section**: #equipment
- **Features**:
  - Grid layout of equipment cards
  - Each card shows:
    - Equipment icon
    - Equipment name
    - Quantity owned
  - Hover effects
- **Editable Content**: Equipment array (name, quantity, icon)

#### `StaffSection.jsx`
- **Purpose**: Workforce details
- **Website Section**: #team
- **Features**:
  - Total workforce count
  - 4 categories of staff:
    - Management & Engineers
    - Supervisors & Foremen
    - Skilled Workers
    - Unskilled Labour
  - Each category shows role breakdown with counts
- **Editable Content**: Staff categories and role counts

#### `ClientsSection.jsx`
- **Purpose**: Client portfolio
- **Website Section**: #clients
- **Features**:
  - Major clients section (cards with icons)
  - Regular clients section (badge pills)
- **Editable Content**: Client names and lists

#### `GallerySection.jsx`
- **Purpose**: Project photo gallery
- **Website Section**: #gallery
- **Features**:
  - Before/after image comparison slider
  - Interactive drag slider
  - 4 project showcases
  - Project title and type labels
- **Editable Content**: Gallery items (images, titles, types)
- **Note**: Currently uses Unsplash placeholder images

#### `ContactSection.jsx`
- **Purpose**: Contact form and information
- **Website Section**: #contact
- **Features**:
  - Contact information display:
    - Office address
    - Phone number
    - Email address
  - Contact form with fields:
    - Full name
    - Email
    - Phone
    - Message
  - Form submission handling
  - Toast notifications
- **Editable Content**: Contact details, form endpoint
- **Note**: Form submission currently has placeholder URL

#### `Footer.jsx`
- **Purpose**: Website footer
- **Website Section**: Bottom of page
- **Features**:
  - Company name and description
  - Contact information
  - Quick navigation links
  - Download portfolio button
  - Copyright notice
- **Editable Content**: All contact info, links, copyright year

---

### UI Components: `src/components/ui/`

These are reusable UI primitives built on Radix UI:

#### `button.jsx`
- **Purpose**: Reusable button component
- **Used in**: CTAs, forms, navigation
- **Variants**: Default, outline, ghost, etc.

#### `input.jsx`
- **Purpose**: Form input field
- **Used in**: Contact form

#### `textarea.jsx`
- **Purpose**: Multi-line text input
- **Used in**: Contact form message field

#### `label.jsx`
- **Purpose**: Form field labels
- **Used in**: Contact form

#### `tabs.jsx`
- **Purpose**: Tabbed interface component
- **Used in**: YearlyWorkSection for year selection

#### `table.jsx`
- **Purpose**: Data table components
- **Used in**: YearlyWorkSection for project listing

#### `badge.jsx`
- **Purpose**: Small label/tag component
- **Used in**: YearlyWorkSection for project types

#### `toast.jsx` & `toaster.jsx`
- **Purpose**: Notification system
- **Used in**: Contact form success/error messages

#### `sonner.jsx`
- **Purpose**: Alternative toast notification library
- **Used in**: App-wide notifications

#### `tooltip.jsx`
- **Purpose**: Hover tooltips
- **Available for**: Future use

---

### Utilities: `src/lib/`

#### `utils.js`
- **Purpose**: Utility functions
- **Contains**: `cn()` function for merging Tailwind classes

---

### Hooks: `src/hooks/`

#### `use-toast.js`
- **Purpose**: Custom React hook for toast notifications
- **Used in**: ContactSection for form feedback

---

### Assets: `src/assets/`

#### `hero-bg.jpg`
- **Purpose**: Hero section background image
- **Used in**: HeroSection component
- **Editable**: Replace with your own construction site image

---

## 📁 Backend: `om_kumar_associates/contact_worker/`

### Configuration Files

#### `package.json`
- **Purpose**: Worker dependencies
- **Contains**: Wrangler (Cloudflare Workers CLI)

#### `wrangler.toml`
- **Purpose**: Cloudflare Worker configuration
- **Contains**:
  - Worker name
  - Entry point (src/index.js)
  - Environment variables:
    - `TO_EMAIL` - Where contact form emails are sent
    - `FROM_EMAIL` - Sender email address
    - `TURNSTILE_SECRET` - Cloudflare CAPTCHA secret
    - `ALLOWED_ORIGIN` - Frontend URL for CORS
- **Editable**: All environment variables need your actual values

---

### Source Files: `src/`

#### `index.js`
- **Purpose**: Serverless contact form handler
- **Handles**:
  1. **Honeypot Protection** - Catches spam bots
  2. **Rate Limiting** - Max 5 requests per 10 minutes per IP
  3. **CAPTCHA Verification** - Cloudflare Turnstile validation
  4. **Spam Filtering** - Keyword-based spam detection
  5. **Email Sending** - Via MailChannels API
  6. **CORS Handling** - Cross-origin request support
- **Functions**:
  - `fetch()` - Main request handler
  - `verifyTurnstile()` - CAPTCHA verification
  - `checkRateLimit()` - Rate limiting logic
  - `isSpam()` - Spam detection
  - `corsHeaders()` - CORS header generation
  - `errorResponse()` - Error response helper

---

## 🎨 Design System

### Color Scheme
- **Primary Blue**: `hsl(215 70% 40%)` - Professional construction blue
- **Accent Gold**: `hsl(30 90% 50%)` - Attention-grabbing gold
- **Dark**: `hsl(220 20% 18%)` - Deep navy for headers/footer
- **Background**: Light gray for clean, professional look

### Typography
- **Headings**: Rajdhani (bold, modern, industrial feel)
- **Body**: Open Sans (readable, professional)

### Icons
- Lucide React library for consistent, professional icons

---

## 🔄 Data Flow

1. **User visits site** → `index.html` loads → `main.jsx` renders `App.jsx`
2. **App.jsx** sets up routing → Loads `Index.jsx` for homepage
3. **Index.jsx** assembles all section components in order
4. **User fills contact form** → `ContactSection.jsx` handles submission
5. **Form submits to** → Cloudflare Worker (`contact_worker/src/index.js`)
6. **Worker validates** → Sends email via MailChannels → Returns success/error
7. **Frontend shows** → Toast notification with result

---

## 📝 Files You Need to Edit

### High Priority (Required for Launch)
1. **ContactSection.jsx** - Replace `YOUR_WORKER_URL` with actual Worker URL
2. **wrangler.toml** - Add your email addresses and Turnstile secret
3. **All section components** - Replace placeholder data with real company info
4. **hero-bg.jpg** - Replace with actual construction site photo

### Medium Priority (Recommended)
1. **GallerySection.jsx** - Replace Unsplash URLs with real project photos
2. **README.md** - Add project documentation
3. **Footer.jsx** - Update copyright and company details

### Low Priority (Optional)
1. **index.html** - Update meta tags for SEO
2. **NotFound.jsx** - Customize 404 page
3. **Add company logo** - Create logo component

---

## 🚀 Quick Start Commands

```bash
# Install frontend dependencies
cd om_kumar_associates/portfolio_frontend
npm install

# Run development server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Deploy Cloudflare Worker
cd ../contact_worker
npm install -g wrangler
wrangler deploy
```

---

## 📋 Checklist for Customization

- [ ] Update company name throughout all files
- [ ] Replace hero background image
- [ ] Update About section (mission, vision, history, stats)
- [ ] Add real project data (2021-2024)
- [ ] List actual equipment and quantities
- [ ] Update staff/workforce numbers
- [ ] Add client names
- [ ] Upload project photos for gallery
- [ ] Update contact information (address, phone, email)
- [ ] Configure Cloudflare Worker with real credentials
- [ ] Add Turnstile CAPTCHA widget to contact form
- [ ] Create and add portfolio PDF
- [ ] Test contact form submission
- [ ] Update meta tags for SEO
- [ ] Add company logo/favicon

---

*Last Updated: March 9, 2026*
