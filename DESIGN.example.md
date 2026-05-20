# Dog Mode — Design System

This file describes the visual rules of the Dog Mode iOS app. It's the source of truth that the styling-drift MCP reads when checking screenshots against intent.

Plain language is intentional. If a value isn't here, the model shouldn't invent one.

## Spacing scale

All spacing in the app uses this 8-point scale. Margins, padding, and gaps must use a value from this list.

- **2** — hair (icon padding only)
- **4** — tight (between label and value pairs)
- **8** — small (inside cards, between adjacent controls)
- **16** — base (default padding around content)
- **24** — comfortable (between cards, between sections of a screen)
- **32** — generous (screen-edge insets, between major regions)
- **48** — large (top of screen padding under the status bar)

Any value not on this list is a violation. Half-step values (3, 6, 12, 20) are common drift and should be flagged.

## Typography

SF Pro Display for display, SF Pro Text for body. Two weights only: Regular (400) and Semibold (600).

| Role | Size | Weight | Line height |
|---|---|---|---|
| Hero title | 34 | Semibold | 40 |
| Screen title | 24 | Semibold | 30 |
| Section header | 17 | Semibold | 22 |
| Body | 17 | Regular | 22 |
| Caption | 13 | Regular | 18 |
| Footnote | 11 | Regular | 14 |

Letter spacing is system default (0) everywhere.

## Color palette

Semantic names. Use the role name, not the hex, in code.

### Surface

- **canvas** — `#FAF7F2` (warm cream — main background)
- **card** — `#FFFFFF` (cards floated on canvas)
- **divider** — `#E8E2D8` (1px hairline between rows)

### Text

- **primary** — `#1F1B16` (warm near-black; headings and body)
- **secondary** — `#6E6862` (captions, helper text)
- **tertiary** — `#A39E97` (placeholder, disabled labels)

### Accent

- **brand** — `#E8754B` (warm coral; primary CTAs, active toggles)
- **brand-pressed** — `#C45F3A` (CTA pressed state)
- **success** — `#5A8F6B` (climate-on indicator)
- **alert** — `#C84A3E` (destructive only)

Off-palette colors are a violation. Hex values within ±2 points of a palette value are drift and should be flagged.

## Corner radii

- **small** — 8 (inputs, toggle pills)
- **medium** — 16 (cards, sheets)
- **large** — 28 (the activation pill on the home screen)
- **circle** — 50% (the app icon, dog avatar)

## Component rules

### Primary button

- Background: `brand`
- Text: `#FFFFFF`, body weight Semibold
- Padding: 16 vertical, 24 horizontal
- Corner radius: medium (16)
- Minimum height: 52
- Pressed state: background swaps to `brand-pressed`

### Card

- Background: `card`
- Padding: 16 on all sides
- Corner radius: medium (16)
- No border. Shadow is `0 2 8 rgba(31,27,22,0.06)`
- Cards never sit directly against the screen edge — leave 24 of canvas around them

### List row

- Minimum height: 56
- Horizontal padding: 16
- Divider below: 1px `divider`
- Tap target extends the full width of the card

### Section header

- Typography: Section header (17/22 Semibold)
- Color: `text/primary`
- Padding above: 24 from the prior section
- Padding below: 8 from the first row

## Common drift to flag

These are real violations the model has introduced. Worth checking explicitly.

- **Off-scale spacing**: 12, 14, 18, 20, 22, 28 — the model loves these. Round to the nearest scale value.
- **Off-palette grays**: anything near `text/secondary` like `#707070`, `#757575`, `#6D6D6D`. All should snap to `#6E6862`.
- **Wrong corner radius on cards**: 12 instead of 16 is common.
- **Button height under 52**: fails the 44pt tap target rule.
- **Brand color on non-CTAs**: `brand` is for primary actions only. Toolbar icons should be `text/primary`.

## What this file is not

This file is not a UI library spec. It doesn't declare components in code. It's a description of *intent* — the rules a designer would point at when something looks off. The MCP's job is to compare a rendered screen against this description and tell me where reality and intent have drifted.
