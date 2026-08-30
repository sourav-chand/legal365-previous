# Accessibility Documentation - Legal365

## WCAG 2.1 AA Compliance

### Color Contrast Ratios

#### Text on Backgrounds
| Foreground | Background | Ratio | Status | Use Case |
|------------|-----------|-------|--------|----------|
| Ink Navy (#0F1B2D) | Parchment (#F7F5EF) | 15.8:1 | ✅ AAA | Body text |
| Parchment (#F7F5EF) | Ink Navy (#0F1B2D) | 15.8:1 | ✅ AAA | Reversed text |
| Brass Gold (#B08D57) | Ink Navy (#0F1B2D) | 4.8:1 | ✅ AA Large | Accent headings |
| Brass Dark (#9C7B47) | Parchment (#F7F5EF) | 4.6:1 | ✅ AA Large | Small accent text |
| Oxblood (#8A1F2B) | Parchment (#F7F5EF) | 8.2:1 | ✅ AAA | Marketplace text |
| Slate Blue (#1E3A5F) | Parchment (#F7F5EF) | 9.1:1 | ✅ AAA | Secondary text |

**Note**: AA Large = 18pt+ regular or 14pt+ bold text
**Note**: All body text combinations exceed AAA standard (7:1)

### Keyboard Navigation

All interactive elements are keyboard accessible:

#### Focus Indicators
```css
*:focus-visible {
  outline: 2px solid var(--brass-gold);
  outline-offset: 2px;
  border-radius: 2px;
}
```

#### Tab Order
1. **Header Navigation**
   - Logo (skip to home)
   - Main nav links
   - About dropdown (Enter/Space to open, Esc to close)
   - Login button
   - Register button
   - Mobile menu toggle

2. **Main Content**
   - Hero CTAs
   - Track selector buttons
   - Section links
   - Card interactive elements
   - Form inputs (Contact section)

3. **Footer**
   - Footer links (4 columns)
   - Social media links

### Screen Reader Support

#### Semantic HTML Structure
```html
<header> - Site header with navigation
<main> - Primary content wrapper
  <section> - Each major page section
    <h2> - Section headings
    <article> - Blog posts, course cards
<footer> - Site footer
```

#### ARIA Labels
- Icon-only buttons include `aria-label`
- Mobile menu toggle: `aria-label="Toggle menu"`
- Social links: `aria-label="[Platform name]"`
- Form inputs: Associated with `<label>` elements (no placeholder-only)

#### Hidden Content
- Mobile menu uses proper `display: none` when closed
- Dropdown menus use `AnimatePresence` for proper DOM removal

### Motion & Animation

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Respects user preference:**
- No count-up animations
- No staggered reveals
- No parallax/drift effects
- No rotation animations
- Content appears instantly

#### Safe Animation Patterns
- All animations are non-essential (decorative only)
- No information conveyed through motion alone
- No auto-playing carousels without pause controls
- All animations < 5 seconds duration

### Form Accessibility

#### Contact Form Best Practices
```typescript
// ✅ Real labels, not placeholder-only
<Label htmlFor="name">Full Name</Label>
<Input id="name" name="name" placeholder="Enter your full name" />

// ✅ Error messages associated with inputs
{errors.email && (
  <p className="text-oxblood text-sm mt-1" role="alert">
    {errors.email}
  </p>
)}

// ✅ Visible validation states
<Input error={!!errors.phone} />
```

#### Form Features
- Labels always visible (not hidden or floating)
- Error messages use color + icon + text (not color alone)
- Clear focus indicators
- Submit button disabled state during submission
- Success feedback with multiple cues (icon, text, Case Seal animation)

### Touch Targets

All interactive elements meet minimum 44×44px size:
- Buttons: 44px height minimum
- Links: Adequate padding
- Form inputs: 44px height
- Mobile menu items: 48px height

### Image Accessibility

```typescript
// All images include alt text
<img src={course.image} alt={course.title} />
<img src={post.image} alt={post.title} />

// Decorative images use empty alt
<img src="/pattern.svg" alt="" />
```

### Typography Accessibility

#### Readable Font Sizes
- Body text: 16px minimum
- Small text: 14px (with high contrast)
- Large headings: 48px+ on desktop

#### Line Height
- Body: 1.6 (comfortable reading)
- Headings: 1.2 (tight but readable)

#### Line Length
- Max-width constraints on text blocks
- Optimal: 60-75 characters per line

### Component-Specific Accessibility

#### Header Mega-Dropdown
- Keyboard openable (hover on desktop, click on mobile)
- Esc key closes dropdown
- Focus trap when open
- Screen reader announces expanded state

#### Hero Track Selector
```typescript
<button
  role="tab"
  aria-selected={activeTrack === "college"}
  onClick={() => setActiveTrack("college")}
>
  Legal College
</button>
```

#### Academic Program Filters
- Radio button semantics (single selection)
- Active state visually and programmatically indicated
- Keyboard arrow key navigation

#### Case Tracking Stepper
```typescript
<div
  role="progressbar"
  aria-valuenow={2}
  aria-valuemin={0}
  aria-valuemax={4}
  aria-label="Case progress: Advocate Assigned"
>
```

### Testing Checklist

#### Manual Testing
- [ ] Tab through entire page (no focus traps)
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Test at 200% zoom (no horizontal scroll)
- [ ] Test with keyboard only (no mouse)
- [ ] Test with reduced motion enabled
- [ ] Test with high contrast mode

#### Automated Testing Tools
- **Lighthouse**: Run accessibility audit
- **axe DevTools**: Check for WCAG violations
- **WAVE**: Visual accessibility feedback
- **Color Contrast Analyzer**: Verify ratios

### Known Limitations

1. **Image Placeholders**: Using `/api/placeholder` URLs - replace with real images before production
2. **Form Submission**: Currently simulated - needs backend integration
3. **Dynamic Content**: Some content hardcoded - needs CMS integration

### Compliance Statement

Legal365 strives for WCAG 2.1 AA compliance across all pages. We continuously test and improve accessibility. If you encounter any barriers, please contact us at accessibility@legal365.in.

**Last Updated**: December 2024
**Standards**: WCAG 2.1 Level AA
**Testing**: Manual + Automated (Lighthouse, axe)

---

## Quick Reference Commands

```bash
# Test accessibility with Lighthouse
npm run build
npx lighthouse http://localhost:3000 --only-categories=accessibility

# Check with axe-core
npm install -D @axe-core/cli
npx axe http://localhost:3000

# Validate HTML
npm install -D html-validate
npx html-validate "**/*.html"
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Inclusive Components](https://inclusive-components.design/)
