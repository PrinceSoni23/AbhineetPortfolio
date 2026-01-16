# Professor Portfolio Website

A modern, professional portfolio website for a chemistry professor with smooth animations and an elegant design.

## 🎨 Design Features

- **Eye-catching Hero Section**: Full-screen carousel with background images and professor photos
- **Animated Timeline**: Educational journey displayed with smooth animations
- **Research Showcase**: Portrait card slider with research works and awards
- **Professional Color Scheme**: Deep blues (#0f172a, #1e293b), cyan accents (#06b6d4), and gold highlights
- **Smooth Animations**: Powered by Framer Motion for professional transitions
- **Responsive Design**: Fully responsive across all devices

## 🚀 Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Swiper** - Carousels and sliders
- **React Icons** - Icon library

## 📁 Project Structure

```
abhijeet-portfolio/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx       # Hero carousel with professor image
│   │   ├── AboutSection.tsx      # About with animated timeline
│   │   └── ResearchSection.tsx   # Research cards slider
│   ├── research/
│   │   └── page.tsx              # Full research page with card grid
│   ├── page.tsx                  # Main homepage
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
└── public/
    └── images/                   # Image assets folder
```

## 📸 Required Images

You need to add the following images to the `public/images/` folder:

### Hero Section (Landscape - 1920x1080 or similar):

- `chemistry-lab-1.jpg`
- `chemistry-lab-2.jpg`
- `chemistry-lab-3.jpg`
- `professor.jpg` (Portrait photo for hero)

### About Section:

- `professor-about.jpg` (Professional portrait)

### Research Section (Portrait - 800x600 or similar):

- `research-1.jpg`
- `research-2.jpg`
- `research-3.jpg`
- `award-1.jpg`
- `award-2.jpg`
- `award-3.jpg`

## 🛠️ Installation & Setup

## 🛠️ Installation & Setup

1. **Install dependencies:**

```bash
npm install
```

2. **Add your images:**

   - The `public/images/` folder has been created
   - Add all required images listed above (see Required Images section)

3. **Customize content:**

   - Edit professor name in `app/components/HeroSection.tsx`
   - Update education timeline in `app/components/AboutSection.tsx`
   - Modify research works in `app/components/ResearchSection.tsx`

4. **Run development server:**

```bash
npm run dev
```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Guide

### Update Professor Information

**HeroSection.tsx** (Lines 8-29):

```typescript
const slides = [
  {
    title: "Dr. [Your Name]",
    subtitle: "Ph.D. in Chemistry",
    description: "Your tagline here",
    // ...
  },
];
```

**AboutSection.tsx** (Lines 10-31):

```typescript
const education = [
  {
    year: "2015-2020",
    degree: "Ph.D. in Chemistry",
    institution: "Your University",
    description: "Your specialization",
    // ...
  },
];
```

**ResearchSection.tsx** (Lines 14-75):

```typescript
export const researchWorks = [
  {
    title: 'Your Research Title',
    category: 'Research' or 'Award',
    description: 'Description of your work',
    // ...
  },
];
```

### Color Scheme

The website uses a professional chemistry-themed palette:

- **Primary Background**: Slate-900 (#0f172a)
- **Secondary Background**: Slate-800 (#1e293b)
- **Accent Color**: Cyan-400 (#06b6d4)
- **Secondary Accent**: Blue-500 (#3b82f6)
- **Award Highlights**: Gold/Amber tones

## 🌐 Deployment

Deploy easily on Vercel:

```bash
npm run build
```

## 📱 Pages

1. **Homepage** (`/`): Hero section, About section, Research preview
2. **Research Page** (`/research`): Complete grid of all research works and awards with filtering

## 🎯 Features

- ✅ Smooth page transitions
- ✅ Animated timeline
- ✅ Auto-playing carousels
- ✅ Hover effects on cards
- ✅ Responsive navigation
- ✅ Category filtering on research page
- ✅ Professional color gradients
- ✅ Custom scrollbar
- ✅ SEO-friendly structure

## 📝 Next Steps

1. Add your professor images to `public/images/`
2. Customize the content in all components
3. Update professor name, education, and research data
4. Test the website locally
5. Deploy to Vercel or your preferred hosting

---

Built with ❤️ for chemistry professors worldwide

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
