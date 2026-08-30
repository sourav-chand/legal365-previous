# Quick Start Guide - Legal365

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Customize Your Site

#### Replace Placeholder Images
The site uses `/api/placeholder` URLs. Replace these in:
- `components/hero.tsx` - Line 149
- `components/about-section.tsx` - Line 82
- `components/why-choose-section.tsx` - Line 128
- `components/academic-programs.tsx` - Course data array
- `components/blog-section.tsx` - Blog posts array

#### Update Contact Information
Edit `components/contact-section.tsx`:
- Office address
- Phone number
- Email address
- Office hours

#### Modify Footer Links
Edit `components/footer.tsx`:
- Social media URLs
- Footer navigation links
- Copyright text

#### Customize Colors (Optional)
Edit `app/globals.css` - modify CSS variables in `:root`:
```css
:root {
  --ink-navy: #0F1B2D;
  --parchment: #F7F5EF;
  --brass-gold: #B08D57;
  /* ... etc */
}
```

### Step 4: Add Real Content

#### Academic Programs
Edit `components/academic-programs.tsx`:
```typescript
const courses: Course[] = [
  {
    id: "1",
    category: "diploma",
    title: "Your Program Name",
    duration: "1 Year",
    mode: "Online",
    eligibility: "Graduate in any discipline",
    fee: "₹45,000",
    image: "/images/courses/your-image.jpg",
  },
  // Add more courses...
];
```

#### Legal Services
Edit `components/legal-services.tsx`:
```typescript
const services: LegalService[] = [
  {
    id: "1",
    icon: Users,
    category: "Family Law",
    title: "Your Service",
    description: "Service description",
    startingPrice: "15,000",
  },
  // Add more services...
];
```

#### Blog Posts
Edit `components/blog-section.tsx`:
```typescript
const posts: BlogPost[] = [
  {
    id: "1",
    category: "Family Law",
    categoryColor: "slate",
    title: "Your Blog Title",
    excerpt: "Short description",
    author: "Adv. Name",
    date: "Dec 15, 2024",
    views: "2.4k",
    image: "/images/blog/your-image.jpg",
  },
  // Add more posts...
];
```

### Step 5: Build for Production
```bash
npm run build
npm start
```

## ⚙️ Configuration Files

- `app/globals.css` - Design system tokens & styles
- `app/layout.tsx` - Site metadata & SEO
- `app/page.tsx` - Homepage component composition
- `components/` - All UI components

## 🎨 Design System

### Colors
- **Brass Gold** (#B08D57) - Primary CTAs, academic wing
- **Oxblood** (#8A1F2B) - Marketplace wing, urgent actions
- **Ink Navy** (#0F1B2D) - Dark backgrounds, text
- **Parchment** (#F7F5EF) - Light backgrounds

### Typography
- **Display**: Source Serif 4 - Headings
- **Body**: Inter - UI & content
- **Mono**: IBM Plex Mono - Numbers & data

## 📱 Testing Checklist

Before launching:
- [ ] Replace all placeholder images
- [ ] Update contact information
- [ ] Add real course/service data
- [ ] Test on mobile devices
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit
- [ ] Verify form submissions work
- [ ] Check all links are working
- [ ] Add Google Analytics (optional)
- [ ] Set up proper SEO metadata

## 🔧 Common Customizations

### Change Header Links
Edit `components/header.tsx` - Update navigation items

### Modify Hero Headline
Edit `components/hero.tsx` - Lines 97-110

### Update Stats
Edit `components/hero.tsx` - `stats` array (Line 15-20)

### Change CTA Text
Edit individual section files - Button text and links

### Adjust Animation Speed
Most animations use these durations:
- Fast: 150-200ms (hover effects)
- Medium: 400-600ms (page loads)
- Slow: 800-1000ms (scroll reveals)

Edit `transition={{ duration: X }}` in component files

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Output directory: `.next`

## 📚 Need Help?

- Review `README.md` for full documentation
- Check `ACCESSIBILITY.md` for a11y guidelines
- All components are in `/components` directory
- Design tokens in `app/globals.css`

## 🎯 Next Steps

1. **Connect Backend**: Integrate form submissions with your API
2. **Add CMS**: Connect to Contentful, Sanity, or Strapi for content management
3. **Set up Auth**: Implement user authentication for student/client portals
4. **Add Analytics**: Google Analytics, Plausible, or Fathom
5. **Enable Search**: Add search functionality for courses and services
6. **Create Admin Panel**: Build dashboard for managing content

---

**Ready to launch?** Your Legal365 platform is good to go! 🎉
