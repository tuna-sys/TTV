---
name: Tri Thức Việt
description: A clear Vietnamese workforce-information system with navy operational anchors, blue task signals, and orange worker accents.
colors:
  navy: "#020617"
  navy-raised: "#0f172a"
  canvas: "#f8fafc"
  surface: "#ffffff"
  border: "#e2e8f0"
  muted: "#475569"
  primary: "#1d4ed8"
  primary-hover: "#1e40af"
  primary-soft: "#eff6ff"
  primary-on-dark: "#bfdbfe"
  worker: "#ea580c"
  worker-hover: "#f97316"
  worker-soft: "#fff7ed"
  success: "#047857"
  success-soft: "#ecfdf5"
  danger: "#991b1b"
  danger-soft: "#fef2f2"
typography:
  display:
    fontFamily: "var(--font-be-vietnam-pro), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: "1.08"
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "var(--font-be-vietnam-pro), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: "1.25"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--font-be-vietnam-pro), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: "1.5"
  body:
    fontFamily: "var(--font-be-vietnam-pro), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.75"
  label:
    fontFamily: "var(--font-be-vietnam-pro), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: "1.25"
    letterSpacing: "0.05em"
rounded:
  lg: "0.5rem"
  xl: "0.75rem"
  2xl: "1rem"
  3xl: "1.5rem"
  full: "9999px"
spacing:
  compact: "0.5rem"
  control: "0.75rem"
  inset: "1.25rem"
  card: "1.5rem"
  section: "3.5rem"
  spacious-section: "4rem"
components:
  button-enterprise:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1.25rem"
  button-enterprise-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1.25rem"
  button-worker:
    backgroundColor: "{colors.worker}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1.25rem"
  button-worker-hover:
    backgroundColor: "{colors.worker-hover}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.xl}"
    padding: "0.75rem 1.25rem"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.inset}"
  card-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.surface}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.card}"
---

# Design System: Tri Thức Việt

## Overview

**Creative North Star: "The Clear Operational Bridge"**

The incumbent public experience pairs a bright slate information canvas with dark navy decision areas. It keeps workforce-related information direct and readable, using compact cards, durable labels, small Lucide icons, and clear state changes rather than ornamental treatments.

Blue is the operational path: navigation, enterprise actions, focused fields, and information routing. Orange is a deliberate worker-facing counter-signal, used for job-seeking actions and their parallel navigation route.

**Key Characteristics:**

- Light slate canvas and white work surfaces, separated by subtle borders or rings.
- Navy bands and panels for high-attention orientation, choices, and results.
- Blue for primary action, focus, information routing, and procedural progress.
- Orange reserved for worker-oriented calls to action and supporting details.
- Compact rounded containers, bold Vietnamese hierarchy, and responsive task-first layouts.

## Colors

The palette is functional and role-led: calm slate makes sustained reading easy, navy collects decisive moments, blue directs action and progress, and orange distinguishes the worker path without competing for control of the page.

### Primary

- **Operational Blue:** Primary enterprise controls, active navigation, focus treatment, links, and icons.
- **Soft Operational Blue:** Selected navigation, icon wells, low-emphasis notices, and blue controls placed against navy.

### Secondary

- **Worker Orange:** Worker-oriented actions, route cues, and supporting icons. It remains the secondary route signal rather than the default submit color.
- **Soft Worker Orange:** Quiet worker buttons and local supporting details on light surfaces.

### Tertiary

- **Confirmation Emerald:** Confirmed or public-information states and affirmative status cues.
- **Alert Red:** Form errors only; present it with an alert role and explanatory text.

### Neutral

- **Deep Navy:** Hero choice panels, footer, and dark content bands.
- **Slate Canvas and White Surface:** The default page field and cards.
- **Slate Border and Muted Text:** Low-contrast structure and secondary explanation, while headings retain deep navy.

### Named Rules

**The Signal-Lane Rule.** Use blue for enterprise and operational movement; reserve orange for worker-facing movement.

**The Contrast-First Rule.** Navy sections use white or pale-blue text; light sections use deep navy and slate text. State meaning must remain understandable from its label, icon, and placement—not color alone.

## Typography

**Display Font:** Be Vietnam Pro, followed by the installed UI fallback stack.

**Body Font:** Be Vietnam Pro, followed by the installed UI fallback stack.

**Character:** The site uses one Vietnamese-capable sans-serif family throughout. Weight, tight headline tracking, and restrained uppercase labels create hierarchy without introducing a second visual voice.

### Hierarchy

