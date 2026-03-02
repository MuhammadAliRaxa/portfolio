# High-End Scrollytelling Portfolio

A premium portfolio website featuring scroll-linked canvas animations, parallax overlays, and glass-morphism UI components. Built with **Next.js 14**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**.

## 🎬 Features

- **Scroll-Driven Canvas Animations**: Frame-by-frame image sequence playback synchronized with scroll position
- **Parallax Text Overlays**: Animated text sections that fade and move independently of scroll
- **Performance Optimized**: Uses HTML5 Canvas with image preloading for smooth 60fps animations
- **Responsive Design**: Full mobile support with proper aspect ratio handling
- **Glass-Morphism UI**: Modern card designs with backdrop blur and gradient borders
- **Dark Theme**: Carefully designed dark palette (#121212 background) for visual impact

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page with scrollytelling
│   │   └── globals.css         # Global styles and scrollbar
│   ├── components/
│   │   ├── ScrollyCanvas.tsx   # Canvas animation component
│   │   ├── Overlay.tsx         # Parallax text overlay
│   │   └── Projects.tsx        # Featured work grid
│   ├── hooks/                  # Custom React hooks
│   └── utils/                  # Utility functions
├── public/
│   └── sequence/               # Image sequence frames (add your WebP files here)
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Adding Your Image Sequence

1. Place your WebP images in the `public/sequence/` folder
2. Name them sequentially: `frame_00_delay-0.067s.webp`, `frame_01_delay-0.067s.webp`, etc.
3. Update the `frameCount` prop in `ScrollyCanvas` component if you have a different number of frames

### Adjusting Colors

Edit `src/app/globals.css` to change the background color:
```css
body {
  background-color: #121212; /* Change this hex code */
}
```

Edit `tailwind.config.ts` to customize the color palette:
```ts
colors: {
  dark: {
    950: '#121212', // Your custom background
  }
}
```

### Modifying Text Content

Update text in `Overlay.tsx` and `Projects.tsx` components to match your portfolio content.

## 🎯 Component Details

### ScrollyCanvas
- Parent container: `500vh` height (creates long scroll space)
- Sticky canvas: `top-0 h-screen w-full`
- Frame synchronization: Maps scroll progress (0-1) to frame index
- Auto-preloads all images on mount
- Responsive canvas resizing on window resize

### Overlay
- Three text sections with independent opacity and position transitions
- Uses Framer Motion `useTransform` for parallax effect
- Positioned absolutely over the canvas with `pointer-events-none`

### Projects
- Glass-morphism card design with backdrop blur
- Gradient borders with hover animation
- Tag system for project categorization
- Staggered animation on scroll into view

## 🔧 Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push your repo to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
The project is fully self-contained and can be deployed to any Node.js hosting platform.

## 📊 Performance Optimization

- **Image Preloading**: All frames load before animation begins
- **Canvas Rendering**: Efficient drawing with proper aspect ratio handling
- **Lazy Component Loading**: Projects section loads on viewport intersection
- **CSS Optimizations**: Tailwind CSS purges unused styles in production

## 🎓 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Built with ❤️ by a Creative Developer**
