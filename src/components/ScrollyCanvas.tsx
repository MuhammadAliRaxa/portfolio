'use client'

import React, { useEffect, useRef } from 'react'
import { useScroll } from 'framer-motion'

interface ScrollyCanvasProps {
  frameCount?: number
  imageSequencePath?: string
}

const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ 
  frameCount = 120, 
  imageSequencePath = '/sequence/' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const imagesRef = useRef<HTMLImageElement[]>([])

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image()
          const frameNum = String(i).padStart(3, '0')
          img.src = `${imageSequencePath}frame_${frameNum}_delay-0.066s.webp`
          
          img.onload = () => resolve(img)
          img.onerror = () => {
            console.warn(`Failed to load frame ${i}`)
            resolve(img)
          }
        })
      })

      try {
        const images = await Promise.all(imagePromises)
        imagesRef.current = images
        console.log(`✓ Preloaded ${images.length} frames`)
      } catch (error) {
        console.error('Error preloading images:', error)
      }
    }

    preloadImages()
  }, [frameCount, imageSequencePath])

  // Render frames based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      if (canvasRef.current && imagesRef.current.length > 0) {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        
        if (!ctx) return

        // Calculate frame index based on scroll progress
        const frameIndex = Math.min(
          Math.floor(progress * frameCount),
          frameCount - 1
        )

        const image = imagesRef.current[frameIndex]

        if (image && image.complete) {
          // Set canvas dimensions to match window
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight

          // Draw image with cover behavior
          const imgAspect = image.width / image.height
          const canvasAspect = canvas.width / canvas.height

          let drawWidth = canvas.width
          let drawHeight = canvas.height
          let drawX = 0
          let drawY = 0

          if (imgAspect > canvasAspect) {
            // Image is wider
            drawHeight = canvas.height
            drawWidth = drawHeight * imgAspect
            drawX = (canvas.width - drawWidth) / 2
          } else {
            // Image is taller
            drawWidth = canvas.width
            drawHeight = drawWidth / imgAspect
            drawY = (canvas.height - drawHeight) / 2
          }

          // Clear and draw
          ctx.fillStyle = '#121212'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight)
        }
      }
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => unsubscribe()
  }, [frameCount])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[500vh] w-full bg-dark-950"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-dark-950">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
        />
      </div>
    </div>
  )
}

export default ScrollyCanvas
