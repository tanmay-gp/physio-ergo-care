# Physio Ergo Care

A modern, fast-loading, SEO-optimized website for Physio Ergo Care - a premier physiotherapy clinic in Nashik, Maharashtra, India.

## 🏥 About The Clinic

**Physio Ergo Care** is a spine and joint rehabilitation center led by Dr. Sagar Mahajan, providing evidence-based physiotherapy care since 2008. With 15+ years of experience and affiliations with Wockhardt and Medicover Hospitals, the clinic offers comprehensive rehabilitation services.

### Key Features
- ⚡ **Fast Loading**: Built with Vite for optimal performance
- 🔍 **SEO Optimized**: Structured data, semantic HTML, meta tags
- 📱 **Mobile Responsive**: Works perfectly on all devices
- 🗺️ **Easy Contact Access**: Phone and location always accessible
- 🔬 **Research-Based Design**: Publications and credentials prominently displayed

## 🚀 Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Static site (can be deployed to Vercel, Netlify, etc.)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
physio-ergo-care/
├── public/
│   └── favicon.svg
├── src/
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useCountUp.js
│   ├── sections/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Credentials.jsx
│   │   ├── About.jsx
│   │   ├── Publications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── DESIGN.md
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: #0D7377 (Teal)
- **Secondary**: #14919B (Light Teal)
- **Accent**: #32E0C4 (Bright Teal)
- **Text Primary**: #1A1A2E (Dark Navy)
- **Text Secondary**: #4A5568 (Gray)

### Typography
- **Font Family**: Inter, Poppins
- **Headings**: Poppins (Bold/Semibold)
- **Body**: Inter (Regular)

## 🔍 SEO Features

1. **Meta Tags**: Optimized title, description, keywords
2. **Open Graph**: Facebook/Twitter sharing support
3. **Structured Data**: JSON-LD for LocalBusiness, MedicalBusiness
4. **Semantic HTML**: Proper use of header, nav, main, section, article, footer
5. **Accessibility**: Focus states, aria labels, reduced motion support

## 📞 Contact Information

- **Phone**: +91 98902 77759
- **Email**: sagarmahajan1@gmail.com
- **Location**: Nashik, Maharashtra, India
- **Hours**: 
  - Mon-Sat: 8:00 AM - 10:00 AM & 7:00 PM - 10:00 PM
  - Sun: Closed

## 📄 Services

1. Spine Rehabilitation (McKenzie Method)
2. Sports Rehabilitation
3. Post-Op Rehabilitation (TKR, THR, ACL/PCL)
4. Knee Rehabilitation
5. Shoulder Rehabilitation
6. Hand, Wrist & Elbow Rehabilitation
7. Ankle Rehabilitation

## 🏆 Credentials

- BPTh, MPTh (Ortho)
- Certified McKenzie Practitioner
- Certified Neurodynamic Therapist
- Certified Dry Needling Practitioner
- Chief Physiotherapist at Ashoka Medicover Hospital
- Former HOD at Wockhardt Hospital Nashik
- President, Physiotherapists' Association of Nashik (PAN)
- IAP Significant Contribution Award (2016)

## 📚 Publications

1. McConnell Patellofemoral Taping in Post-TKR Patients (2018)
2. Physiotherapy for Dialysis Patients (2016)
3. Neurodynamics for Piriformis Syndrome Induced Sciatica (2007)
4. Ergoexercises for Desk Workers (2014)

## 🚀 Deployment

The site can be deployed to any static hosting service:

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Build output is in `dist/` folder - configure your GitHub Pages to serve from this folder.

## 📄 License

© 2024 Physio Ergo Care. All rights reserved.

## 🙏 Credits

- Content sourced from original website: https://sagarmahajan1.wixsite.com/physioergocare
- Design and development by AI assistant
