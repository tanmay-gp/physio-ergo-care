# Physio Ergo Care - UX Design Document

## Brand Identity
- **Clinic Name:** Physio Ergo Care
- **Tagline:** The Spine and Joint Rehabilitation Center
- **Established:** 2008 (15+ years of service)
- **Location:** Nashik, Maharashtra, India
- **Vibe:** Premium, Research-based, Professional, Trustworthy, Medical Excellence

## Target Audience
- Patients with orthopedic issues (knee, spine, shoulder, ankle)
- Post-operative rehabilitation patients (TKR, THR, ACL)
- Sports persons with injuries
- Desk workers with ergonomic issues
- Chronic pain patients (sciatica, arthritis)
- CKD patients on dialysis needing physiotherapy

## KPIs & Goals
1. **Fast Loading:** Core Web Vitals optimized (< 2.5s LCP)
2. **Great SEO:** Structured data, semantic HTML, meta optimization
3. **Quick Contact Access:** Phone & location within 1 click from any page
4. **Research-Based Feel:** Publications, certifications, hospital affiliations prominently displayed

---

## Information Architecture

### Primary Navigation (Sticky Header)
```
[Logo] Physio Ergo Care                    [Services] [About] [Publications] [Contact] [Book Appointment*]
                                                                   
*Primary CTA - Always visible in header (button style)
```

### Page Structure (Single Page Application with Scroll Navigation)

#### 1. HERO SECTION
**Purpose:** Immediate trust building + Primary CTA
**Content:**
- Headline: "Advanced Spine & Joint Rehabilitation in Nashik"
- Subheadline: "Evidence-based physiotherapy care since 2008. Led by Dr. Sagar Mahajan, Consultant Physiotherapist with 15+ years of experience at Wockhardt & Medicover Hospitals."
- Primary CTA: "Book Appointment" (phone/form)
- Secondary CTA: "Get Directions" (link to map)
- Trust badges: "5000+ Patients Treated" | "Certified McKenzie Practitioner" | "Hospital Affiliated"

**Design:**
- Full-width gradient background (medical blue to teal)
- Right side: Professional physiotherapy imagery
- Left side: Content + CTAs
- Sticky contact bar: Phone icon → +91 98902 77759 | Location icon → Nashik

#### 2. SERVICES SECTION
**Purpose:** Showcase wide area coverage + expertise
**Layout:** Grid cards (3 columns desktop, 1 column mobile)

**Services (7 total):**

| Service | Icon | Key Description |
|---------|------|-----------------|
| Spine Rehabilitation | Spine icon | McKenzie Method certified practitioner - holistic approach |
| Sports Rehabilitation | Running icon | Quick assessment & treatment for sportspersons |
| Post-Op Rehabilitation | Hospital icon | TKR, THR, ACL/PCL arthroscopic repair specialists |
| Knee Rehabilitation | Knee joint icon | Arthritis, injury, age-related knee pain treatment |
| Shoulder Rehabilitation | Shoulder icon | Training programs for shoulder pain recovery |
| Hand/Wrist/Elbow | Hand icon | Post-fracture, sprain, surgery rehabilitation |
| Ankle Rehabilitation | Foot icon | Sprain treatment & chronic weakness management |

**Card Design:**
- Icon at top (48px, teal color)
- Service name (H3)
- 2-line description
- "Learn More" micro-interaction (expands details)

#### 3. WHY CHOOSE US / CREDENTIALS SECTION
**Purpose:** Research-based positioning + Trust
**Layout:** 3-column feature grid + Stats row

**Credentials:**
1. **Expert Qualifications**
   - BPTh, MPTh(Ortho)
   - Certified McKenzie Practitioner
   - Certified Neurodynamic Therapist
   - Certified Dry Needling Practitioner

2. **Hospital Affiliations**
   - Chief Physiotherapist at Ashoka Medicover Hospital Nashik (2018-present)
   - HOD Physiotherapy at Wockhardt Hospital Nashik (2010-2018)
   - President, Physiotherapists Association of Nashik (PAN)
   - IAP Significant Contribution Award (2016)

3. **Specialized Programs Developed**
   - Orthopedic Rehabilitation (TKR, THR, Arthroscopy)
   - Cardiac Rehabilitation (Post-Angioplasty, Post-CABG)
   - Neuro Rehabilitation
   - Kidney Rehabilitation for CKD Patients
   - Corporate Ergonomics (200+ lectures at MNCs)

**Stats Row:**
- "15+ Years Experience" | "5000+ Patients" | "4 Research Publications" | "3 Hospital Affiliations"

#### 4. PUBLICATIONS SECTION
**Purpose:** Research credibility
**Layout:** Timeline or cards

**Publications:**
1. "Effectiveness of McConnell Patellofemoral Taping in Post-TKR Patients" (Jan 2018)
2. "Physiotherapy for CKD Patients on Dialysis" (Apr 2016)
3. "Neurodynamics for Piriformis Syndrome Induced Sciatica" (Oct 2007)
4. "Ergoexercises for Desk Workers" (Jul 2014)

**Design:** Academic paper style cards with publication date badges

#### 5. ABOUT / EXPERIENCE SECTION
**Purpose:** Personal connection + Professional background
**Layout:** Two-column (Image left, Content right)

