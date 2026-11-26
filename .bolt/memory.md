# Project memory

## Product intent & audience

- Personal portfolio/link hub showcasing projects from GitHub
- Each project displayed as a card with name, tagline/category, description, key features, GitHub link, and icon
- Audience: visitors exploring the developer's work

## Brand personality & voice

- Production-quality, polished presentation
- Project descriptions are concise but feature-rich, highlighting platform integrations and capabilities

## Visual design & UX direction

- Vite + React + Tailwind CSS stack
- Lucide React icons used for project logos and UI
- Project cards use teal accent styling
- Cards include: title, category tagline, feature bullets, external GitHub link, relevant Lucide icon
- Layout is a grid/list of project cards

## Decisions, constraints & rationale

- Replaced SureBill card with Sellora (https://github.com/KKA-0/Sellora.git)
- Sellora framed as "E-Commerce & GST OS" for Indian sellers
- Sellora features listed: inventory tracking, profit analytics, GST JSON generation for Amazon, Flipkart, Meesho
- Used a store icon for Sellora, retained existing teal card styling for consistency
- No additional UI packages installed; staying within Tailwind + Lucide React

## Open questions & assumptions

- Full list of projects on the page beyond Sellora is not yet confirmed
- Whether project cards should pull live GitHub data (stars, description) or remain manually curated is undecided
- Overall site theme/color palette beyond teal accents is not fully established