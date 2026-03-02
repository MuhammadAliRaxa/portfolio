# Portfolio Project Instructions

## Project Overview
This is a high-end scrollytelling portfolio built with Next.js 14, featuring scroll-linked canvas animations, parallax text overlays, and modern UI components.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Rendering**: HTML5 Canvas

## Key Components
1. **ScrollyCanvas** - Canvas-based image sequence playback synced to scroll
2. **Overlay** - Parallax text sections with fade transitions
3. **Projects** - Glass-morphism card grid for featured work

## Getting Started
```bash
npm install --legacy-peer-deps
npm run dev
```

## Image Sequence Setup
Place WebP files in `public/sequence/` named as `frame_XX_delay-0.067s.webp`

## Important Notes
- Background color: #121212 (critical for seamless blending)
- Canvas uses cover aspect ratio logic for responsive display
- All images preload before animation begins
- Framer Motion useScroll maps scroll progress to frame index

## Development Guidelines
- Use TypeScript for all components
- Follow React hooks best practices
- Optimize images aggressively (WebP format)
- Maintain responsive mobile design
- Test performance on low-end devices

## Build & Deployment
- `npm run build` - Production build
- `npm start` - Run production server
- Deployable to any Node.js host (Vercel recommended)
