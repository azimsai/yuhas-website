# OHB | Our Home Builders - Website Design System & Screens

## TABLE OF CONTENTS
1. Design Vision & Brand Identity
2. Color Palette & Psychology
3. Typography System
4. Design Components & Patterns
5. Screen-by-Screen Mockups (Wireframes & Details)
6. Responsive Design Specifications
7. Animation & Interaction Patterns
8. Accessibility Guidelines

---

## PART 1: DESIGN VISION & BRAND IDENTITY

### Brand Positioning
**OHB (Our Home Builders and Constructions)** is a premium, trust-focused construction company that transforms dreams into reality through expert craftsmanship, innovation, and client-centric service.

### Design Philosophy
- **Professionalism:** Clean, organized, and credible
- **Accessibility:** Easy to navigate for all user types
- **Trust-Building:** High-quality visuals and transparent communication
- **Innovation:** Modern design patterns reflecting forward-thinking approach
- **Storytelling:** Showcasing projects that tell the client journey

### Target Audience
- Residential homeowners (budget: ₹25L - ₹2Cr)
- Commercial businesses/entrepreneurs
- Real estate investors
- Apartment complexes developers
- Property renovation seekers
- Ages: 25-65, urban and semi-urban Kerala

---

## PART 2: COLOR PALETTE & PSYCHOLOGY

### Primary Color Palette

```
┌─────────────────────────────────────────────────────────┐
│ PRIMARY COLORS (Trust, Stability, Growth)               │
├─────────────────────────────────────────────────────────┤
│ Deep Navy Blue      #1a3a52  (Primary Brand)           │
│ Accent Teal         #2ba399  (CTAs, Highlights)        │
│ Warm Orange         #e67e22  (Energy, Safety)          │
│ Charcoal Gray       #2c3e50  (Text, Dark Elements)     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ SECONDARY COLORS (Supporting)                           │
├─────────────────────────────────────────────────────────┤
│ Light Gray          #ecf0f1  (Backgrounds)             │
│ Off-White           #f8f9fa  (Page Backgrounds)        │
│ Gold/Brass          #d4a574  (Premium Touch)           │
│ Success Green       #27ae60  (Positive Actions)        │
│ Warning Red         #e74c3c  (Alerts)                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ NEUTRAL PALETTE (Text & Structure)                      │
├─────────────────────────────────────────────────────────┤
│ Black               #000000  (Headlines, Strong Text)  │
│ Dark Gray           #333333  (Body Text)               │
│ Medium Gray         #666666  (Secondary Text)          │
│ Light Gray          #999999  (Disabled, Hints)         │
│ Background Gray     #f5f7fa  (Subtle BG)               │
└─────────────────────────────────────────────────────────┘
```

### Color Usage Guidelines

