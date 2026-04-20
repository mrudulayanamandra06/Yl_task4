# EcoTrace | Enterprise Sustainability Dashboard

## Project Overview
"EcoTrace" is an enterprise-grade sustainability tracking interface developed for the Frontend Web Developer Internship. This project demonstrates the progression from a static layout to a highly performant, accessible, and interactive Single Page Application (SPA) using Vanilla JavaScript. The Week 4 iteration utilizes a "Clean Tech Enterprise" design system, optimizing both the user experience (UX) and underlying web performance metrics.

## Key Features & Optimizations
*Web Accessibility (A11y) Compliant: Features a hidden "Skip to main content" link for keyboard navigation.
  * Implements explicit high-contrast `:focus-visible` states.
  * Utilizes comprehensive ARIA attributes (`role="tablist"`, `aria-selected`) for screen-reader compatibility.
  * Uses `aria-live` regions to announce dynamic calculator results instantly.
  *Performance Optimized (WebPerf):
  * Eliminated heavy background images and expensive CSS filters, utilizing lightweight CSS radial gradients instead.
  * Preloads critical typography (`<link rel="preconnect">`) to eliminate render-blocking.
  * JavaScript execution is deferred (`defer` attribute) to ensure instant HTML parsing and a rapid First Contentful Paint (FCP).
  *Interactive SPA Routing: Custom Vanilla JavaScript handles event-driven tab switching without page reloads.
  *Dynamic Impact Simulator: An interactive CO2 offset calculator with strict form validation (preventing negative/empty inputs) and smooth native Web Animations API integration.

## Tech Stack
*HTML5:Semantic structure emphasizing WCAG accessibility standards.
*CSS3: Custom properties (CSS variables), CSS Grid/Flexbox layouts, and lightweight gradients.
*Vanilla JavaScript: DOM manipulation, event handling, real-time calculations, and state management. No external frameworks or libraries were used.

## File Structure
* `index.html` - The core semantic layout, navigation, and ARIA-enabled structure.
* `style.css` - All visual styling, responsive media queries, and optimized "Clean Tech" theming.
* `script.js` - The logical engine powering the SPA tab routing and the interactive Impact Simulator.

## How to Run Locally
This project is built with native web technologies and requires no package managers or build tools.
1. Clone or download the repository.
2. Ensure `index.html`, `style.css`, and `script.js` are located in the same directory.
3. Open `index.html` in any modern web browser to view the dashboard.