- **Display:** Extra-black, tightly tracked page and hero statements; expands across the existing responsive breakpoints.
- **Headline:** Extra-bold section and card headings.
- **Title:** Bold labels for options, job names, and compact component headings.
- **Body:** Readable slate explanatory copy with relaxed leading; use it for guidance and status detail.
- **Label:** Bold, compact labels; use uppercase and wider tracking only for short metadata or category cues.

### Named Rules

**The One-Family Rule.** Keep Be Vietnam Pro across public and operational surfaces. Hierarchy comes from weight, size, spacing, and color—not a decorative display face.

## Layout

Public pages use a centred wide container with a narrow mobile gutter that expands at the existing small and large breakpoints. Sections alternate between a light canvas, white cards, and dark navy bands; their spacing grows from compact mobile padding to broad desktop sections.

Use responsive grids for parallel choices and content cards, then collapse them into a single task flow on small screens. Maintain the existing minimum control height for touchable inputs and buttons, and let long Vietnamese labels wrap rather than truncate.

## Elevation & Depth

The default depth model is mostly tonal: white cards lift from the slate canvas through a fine slate ring or border. Shadows are deliberately restrained—small surface and navigation shadows for separation, a stronger dark-card shadow where a hero choice block needs to hold attention, and a larger mobile-drawer shadow while it overlays the page. Dark navy bands create hierarchy through color field and dividers before shadow.

### Shadow Vocabulary

- **Surface lift:** Small shadow plus a slate ring on ordinary cards, forms, and result containers.
- **Navigation lift:** A medium shadow appears after the sticky header has scrolled.
- **Decision-panel lift:** The hero's navy choice panel carries the strongest observed shadow treatment.

### Named Rules

**The Border-Before-Shadow Rule.** On light surfaces, begin with the established slate border or ring. Add shadow only when a container must separate from its context or layer above it.

## Shapes

The system is gently rounded rather than pill-heavy. Navigation links and compact actions use the smallest recurring corner treatment; primary controls and fields use the next step; cards, panels, notices, and tracker results use the broad familiar corner. Full pills are reserved for compact status badges. Borders are thin and slate-toned, while icon wells repeat the same rounded language at a smaller scale.

## Components

### Buttons

**Character:** Compact, bold, icon-compatible controls that make the active route unambiguous.

- **Primary enterprise / operational:** Blue fill, white bold label, and a darker-blue hover state. Use for enterprise decisions and blue-path primary actions.
- **Worker primary:** Orange fill, white bold label, and a brighter-orange hover state. Use for a worker-specific primary action only.
- **Worker quiet:** Soft orange fill, orange label, and a light orange border; this is the compact navigation counterpart of the worker primary action.
- **Quiet / informational:** White or transparent surface with slate text and a slate border or an underlined blue/orange text treatment.
- **Focus and disabled:** Preserve the visible blue focus ring; disabled primary controls lower opacity and stop implying availability.

### Cards / Containers

**Character:** White operational surfaces and navy decision surfaces share generous internal spacing and a rounded silhouette.

- **Surface card:** White background, slate ring or border, compact-to-generous card padding, and a small shadow only where the card separates from the page field.
- **Navy card:** Deep navy, white heading, slate-blue secondary copy, subdued slate dividers, and blue/orange route actions within it.

### Inputs / Fields

**Character:** Direct, touch-friendly text fields that prioritise the requested action over decoration.

- **Style:** White field, slate border, internal leading icon when useful, and strong dark text.
- **Focus:** Border and ring move to operational blue.
- **Error:** Place the message in a soft red container with a strong red label; retain the plain-language explanation.

### Navigation

**Character:** A two-layer sticky orientation system: a navy utility strip above a translucent white primary bar.

- **Desktop:** Text links are compact and quiet until active or hovered, when they move into soft blue. Worker and enterprise actions remain visibly distinct at the right edge.
- **Mobile:** A menu button opens a white, bordered drawer; links become larger single-row targets with a right-facing disclosure icon and paired worker/enterprise actions below.
- **Motion:** Existing header and menu changes use short state transitions, while the global reduced-motion rule removes non-essential transition time.

## Do's and Don'ts

### Do:

- **Do** keep the public canvas light slate and use white cards with the incumbent slate separation treatment.
- **Do** use navy to group high-attention choices, orientation, and result summaries.
- **Do** use blue for primary operational actions, focus states, navigation, and progress markers.
- **Do** use orange specifically to differentiate worker-facing actions.
- **Do** preserve clear labels, icon support, touch-friendly minimum control height, keyboard focus, and the reduced-motion fallback.

### Don't:

- **Don't** use orange as a competing generic primary accent on enterprise or operational flows.
- **Don't** rely on color by itself for form errors, public-status cues, route identity, or progress.
- **Don't** replace the restrained slate borders and controlled shadows with heavy gradients, glass effects, or decorative visual noise.