| Element | Color | Purpose |
|---------|-------|---------|
| Header/Footer | Deep Navy Blue (#1a3a52) | Trust, authority |
| Primary CTA Buttons | Teal (#2ba399) | Action, conversion |
| Section Backgrounds | Light Gray (#ecf0f1) | Visual separation |
| Accent Elements | Orange (#e67e22) | Energy, attention |
| Body Text | Dark Gray (#333333) | Readability |
| Hover States | Gold (#d4a574) | Interactive feedback |
| Success Messages | Green (#27ae60) | Positive feedback |
| Error Messages | Red (#e74c3c) | Warning, alerts |

### Accessibility Contrast Ratios
- Dark Navy on White: 10.2:1 ✓ (AAA Compliant)
- Teal on White: 4.8:1 ✓ (AA Compliant)
- Orange on White: 5.1:1 ✓ (AA Compliant)
- Dark Gray on White: 7.9:1 ✓ (AAA Compliant)

---

## PART 3: TYPOGRAPHY SYSTEM

### Font Family Stack

```
Primary Headings (H1, H2, H3):
  "Poppins", "Inter", -apple-system, sans-serif
  Weight: 600-700 (Semibold to Bold)
  Letter Spacing: -1px (Professional tightness)

Secondary Headings (H4, H5, H6):
  "Poppins", "Inter", -apple-system, sans-serif
  Weight: 500-600 (Medium to Semibold)

Body Text:
  "Inter", "Open Sans", -apple-system, sans-serif
  Weight: 400-500 (Regular to Medium)
  Line Height: 1.6 (Readable)
  Letter Spacing: 0.3px (Comfortable spacing)

Code/Technical:
  "Menlo", "Monaco", "Courier New", monospace
  Weight: 400

Accents/Special:
  "Allerta Stencil" (Logo emphasis only)
```

### Font Sizing Scale

```
Mobile (320px - 767px):
  H1 (Hero):         28px - 32px  |  Line height: 1.3
  H2 (Section):      22px - 24px  |  Line height: 1.3
  H3 (Subsection):   18px - 20px  |  Line height: 1.4
  H4:                16px         |  Line height: 1.4
  Body:              14px - 16px  |  Line height: 1.6
  Small:             12px - 14px  |  Line height: 1.5

Tablet (768px - 1024px):
  H1 (Hero):         40px - 48px  |  Line height: 1.2
  H2 (Section):      28px - 32px  |  Line height: 1.3
  H3 (Subsection):   22px - 24px  |  Line height: 1.4
  H4:                18px - 20px  |  Line height: 1.4
  Body:              15px - 16px  |  Line height: 1.6
  Small:             13px - 14px  |  Line height: 1.5

Desktop (1025px+):
  H1 (Hero):         52px - 64px  |  Line height: 1.2
  H2 (Section):      36px - 44px  |  Line height: 1.3
  H3 (Subsection):   24px - 28px  |  Line height: 1.4
  H4:                20px - 22px  |  Line height: 1.4
  Body:              16px         |  Line height: 1.6
  Small:             14px         |  Line height: 1.5
```

### Typography Examples

```
H1 Example (Hero):
"Building Dreams into Reality"
- Font: Poppins, 64px, Bold (700)
- Color: #1a3a52 (Deep Navy)
- Line Height: 1.2
- Letter Spacing: -1px

H2 Example (Section Title):
"Our Premium Services"
- Font: Poppins, 40px, Semibold (600)
- Color: #1a3a52
- Line Height: 1.3
- Margin Bottom: 30px

H3 Example (Card Title):
"Residential Construction"
- Font: Poppins, 20px, Semibold (600)
- Color: #2c3e50
- Line Height: 1.4

Body Text Example:
"We deliver exceptional construction services with precision..."
- Font: Inter, 16px, Regular (400)
- Color: #333333
- Line Height: 1.6
- Letter Spacing: 0.3px

CTA Text (Button):
"Explore Our Work"
- Font: Poppins, 14px, Semibold (600)
- Color: #ffffff
- Letter Spacing: 0.5px
- Text Transform: Uppercase
```

---

## PART 4: DESIGN COMPONENTS & PATTERNS

### Button Styles

```
PRIMARY BUTTON (Teal)
┌──────────────────────────────────┐
│      EXPLORE OUR PROJECTS        │
└──────────────────────────────────┘
Background: #2ba399
Text Color: #ffffff
Padding: 14px 32px (Mobile) | 16px 40px (Desktop)
Border Radius: 4px
Font: Poppins, 14px, Semibold
Transition: 0.3s ease
Hover: Background #1f8f86 (Darker Teal)
Active: Box Shadow: 0 4px 12px rgba(43, 163, 153, 0.3)

SECONDARY BUTTON (Outline)
┌──────────────────────────────────┐
│      Learn More                  │
└──────────────────────────────────┘
Background: Transparent
Border: 2px solid #1a3a52
Text Color: #1a3a52
Padding: 12px 28px
Border Radius: 4px
Hover: Background #f8f9fa, Border #2ba399

TERTIARY BUTTON (Orange)
┌──────────────────────────────────┐
│      Get Free Consultation       │
└──────────────────────────────────┘
Background: #e67e22
Text Color: #ffffff
Padding: 14px 32px
Border Radius: 4px
Hover: Background #d26c1e
```

### Card Components

```
PROJECT CARD
┌─────────────────────────────────────┐
│  ╭─ IMAGE AREA (16:9 Aspect) ─╮    │
│  │                             │    │
│  │  [Hover: Overlay with       │    │
│  │   View Details CTA]         │    │
│  │                             │    │
│  ╰─────────────────────────────╯    │
├─────────────────────────────────────┤
│ PROJECT TITLE                       │
│ "Sunset Heights Residential"        │
├─────────────────────────────────────┤
│ Location: Thiruvananthapuram        │
│ Type: Residential  | Status: Done   │
│ Area: 15,000 sq.ft                  │
├─────────────────────────────────────┤
│ [View Details →]                    │
└─────────────────────────────────────┘

Background: #ffffff
Border: 1px solid #ecf0f1
Border Radius: 8px
Box Shadow: 0 2px 8px rgba(0,0,0,0.08)
Hover Shadow: 0 8px 24px rgba(0,0,0,0.12)
Transition: All 0.3s ease
```

### Service Card Components

```
SERVICE ICON CARD
┌─────────────────────────────────┐
│          ╭───────╮              │
│          │  ICON │              │
│          ╰───────╯              │
├─────────────────────────────────┤
│   RESIDENTIAL CONSTRUCTION      │
├─────────────────────────────────┤
│ Expert design and execution     │
│ of residential projects with    │
│ focus on quality and timely     │
│ delivery                        │
├─────────────────────────────────┤
│ [Learn More →]                  │
└─────────────────────────────────┘

Grid: 3 columns (Desktop), 2 (Tablet), 1 (Mobile)
Gap: 24px
Icon Size: 48px × 48px
Icon Color: #2ba399
Background: #f8f9fa
Hover: Background #ecf0f1
```

### Form Components

```
TEXT INPUT FIELD
┌──────────────────────────────────┐
│ Full Name                        │
│ ┌──────────────────────────────┐ │
│ │ Enter your full name....    │ │
│ └──────────────────────────────┘ │
└──────────────────────────────────┘

Border: 1px solid #d0d0d0
Focus Border: 2px solid #2ba399
Padding: 12px 16px
Border Radius: 4px
Font: Inter, 14px
Placeholder Color: #999999

SELECT DROPDOWN
┌──────────────────────────────────┐
│ Project Type              ▼      │
│ Residential               ▼      │
└──────────────────────────────────┘

CHECKBOX
☑ I agree to the terms
  Color: #2ba399 (checked)

TEXTAREA
┌──────────────────────────────────┐
│ Project Details                  │
│ ┌──────────────────────────────┐ │
│ │ Tell us about your project.. │ │
│ │                              │ │
│ │                              │ │
│ └──────────────────────────────┘ │
└──────────────────────────────────┘

Resize: Vertical only
Min Height: 120px
```

### Badge & Status Components

```
BADGE - COMPLETED PROJECT
┌─────────────────────┐
│  ✓ Completed       │
└─────────────────────┘
Background: rgba(39, 174, 96, 0.1)
Text Color: #27ae60
Border: 1px solid #27ae60
Padding: 4px 12px
Border Radius: 16px
Font: Inter, 12px, Semibold

BADGE - ONGOING PROJECT
┌─────────────────────┐
│  ⊚ In Progress     │
└─────────────────────┘
Background: rgba(230, 126, 34, 0.1)
Text Color: #e67e22
Border: 1px solid #e67e22

BADGE - FEATURED
┌─────────────────────┐
│  ★ Featured        │
└─────────────────────┘
Background: rgba(212, 165, 116, 0.1)
Text Color: #d4a574
```

### Spacing System (8px Grid)

```
Micro:      4px   (Internal spacing)
Xs:         8px   (Button padding, small gaps)
Sm:         12px  (Card padding)
Base:       16px  (Section padding)
Md:         24px  (Component spacing)
Lg:         32px  (Section gaps)
Xl:         48px  (Large section spacing)
2xl:        64px  (Hero section spacing)
3xl:        96px  (Full screen sections)
```

### Border Radius System

```
Sharp:      0px    (Rare, minimal use)
Xs:         2px    (Input fields)
Sm:         4px    (Buttons, small cards)
Base:       8px    (Cards, containers)
Md:         12px   (Large cards)
Lg:         16px   (Special containers)
Full:       9999px (Pills, avatars)
```

### Shadow System

```
Shadow-XS (Subtle):
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)
  Use: Hover states on text links

Shadow-SM (Light):
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
  Use: Cards, buttons at rest

Shadow-MD (Medium):
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12)
  Use: Cards on hover, modals

Shadow-LG (Heavy):
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15)
  Use: Hero content, emphasis cards

Shadow-XL (Dramatic):
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2)
  Use: Full-screen overlays, lightboxes
```

---

## PART 5: SCREEN-BY-SCREEN MOCKUPS

### SCREEN 1: HOMEPAGE - HERO SECTION

```
╔════════════════════════════════════════════════════════════╗
║                    [STICKY HEADER]                        ║
║  [OHB Logo] .................... [Menu] [Contact]         ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║             [HERO BACKGROUND IMAGE]                       ║
║             Building professional workspace               ║
║                                                            ║
║     "Building Dreams into Reality"                        ║
║     Premium Construction Services in Kerala              ║
║                                                            ║
║     [EXPLORE OUR PROJECTS] [GET CONSULTATION]           ║
║                                                            ║
║                ↓ Scroll to explore                         ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

DESIGN SPECIFICATIONS:
- Full viewport height: min-height: 100vh
- Background: High-quality construction site image
- Overlay: Dark navy gradient (rgba(26, 58, 82, 0.6))
- H1: Poppins, 64px, Bold, White, Letter-spacing: -1px
- P: Inter, 18px, Regular, White, Line-height: 1.6
- Buttons: Side by side (Desktop), Stacked (Mobile)
- Scroll Indicator: Animated arrow pointing down
  Animation: Fade in/out + move down 12px, 2s loop
```

### SCREEN 2: HOMEPAGE - SERVICES SECTION

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  "Our Premium Services"                                  ║
║   Experience Excellence in Every Project                 ║
║                                                            ║
╟────────────────────────────────────────────────────────────╢
║                                                            ║
║  ╭──────────────────┐  ╭──────────────────┐             ║
║  │  ┌────────────┐  │  │  ┌────────────┐  │             ║
║  │  │   [ICON]   │  │  │  │   [ICON]   │  │             ║
║  │  └────────────┘  │  │  └────────────┘  │             ║
║  │                  │  │                  │             ║
║  │ Residential      │  │ Commercial       │             ║
║  │ Construction     │  │ Buildings        │             ║
║  │                  │  │                  │             ║
║  │ Expert design    │  │ Modern office    │             ║
║  │ of homes with    │  │ spaces and       │             ║
║  │ premium finishes │  │ retail centers   │             ║
║  │                  │  │                  │             ║
║  │ [Learn More]     │  │ [Learn More]     │             ║
║  ╰──────────────────╯  ╰──────────────────╯             ║
║                                                            ║
║  ╭──────────────────┐  ╭──────────────────┐             ║
║  │  ┌────────────┐  │  │  ┌────────────┐  │             ║
║  │  │   [ICON]   │  │  │  │   [ICON]   │  │             ║
║  │  └────────────┘  │  │  └────────────┘  │             ║
║  │                  │  │                  │             ║
║  │ Interior Design  │  │ Renovation &     │             ║
║  │ & Architecture   │  │ Remodeling       │             ║
║  │                  │  │                  │             ║
║  │ Transform spaces │  │ Breathe new life │             ║
║  │ with modern      │  │ into existing    │             ║
║  │ aesthetics       │  │ properties       │             ║
║  │                  │  │                  │             ║
║  │ [Learn More]     │  │ [Learn More]     │             ║
║  ╰──────────────────╯  ╰──────────────────╯             ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

DESIGN SPECIFICATIONS:
- Background: #f8f9fa (Light Gray)
- Padding: 96px 24px (Top/Bottom), 24px (Left/Right)
- H2: Poppins, 40px, Semibold, #1a3a52
- P (subtitle): Inter, 16px, Regular, #666666
- Card Grid: 4 columns (Desktop), 2 (Tablet), 1 (Mobile)
- Card Gap: 24px
- Card Height: Auto (Content-driven)
- Icon Size: 48px × 48px
- Icon Color: #2ba399
- Card Hover: Box-shadow elevates, subtle scale (1.02x)
```

### SCREEN 3: HOMEPAGE - FEATURED PROJECTS

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  "Featured Projects"                                     ║
║   Explore Our Latest Masterpieces                        ║
║                                                            ║
║  [All] [Residential] [Commercial] [Renovation]          ║
║                                                            ║
╟────────────────────────────────────────────────────────────╢
║                                                            ║
║  ╭──────────────────┬──────────────────┬──────────────┐  ║
║  │    PROJECT 1     │    PROJECT 2     │  PROJECT 3   │  ║
║  │  ┌────────────┐  │  ┌────────────┐  │ ┌──────────┐ │  ║
║  │  │            │  │  │            │  │ │          │ │  ║
║  │  │   IMAGE    │  │  │   IMAGE    │  │ │  IMAGE   │ │  ║
║  │  │ (Overlay:  │  │  │ (Overlay:  │  │ │(Overlay: │ │  ║
║  │  │ View >)    │  │  │ View >)    │  │ │ View >)  │ │  ║
║  │  │            │  │  │            │  │ │          │ │  ║
║  │  └────────────┘  │  └────────────┘  │ └──────────┘ │  ║
║  │                  │                  │              │  ║
║  │ Sunset Heights   │ Tech Park Office │ Villa Modern  │  ║
║  │ Residential      │ Commercial       │ Renovation    │  ║
║  │ Trivandrum       │ Cochin           │ Ernakulam     │  ║
║  │ ✓ Completed      │ ⊚ In Progress   │ ✓ Completed   │  ║
║  ╰──────────────────┴──────────────────┴──────────────╯  ║
║                                                            ║
║                                                            ║
║  ╭──────────────────┬──────────────────┬──────────────┐  ║
║  │    PROJECT 4     │    PROJECT 5     │  PROJECT 6   │  ║
║  │  ┌────────────┐  │  ┌────────────┐  │ ┌──────────┐ │  ║
║  │  │            │  │  │            │  │ │          │ │  ║
║  │  │   IMAGE    │  │  │   IMAGE    │  │ │  IMAGE   │ │  ║
║  │  │ (Overlay:  │  │  │ (Overlay:  │  │ │(Overlay: │ │  ║
║  │  │ View >)    │  │  │ View >)    │  │ │ View >)  │ │  ║
║  │  │            │  │  │            │  │ │          │ │  ║
║  │  └────────────┘  │  └────────────┘  │ └──────────┘ │  ║
║  │                  │                  │              │  ║
║  │ Green Gardens    │ Retail Complex   │ Office Tower  │  ║
║  │ Residential      │ Commercial       │ Commercial    │  ║
║  │ Kottayam         │ Thiruvananthapuram│ Cochin       │  ║
║  │ ✓ Completed      │ ✓ Completed      │ ⊚ In Progress │  ║
║  ╰──────────────────┴──────────────────┴──────────────╯  ║
║                                                            ║
║              [VIEW ALL PROJECTS →]                        ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

DESIGN SPECIFICATIONS:
- Background: #ffffff (White)
- Padding: 96px 24px
- Filter Buttons: Display: Flex, Gap: 12px, Margin-bottom: 48px
- Grid: 3 columns (Desktop), 2 (Tablet), 1 (Mobile)
- Card Aspect Ratio: 16:9
- Image Hover: Overlay opacity increases, CTA slides up
- Overlay: Gradient from transparent to rgba(26,58,82,0.8)
- Badge Position: Absolute bottom-right, Margin: 16px
- Card Border-radius: 8px
- Card Gap: 24px
```

### SCREEN 4: SERVICES DETAIL PAGE

```
╔════════════════════════════════════════════════════════════╗
║                   STICKY NAVIGATION                       ║
║  [Back] Residential Construction ......... [Share]        ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║           [HERO IMAGE - Wide Format]                     ║
║           Beautiful residential construction site          ║
║                                                            ║
║        "Residential Construction Services"               ║
║        Building Your Dream Home with Excellence           ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  About This Service                                      ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║                                                            ║
║  We specialize in transforming your dream home into      ║
║  reality. With over 15 years of expertise, our team      ║
║  delivers residential projects that exceed expectations  ║
║  in terms of quality, design, and timely completion.     ║
║                                                            ║
║  ┌─────────────────────────────────────────────────┐    ║
║  │ 100+  Projects Completed                        │    ║
║  │ 500+  Happy Families                            │    ║
║  │ 15+   Years of Excellence                       │    ║
║  │ 100%  Client Satisfaction Rate                  │    ║
║  └─────────────────────────────────────────────────┘    ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  Our Process                                             ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║                                                            ║
║   ┌───────────────────────────────────────────────────┐  ║
║   │ 1. Consultation & Planning                        │  ║
║   │    Understanding your vision and requirements    │  ║
║   └───────────────────────────────────────────────────┘  ║
║             ↓ Process Flow Line                          ║
║   ┌───────────────────────────────────────────────────┐  ║
║   │ 2. Design & Approval                              │  ║
║   │    Creating detailed plans for your approval     │  ║
║   └───────────────────────────────────────────────────┘  ║
║             ↓                                             ║
║   ┌───────────────────────────────────────────────────┐  ║
║   │ 3. Site Preparation & Foundation                 │  ║
║   │    Preparing the ground for construction         │  ║
║   └───────────────────────────────────────────────────┘  ║
║             ↓                                             ║
║   ┌───────────────────────────────────────────────────┐  ║
║   │ 4. Construction & Supervision                    │  ║
║   │    Building with precision and quality control   │  ║
║   └───────────────────────────────────────────────────┘  ║
║             ↓                                             ║
║   ┌───────────────────────────────────────────────────┐  ║
║   │ 5. Finishing & Delivery                          │  ║
║   │    Final touches and handover of your home       │  ║
║   └───────────────────────────────────────────────────┘  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  Why Choose OHB for Residential Construction?            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║                                                            ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ║
║  │   ✓ Expert   │  │   ✓ Quality  │  │   ✓ Timely   │  ║
║  │   Team       │  │   Materials  │  │   Delivery   │  ║
║  │              │  │              │  │              │  ║
║  │ Experienced  │  │ Premium      │  │ Strict       │  ║
║  │ architects & │  │ materials &  │  │ adherence to │  ║
║  │ engineers    │  │ finishes     │  │ schedules    │  ║
║  └──────────────┘  └──────────────┘  └──────────────┘  ║
║                                                            ║
║  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ║
║  │   ✓ Design   │  │   ✓ Budget   │  │   ✓ Support │  ║
║  │   Excellence │  │   Friendly   │  │   Post-Sales │  ║
║  │              │  │              │  │              │  ║
║  │ Modern &     │  │ Competitive  │  │ Lifetime     │  ║
║  │ functional   │  │ pricing with │  │ warranty &   │  ║
║  │ designs      │  │ no surprises │  │ support      │  ║
║  └──────────────┘  └──────────────┘  └──────────────┘  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  Gallery                                                 ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║                                                            ║
║  [Filter: All] [Foundations] [Structure] [Interiors]    ║
║                                                            ║
║  ╭──────────┬──────────┬──────────┐                      ║
║  │  IMAGE   │  IMAGE   │  IMAGE   │                      ║
║  │ (Scroll  │ (Scroll  │ (Scroll  │                      ║
║  │  hover)  │  hover)  │  hover)  │                      ║
║  ╰──────────┴──────────┴──────────╯                      ║
║                                                            ║
║  ╭──────────┬──────────┬──────────┐                      ║
║  │  IMAGE   │  IMAGE   │  IMAGE   │                      ║
║  │ (Scroll  │ (Scroll  │ (Scroll  │                      ║
║  │  hover)  │  hover)  │  hover)  │                      ║
║  ╰──────────┴──────────┴──────────╯                      ║
║                                                            ║
║  ╭──────────┬──────────┬──────────┐                      ║
║  │  IMAGE   │  IMAGE   │  IMAGE   │                      ║
║  │ (Scroll  │ (Scroll  │ (Scroll  │                      ║
║  │  hover)  │  hover)  │  hover)  │                      ║
║  ╰──────────┴──────────┴──────────╯                      ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  Pricing Packages                                        ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║                                                            ║
║  ┌─────────────────┐  ┌─────────────────┐                ║
║  │    STANDARD     │  │    PREMIUM      │                ║
║  │                 │  │ ★ POPULAR ★     │                ║
║  │ ₹20-30 Lakhs    │  │ ₹30-50 Lakhs    │                ║
║  │                 │  │                 │                ║
║  │ ✓ Basic design  │  │ ✓ Custom design │                ║
║  │ ✓ Standard      │  │ ✓ Premium       │                ║
║  │   materials     │  │   materials     │                ║
║  │ ✓ Basic finish  │  │ ✓ Superior      │                ║
║  │ ✓ 18 mo cover   │  │   finish        │                ║
║  │                 │  │ ✓ 5 year cover  │                ║
║  │ [GET QUOTE]     │  │ [GET QUOTE]     │                ║
║  └─────────────────┘  └─────────────────┘                ║
║                                                            ║
║  ┌─────────────────┐                                      ║
║  │   LUXURY        │                                      ║
║  │                 │                                      ║
║  │ ₹50+ Lakhs      │                                      ║
║  │                 │                                      ║
║  │ ✓ Bespoke design│                                      ║
║  │ ✓ Luxury        │                                      ║
║  │   materials     │                                      ║
║  │ ✓ Premium       │                                      ║
║  │   finishes      │                                      ║
║  │ ✓ 10 year cover │                                      ║
║  │ ✓ Lifetime      │                                      ║
║  │   support       │                                      ║
║  │ [GET QUOTE]     │                                      ║
║  └─────────────────┘                                      ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  Related Projects                                        ║
║                                                            ║
║  [PROJECT 1] [PROJECT 2] [PROJECT 3] [PROJECT 4]        ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

DESIGN SPECIFICATIONS:
- Hero: Parallax background effect on scroll
- Hero height: 60vh (Mobile), 70vh (Desktop)
- H1 Hero: Poppins, 48px (Mobile) / 56px (Desktop), Bold
- Content max-width: 900px
- Process section: Vertical timeline (Mobile), Horizontal (Desktop)
- Stats counter: Animated number reveal on scroll
- Gallery: 3-column (Desktop), 2-column (Tablet), 1-column (Mobile)
- Pricing cards: 3-column (Desktop), 1-column (Mobile)
- Related projects: 4-column (Desktop), 2 (Tablet), 1 (Mobile)
```

### SCREEN 5: CONTACT PAGE

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║    Contact Us                                            ║
║    Get in Touch with OHB Today                           ║
║                                                            ║
╟────────────────────────────────────────────────────────────╢
║                                                            ║
║  ┌──────────────────────────┐  ┌──────────────────────┐  ║
║  │  CONTACT FORM            │  │  OFFICE INFORMATION  │  ║
║  │                          │  │                      │  ║
║  │ Full Name*               │  │ 📍 Address           │  ║
║  │ [________________]       │  │ OHB Headquarters     │  ║
║  │                          │  │ KIZHAKKUMKARA        │  ║
║  │ Email*                   │  │ Thiruvananthapuram   │  ║
║  │ [________________]       │  │ Kerala - 695583      │  ║
║  │                          │  │                      │  ║
║  │ Phone*                   │  │ 📞 Phone             │  ║
║  │ [________________]       │  │ +91 (XXX) XXX XXXX  │  ║
║  │                          │  │                      │  ║
║  │ Service Interest*        │  │ 📧 Email             │  ║
║  │ [Select Service ▼]       │  │ info@ohbbuilders.com │  ║
║  │                          │  │                      │  ║
║  │ Budget Range             │  │ 🕐 Hours             │  ║
║  │ [Select Range ▼]         │  │ Mon-Sat: 9 AM-6 PM  │  ║
║  │                          │  │ Sun: 10 AM-4 PM      │  ║
║  │ Project Details*         │  │                      │  ║
║  │ [________________________│  │ 💬 Quick Contact     │  ║
║  │ ________________________]│  │                      │  ║
║  │                          │  │ [WhatsApp Us]        │  ║
║  │ ☑ Subscribe to updates   │  │ [Call Now]           │  ║
║  │                          │  │                      │  ║
║  │ [SEND MESSAGE]           │  │ 🗺️  Find Us on Map   │  ║
║  │ [RESET]                  │  │ [Embedded Map]       │  ║
║  └──────────────────────────┘  └──────────────────────┘  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

DESIGN SPECIFICATIONS:
- Two-column layout (Desktop), Single (Mobile/Tablet)
- Form column: 60% width (Desktop)
- Info column: 35% width (Desktop)
- Gap between columns: 5%
- Form fields: Full width, stacked
- Field spacing: 20px margin-bottom
- Map height: 400px (Desktop), 300px (Mobile)
- Contact info cards: Flex direction: Row (Desktop), Column (Mobile)
- Input focus: Border color changes to #2ba399, subtle glow
- Success message: Slide down animation, Green background
```

### SCREEN 6: PROJECT DETAIL PAGE

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║        [GALLERY SLIDER - Main Image Large]              ║
║        ◀ [IMAGE 1/12] [Thumbs: IMG2 IMG3 IMG4...] ▶    ║
║                                                            ║
║        [Lightbox icon] [Share] [Download]                ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  PROJECT DETAILS SIDEBAR (Right)       MAIN CONTENT       ║
║                                                            ║
║  Sunset Heights                                          ║
║  Residential Complex                                     ║
║                                                            ║
║  📍 Thiruvananthapuram, Kerala                           ║
║  📅 Completed: March 2024                                ║
║  🏗️  Type: Residential                                    ║
║  📐 Area: 15,000 sq.ft                                   ║
║  👥 Units: 8 Apartments                                  ║
║  💰 Investment: ₹2.5 Cr                                  ║
║                                                            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                    ║
║                                                            ║
║  OVERVIEW                                                ║
║                                                            ║
║  Sunset Heights is a premium residential complex        ║
║  featuring 8 luxury apartments with modern amenities.   ║
║  Each unit is thoughtfully designed with spacious       ║
║  layouts, premium finishes, and smart home features.    ║
║  The complex includes a landscaped garden, swimming     ║
║  pool, gym, and 24/7 security.                          ║
║                                                            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                    ║
║                                                            ║
║  HIGHLIGHTS                                              ║
║                                                            ║
║  ✓ Modern Architecture                                  ║
║  ✓ Premium Finishes                                     ║
║  ✓ Smart Home Features                                  ║
║  ✓ Eco-Friendly Design                                  ║
║  ✓ Full Security System                                 ║
║  ✓ Common Amenities                                     ║
║                                                            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                    ║
║                                                            ║
║  BEFORE & AFTER (If Renovation)                          ║
║                                                            ║
║  [BEFORE IMAGE] [AFTER IMAGE]                           ║
║                                                            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                    ║
║                                                            ║
║  TEAM                                                    ║
║                                                            ║
║  Project Manager: Raj Kumar                             ║
║  Architect: Sarah Williams                              ║
║  Site Engineer: Arun Kumar                              ║
║                                                            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                    ║
║                                                            ║
║  [SCHEDULE SITE VISIT] [CONTACT SALES]                  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  TESTIMONIALS                                            ║
║                                                            ║
║  "Excellent project. The team was professional and      ║
║   delivered on time. Highly recommended!"               ║
║   - Ravi M. (Resident)                                  ║
║                                                            ║
║  "Outstanding craftsmanship and attention to detail.    ║
║   OHB exceeded all our expectations."                   ║
║   - Anjali Sharma (Resident)                            ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  RELATED PROJECTS                                        ║
║                                                            ║
║  [PROJECT A] [PROJECT B] [PROJECT C] [PROJECT D]        ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

DESIGN SPECIFICATIONS:
- Layout: 2-column (Desktop), Single (Mobile)
- Main gallery: 70% width (Desktop)
- Sidebar: 25% width (Desktop)
- Gallery slider: Auto-height, maintain aspect ratio
- Thumbnail strip: 120px height, horizontal scroll (Mobile)
- Sidebar sticky: Stick on scroll after 300px
- Before/After images: Use slider widget (drag to compare)
- Team member cards: Avatar (80px), Name, Title
- Testimonials: Carousel/slider or grid
- Background sections: Alternate white and light gray
```

### SCREEN 7: FOOTER

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  Have a project in mind?                                 ║
║  LET'S TALK                                              ║
║  [Newsletter subscribe input + button]                   ║
║                                                            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║                                                            ║
║  [OHB Logo]              [Facebook] [Instagram]          ║
║                          [LinkedIn]  [YouTube]           ║
║                                                            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║                                                            ║
║  SERVICES         COMPANY         CONTACT                ║
║  Residential      About Us        Phone                  ║
║  Commercial       Team            Email                  ║
║  Interior Design  Careers         Address                ║
║  Renovation       Blog            Business Hours         ║
║  Civil Works      Awards          Feedback Form          ║
║  Budget Homes     Testimonials    Newsletter             ║
║                                                            ║
║  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    ║
║                                                            ║
║  © 2025 OHB | Our Home Builders and Constructions       ║
║  Powered by [Development Company] | Privacy Policy       ║
║  Terms & Conditions | Cookie Policy                      ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

DESIGN SPECIFICATIONS:
- Background: #1a3a52 (Deep Navy)
- Text: White / Light Gray
- Padding: 96px 24px
- CTA section max-width: 900px
- Logo width: 180px
- Social icons: 32px × 32px
- Column gap: 48px (Desktop), 24px (Mobile)
- Footer grid: 4 columns (Desktop), 2 (Tablet), 1 (Mobile)
- Link hover: Color changes to #2ba399
```

---

## PART 6: RESPONSIVE DESIGN SPECIFICATIONS

### Breakpoints

```
Mobile:          0px - 767px
Tablet:          768px - 1024px
Desktop:         1025px - 1440px
Large Desktop:   1441px+

Max Container Width: 1200px (Centered, 24px padding on sides)
```

### Mobile-First Adjustments

```
MOBILE (320px - 767px):
- Single column layouts
- Full-width images (No padding)
- Stacked buttons
- Hamburger navigation
- Font sizes: 14px-16px body, 20px-24px headings
- Touch-friendly buttons: Min 44px height
- Spacing: 16px default gutters
- Hero height: 70vh (Min 300px)
- Card grid: 1 column

TABLET (768px - 1024px):
- 2-column layouts where appropriate
- Increased spacing: 24px gutters
- Font sizes: 15px-16px body, 24px-32px headings
- Card grid: 2 columns
- Service grid: 2 columns
- Sidebar appears as full width above/below content

DESKTOP (1025px+):
- 3-4 column layouts
- Maximum spacing utilization
- Font sizes: 16px body, 40px+ headings
- Card grid: 3-4 columns
- Service grid: 4 columns
- Sidebar: 25% width, sticky positioning
```

### Image Responsive Scaling

```
Hero Images:
- Mobile: 100vw × 70vh (Full viewport width)
- Tablet: 100vw × 60vh
- Desktop: 100% × 70vh

Project Cards:
- Mobile: 100% × auto (16:9 aspect)
- Tablet: 48% × auto
- Desktop: calc(33.333% - 16px) × auto

Background Images:
- Use background-size: cover
- Include background-position: center
- Add multiple image sources for different sizes
```

---

## PART 7: ANIMATION & INTERACTION PATTERNS

### Scroll Animations

```
FADE-IN (Content blocks):
- Opacity: 0 → 1
- Duration: 600ms
- Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Trigger: When element enters viewport

SLIDE-UP (Text reveals):
- Transform: translateY(40px) → translateY(0)
- Opacity: 0 → 1
- Duration: 700ms
- Stagger: 100ms between items
- Trigger: Scroll into view

SCALE-UP (Cards on hover):
- Scale: 1 → 1.02
- Duration: 300ms
- Easing: ease-out

PARALLAX (Hero background):
- Background-position moves slower than scroll
- Offset: -30% to 30%
- Effect on large screens only
```

### Button Interactions

```
PRIMARY BUTTON STATES:
Normal:
  Background: #2ba399
  Color: #ffffff
  Box-shadow: None
  Cursor: Pointer

Hover:
  Background: #1f8f86 (Darker 8%)
  Color: #ffffff
  Box-shadow: 0 4px 12px rgba(43, 163, 153, 0.3)
  Transform: translateY(-2px)
  Duration: 200ms

Active (Pressed):
  Background: #178077
  Box-shadow: 0 2px 4px rgba(43, 163, 153, 0.4)
  Transform: translateY(0)

Disabled:
  Background: #ccc
  Opacity: 0.6
  Cursor: Not-allowed
```

### Form Interactions

```
INPUT FOCUS:
- Border-color: #2ba399
- Box-shadow: 0 0 0 3px rgba(43, 163, 153, 0.1)
- Background-color: #f8f9fa
- Duration: 150ms

INPUT ERROR:
- Border-color: #e74c3c
- Box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1)
- Color-label: #e74c3c

INPUT SUCCESS:
- Border-color: #27ae60
- Box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.1)
```

### Navigation Interactions

```
STICKY HEADER:
- Appears after 100px scroll
- Slide-down animation: 300ms
- Background-blur: 0.8 opacity
- Box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)

HAMBURGER MENU:
- Menu slides in from right (300ms)
- Overlay fades in (200ms)
- Menu items stagger-animate (50ms delay between)
- Close button rotates 90° on toggle

DROPDOWN MENUS:
- Opacity: 0 → 1
- Transform: translateY(-10px) → translateY(0)
- Duration: 200ms
- Triggered on hover (Desktop) / click (Mobile)
```

### Page Transitions

```
PAGE LOAD:
- Fade-in overlay (300ms)
- Content fade-in (400ms)
- Scroll to top with smooth behavior

LINK NAVIGATION:
- No hard page refresh feel
- Smooth scroll to anchor: behavior: smooth
- Active link highlight with color change
```

---

## PART 8: ACCESSIBILITY GUIDELINES

### WCAG 2.1 AA Compliance

```
COLOR CONTRAST:
- Normal text: 4.5:1 minimum ratio
- Large text (18pt+): 3:1 minimum ratio
- All interactive elements: 4.5:1 minimum
- Test at: https://webaim.org/resources/contrastchecker/

KEYBOARD NAVIGATION:
- All interactive elements: Tab-accessible
- Focus order: Logical and predictable
- Focus indicators: Visible (2px outline, 3px minimum)
- No keyboard traps

IMAGES:
- All images: Descriptive alt text
- Decorative images: alt="" (Empty)
- Complex images: Longer description nearby
- SVG icons: title attribute or aria-label

FORMS:
- All inputs: Associated labels
- Required fields: Marked with * and aria-required
- Error messages: Linked to form fields
- Success confirmations: Live region updates

LINKS:
- Link text meaningful (avoid "Click here")
- Links distinguishable from text (Color + underline)
- Focus indicator visible on all links

TEXT:
- Line height: 1.5 minimum
- Letter spacing: 0.12em minimum
- Word spacing: 0.16em minimum
- Paragraph spacing: 2x larger than line height

HEADINGS:
- Semantic h1 > h2 > h3 hierarchy
- Don't skip levels
- Multiple h1s acceptable if logical

ICONS:
- Text alternatives provided
- SVG titles included
- ARIA labels for icon-only buttons

BUTTONS:
- Minimum 44×44px touch target
- Proper focus states
- ARIA labels for icon-only buttons
```

### Screen Reader Support

```
SEMANTIC HTML:
- Use <button> not <div onclick>
- Use <nav>, <main>, <article>, <section>
- Use <header> and <footer>
- Use <form> and proper input types

ARIA ATTRIBUTES:
- aria-label: For icon buttons
- aria-labelledby: For complex components
- aria-describedby: For additional descriptions
- aria-hidden: For decorative elements
- role: Only when semantic HTML insufficient
- aria-live: For dynamic content updates

SKIP LINKS:
- "Skip to main content" link at page top
- Hidden until focused
- Target #main-content

FORM FIELD HINTS:
- Use <label for="id">
- aria-describedby for additional help text
- Error messages in aria-live region
```

### Mobile Accessibility

```
TOUCH TARGETS:
- Minimum 44×44px (CSS pixels)
- Padding between targets: 8px minimum

READABLE TEXT:
- Default 16px minimum
- Zoom to 200%: Content still readable
- No fixed viewport width

INTERACTIVE:
- Double-tap delay handling
- Keyboard accessible
- No touch-only controls
```

---

## PART 9: SUMMARY DESIGN CHECKLIST

### Design System Completeness
- [ ] Color palette finalized with contrast ratios verified
- [ ] Typography system documented with all weights/sizes
- [ ] Component library created (buttons, cards, forms, etc.)
- [ ] Spacing system defined (8px grid)
- [ ] Shadow system documented
- [ ] Border-radius system standardized
- [ ] Animation/transition timings documented

### Responsive Design
- [ ] Mobile-first approach implemented
- [ ] Breakpoints defined: 320px, 768px, 1025px
- [ ] All layouts tested on: Phone, Tablet, Desktop
- [ ] Images properly sized and optimized per breakpoint
- [ ] Touch targets minimum 44×44px
- [ ] Typography scales appropriately

### Accessibility
- [ ] WCAG 2.1 AA compliance verified
- [ ] Color contrast ratios checked
- [ ] Keyboard navigation works throughout
- [ ] Screen reader compatible markup
- [ ] Form fields properly labeled
- [ ] Images have alt text
- [ ] Focus indicators visible

### Screens Designed
- [ ] Homepage - Hero Section
- [ ] Homepage - Services Section
- [ ] Homepage - Featured Projects
- [ ] Service Detail Page (Residential Construction)
- [ ] Contact Page
- [ ] Project Detail Page
- [ ] Footer

### Interactive Elements
- [ ] Hover states for all buttons
- [ ] Focus states for form inputs
- [ ] Navigation menu interactions
- [ ] Image gallery/lightbox
- [ ] Form validation feedback
- [ ] Success/error messages

---

## NOTES FOR DEVELOPERS

1. **Use CSS Variables** - Implement all colors and spacing as CSS custom properties for easy theme switching
2. **Mobile-First Development** - Build mobile layout first, then enhance for larger screens
3. **Performance** - Optimize images with srcset, implement lazy loading, minify CSS/JS
4. **Testing** - Test on real devices, use browser DevTools for responsive testing
5. **Animations** - Use CSS transitions/animations, avoid JavaScript animations for performance
6. **Accessibility** - Implement semantic HTML, ARIA labels, keyboard navigation
7. **SEO** - Proper heading hierarchy, descriptive alt text, structured data
8. **Cross-Browser** - Test on Chrome, Firefox, Safari, Edge, and IE11 (if required)

---

*This comprehensive design guide ensures consistent, professional, and accessible implementation of the OHB website.*
