# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "GeniusTax" - a Russian-language accounting services company in the Netherlands. The site is built using Nicepage 7.13.0 and consists of static HTML pages with custom CSS styling and jQuery-based interactions.

**🔴 PRIORITY: MOBILE-FIRST DEVELOPMENT** - All changes must prioritize mobile experience. Test mobile breakpoints first before desktop.

## Technology Stack

- **HTML**: Standard HTML5 with Nicepage-generated markup
- **CSS**: Custom CSS with Nicepage framework (nicepage.css) and page-specific stylesheets
- **JavaScript**:
  - jQuery (jquery.js)
  - Nicepage functionality (nicepage.js)
  - intlTelInput library for international phone number input
- **Languages Supported**: English, Russian (Русский), Romanian (Română)

## Site Structure

**Main Pages**:
- `index.html` - Homepage (redirects from Home.html)
- `Services.html` - Services page (Услуги)
- `Contact.html` - Contact page with form (Контакты)
- `About-us.html` - About page
- `Terms-of-use.html` - Terms of service

**Key Directories**:
- `images/` - All image assets including brand logo and service icons
- `intlTelInput/` - International telephone input library assets

**CSS Files**:
- `nicepage.css` - Core Nicepage framework styles (~1.6MB, comprehensive)
- `index.css` - Homepage-specific styles
- `Services.css` - Services page styles (largest custom CSS)
- `Contact.css` - Contact page styles
- `About-us.css` - About page styles
- `Terms-of-use.css` - Terms page styles

## Architecture and Patterns

### HTML Structure
- All pages use Nicepage's class-based styling system (`.u-*` classes)
- Common header structure across all pages with navigation menu
- Responsive design with mobile hamburger menu (`u-offcanvas`, `u-menu-collapse`)
- Language selector in header with flags (EN, RU, RO)
- Standard Nicepage section/sheet layout pattern

### Navigation System
- Desktop navigation: `.u-nav-container` with horizontal menu
- Mobile navigation: `.u-nav-container-collapse` with overlay/offcanvas menu
- Menu controlled by ResponsiveMenu class (in nicepage.js)
- Breakpoint: MD (939px) - controlled by `data-responsive-from="MD"`

### Responsive Behavior
- Nicepage's `.u-hidden-*` classes control element visibility (xs/sm/md/lg/xl)
- Menu collapses to hamburger below MD breakpoint
- Layout uses `.u-layout-wrap` and `.u-layout-cell` for grid system

### JavaScript Components
1. **ResponsiveMenu** (nicepage.js:1325): Handles mobile menu open/close, overlay behavior, and offcanvas transitions
2. **Carousel** (nicepage.js:1314): Bootstrap-style carousel with touch/swipe support
3. **Maps Integration** (nicepage.js:1324): Google Maps iframe embedding with custom markers
4. **intlTelInput**: International phone number validation and formatting

### Forms
- Contact form uses Nicepage form processing: `https://forms.nicepagesrv.com/v2/form/process`
- Form includes name, email, phone (with intlTelInput), and message fields
- Phone input has international dialing code selector

## Mobile-First Development Workflow 📱

### Critical Mobile Breakpoints
CSS uses mobile-first responsive design with these breakpoints:
- **≤575px (xs)**: Mobile phones - **PRIMARY TESTING TARGET**
- **576-767px (sm)**: Large phones/small tablets
- **768-991px (md)**: Tablets
- **992-1199px (lg)**: Small desktops
- **≥1200px (xl)**: Large desktops

**Menu breakpoint**: 939px (`data-responsive-from="MD"`)

### Mobile Development Checklist
When making ANY change, test in this order:
1. ✅ **Mobile first (≤575px)** - Most users are here
2. ✅ Touch targets (min 44x44px)
3. ✅ Hamburger menu functionality
4. ✅ Forms on mobile (especially phone input)
5. ✅ Text readability (font sizes, line height)
6. ✅ Image scaling and performance
7. ✅ Button/link tap responsiveness
8. Only then verify tablet and desktop

### Mobile-Specific CSS Patterns
Each page CSS file contains extensive `@media (max-width: XXXpx)` queries:
- **268 total media queries** across all CSS files
- Page-specific CSS files contain 4-32 mobile breakpoints each
- `@media (max-width: 575px)` = critical mobile styles
- `@media (max-width: 767px)` = phone/tablet transition
- `@media (max-width: 991px)` = tablet styles