**Content:**
- Dr. Sagar Mahajan portrait
- Background story (Pravara Medical Trust → D.Y. Patil College of Physiotherapy, 2007)
- Journey: Private clinic (2008) → Wockhardt (2010) → Medicover (2018)
- PAN Association leadership

#### 6. VISIT US / CONTACT SECTION
**Purpose:** Quick access to location + contact (KPI requirement)
**Layout:** Two-column (Map left, Contact info right)

**Left Column:**
- Embedded Google Maps
- "Get Directions" button

**Right Column:**
**Contact Information:**
- Phone: +91 98902 77759
- Email: sagarmahajan1@gmail.com
- Address: [Clinic Address - need to get from map or use Nashik reference]

**Opening Hours:**
- Monday - Saturday: 8:00 AM - 10:00 AM & 7:00 PM - 10:00 PM
- Sunday: Closed

**Quick Action Buttons:**
- "Call Now" (prominent)
- "Book Appointment" (form modal)
- "WhatsApp" (if applicable)

#### 7. FOOTER
**Purpose:** Navigation + Legal + SEO
**Layout:** 4-column grid

**Columns:**
1. Brand + Tagline + Social links
2. Quick Links (Services, About, Contact)
3. Services List (all 7 services)
4. Contact Info + Hours

**Bottom Bar:**
- Copyright © 2024 Physio Ergo Care
- Made with care in Nashik

---

## Design System

### Colors
- **Primary:** #0D7377 (Teal - Medical trust)
- **Primary Dark:** #095457
- **Secondary:** #14919B (Light Teal)
- **Accent:** #32E0C4 (Bright Teal - CTAs)
- **Background:** #FFFFFF (White)
- **Surface:** #F8FAFA (Light gray tint)
- **Text Primary:** #1A1A2E (Dark navy)
- **Text Secondary:** #4A5568 (Gray)
- **Success:** #10B981
- **Error:** #EF4444

### Typography
- **Headings:** Inter / Poppins (Clean, medical, professional)
- **Body:** Inter (Readable)
- **Hero Title:** 48-56px (bold)
- **Section Title:** 32-40px (semibold)
- **Card Title:** 20-24px (semibold)
- **Body:** 16-18px (regular)
- **Small/Caption:** 14px

### Spacing
- Section padding: 80-120px vertical
- Container max-width: 1280px
- Card gap: 24-32px
- Element spacing: 16-24px

### Components

**Buttons:**
- Primary: Solid teal, white text, rounded-lg (8px), shadow-md
- Secondary: Outline teal, teal text
- Ghost: Transparent with hover effect

**Cards:**
- Background: white
- Border-radius: 12px
- Shadow: 0 4px 6px -1px rgba(0,0,0,0.1)
- Hover: transform translateY(-4px), shadow increase

**Icons:**
- Lucide React icons
- Size: 24-48px depending on context
- Color: Primary teal or accent

---

## SEO Strategy

### Meta Tags
- Title: "Physio Ergo Care | Spine & Joint Rehabilitation Center in Nashik"
- Description: "Expert physiotherapy services in Nashik since 2008. Specializing in spine rehabilitation, sports injuries, post-operative care. Book appointment: +91 98902 77759"
- Keywords: physiotherapist nashik, spine rehabilitation, knee pain treatment, sports injury, mckenzie method

### Structured Data
- LocalBusiness schema
- MedicalBusiness schema
- Service schema for each offering
- Person schema for Dr. Sagar Mahajan

### Technical SEO
- Semantic HTML5 (header, nav, main, section, article, footer)
- Proper heading hierarchy (H1 → H6)
- Alt tags for images
- Fast loading (lazy loading images)
- Mobile-first responsive
- Sitemap.xml
- Robots.txt

---

## Performance Optimizations

1. **Vite Build:** Tree-shaking, code splitting
2. **Image Optimization:** WebP format, lazy loading
3. **Font Loading:** Font-display: swap
4. **CSS:** Tailwind purging unused styles
5. **No heavy libraries:** Only essential React + icons
6. **Intersection Observer:** Lazy render below-fold content
7. **Preload critical resources**

---

## Navigation Patterns

### Desktop
- Sticky header with all nav items
- Smooth scroll to sections
- Active section highlighting

### Mobile
- Hamburger menu
- Full-screen overlay navigation
- Sticky call button at bottom

### Quick Actions (Always Visible)
- Floating action button: "Call Now" on mobile
- Sticky header with phone number on scroll

---

## Interactions & Micro-animations

1. **Page Load:** Fade in sections sequentially
2. **Scroll:** Header becomes compact with glassmorphism effect
3. **Cards:** Lift up on hover with shadow increase
4. **Buttons:** Scale(1.02) on hover, ripple effect on click
5. **Service Cards:** Expand/collapse for details
6. **Stats:** Count-up animation when in viewport

---

## Responsive Breakpoints

- **Mobile:** < 640px (Single column, stacked layout)
- **Tablet:** 640px - 1024px (2 columns where applicable)
- **Desktop:** > 1024px (Full layout)
- **Large Desktop:** > 1280px (Max-width container)