**Example from index.css:575px**:
```css
@media (max-width: 575px) {
  .u-section-1 .u-text-1 {
    font-size: 1.875rem;  /* Reduced from 2.9375rem desktop */
  }
}
```

### Mobile Menu System
- **Desktop**: `.u-nav-container` (visible ≥940px)
- **Mobile**: `.u-nav-container-collapse` (visible <940px)
- **Hamburger**: `.menu-collapse` triggers menu open
- **Overlay**: `.u-menu-overlay` darkens background when menu open
- **Off-canvas modes**: `.u-offcanvas`, `.u-offcanvas-shift`

**JavaScript control**: `ResponsiveMenu` class in nicepage.js:1325
- Handles touch events
- Manages overlay opacity
- Controls scroll behavior (disables body scroll when menu open)

### Mobile Touch Interactions
All interactive elements support touch:
- **Carousel**: Touch/swipe enabled (nicepage.js:1314)
- **Menu**: Touch-optimized open/close
- **Forms**: intlTelInput for mobile-friendly phone entry
- **Links**: Proper touch target sizing

### Making Changes (Mobile-First Approach)

#### Content Changes
1. Edit HTML files directly
2. **Check mobile class variants**: `.u-hidden-xs`, `.u-hidden-sm`
3. Test on mobile viewport first (375px width is standard)
4. Maintain Nicepage class structure

#### Styling Changes
1. **Always edit mobile-first**: Start with smallest breakpoint
2. Page-specific CSS: Edit corresponding file (e.g., `index.css`)
3. Find the `@media (max-width: 575px)` section
4. Test changes at 375px width before larger screens
5. Use browser DevTools mobile emulation

#### Adding Mobile-Optimized Content
1. Use `.u-hidden-lg .u-hidden-xl` to show only on mobile
2. Use `.u-hidden-xs .u-hidden-sm` to hide on mobile
3. Adjust padding/margins for mobile in media queries
4. Reduce font sizes for mobile (typically 60-70% of desktop)

### Mobile Testing Requirements
Test every change on these viewports:
- **iPhone SE**: 375x667px (most common)
- **iPhone 12/13**: 390x844px
- **Samsung Galaxy**: 360x740px
- **iPad**: 768x1024px

**Browser DevTools**: Use responsive mode with touch simulation enabled

### Common Mobile Issues to Avoid
- ❌ Text too small (<16px causes zoom on iOS)
- ❌ Touch targets <44x44px
- ❌ Horizontal scrolling on mobile
- ❌ Fixed elements covering content
- ❌ Forms with mobile-unfriendly inputs
- ❌ Images without mobile optimization
- ❌ Animations that lag on mobile devices

## Key Integration Points

### Language Switching
- Language selector in header (`.u-language`)
- Each language links to same page with language parameter
- Currently links just refresh same page - implementation appears incomplete
- Text content is in Russian by default

### Brand Assets
- Logo: `images/brand.png` (1024x1024)
- Organization schema.org markup includes logo reference

### External Services
- Google Fonts: Roboto, Open Sans, Plus Jakarta Sans, Montserrat
- Nicepage form processing service
- Google Maps API (for map embeds)
- intlTelInput CDN path: `intlTelInput/`

## Important Notes

- **No build process**: This is a static site with no compilation step
- **Nicepage dependency**: Heavy reliance on Nicepage framework - avoid breaking class structures
- **Multilingual setup incomplete**: Language selector exists but content switching not implemented
- **Large CSS files**: `nicepage.css` is 1.6MB - consider optimization if loading speed is concern
- **jQuery dependency**: All interactive features require jQuery
- **Browser compatibility**: Uses modern CSS features but falls back gracefully

## Common Modifications

### Update Contact Information
- Edit Contact.html form action if changing form processor
- Update any hardcoded contact details in content sections

### Change Brand Colors
- Primary color palette: `u-palette-1-*` classes throughout
- Theme color meta tag: `#0097a7` (teal/cyan)
- Button hover color: `--hover-color-var: #ffc900` (yellow)

### Modify Menu Structure
- Update navigation `<ul>` in each page's header
- Maintain both `.u-nav-1` (desktop) and `.u-nav-2` (mobile) lists
- Keep `data-u-ride` and `data-u-slide` attributes for carousels

### Fix Language Switching
- Currently all language links point to same page
- To implement: create separate page versions (e.g., `index-en.html`, `index-ru.html`, `index-ro.html`)
- Or: Implement JavaScript-based content switching