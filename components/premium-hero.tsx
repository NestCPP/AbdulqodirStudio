'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MousePosition {
  x: number
  y: number
}

export function PremiumHero() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Parallax offset based on mouse position
  const parallaxX = (mousePosition.x - 0.5) * 20
  const parallaxY = (mousePosition.y - 0.5) * 20

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.8,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 1.2,
      },
    },
  }

  const annotationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 1.5 + i * 0.1,
      },
    }),
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const annotations = [
    { text: 'Environment Design', top: '15%', left: '12%' },
    { text: 'World Building', top: '25%', right: '15%' },
    { text: 'Game Assets', top: '65%', left: '10%' },
    { text: 'Production Ready', bottom: '15%', right: '12%' },
    { text: 'Animation', bottom: '25%', left: '15%' },
    { text: 'Lighting & Rendering', top: '45%', right: '8%' },
  ]

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{
          x: parallaxX,
          y: parallaxY,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 30,
        }}
      >
        <img
          src="/fantasy-village.png"
          alt="Fantasy Village Environment"
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
      </motion.div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Volumetric Fog Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Sun Rays */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-radial from-yellow-300/10 to-transparent pointer-events-none blur-3xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full pointer-events-none blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.5, 0],
            x: Math.random() > 0.5 ? [0, 20, 0] : [0, -20, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Main Content */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            variants={titleVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
            style={{
              textShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
              letterSpacing: '-0.02em',
            }}
          >
            ABDULQODIR
          </motion.h1>

          <motion.h2
            variants={titleVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 bg-clip-text text-transparent mb-6"
            style={{
              textShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
            }}
          >
            STUDIO
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={subtitleVariants}
            className="text-lg md:text-xl text-amber-100/80 mb-8 font-light tracking-widest"
          >
            3D ARTIST & ANIMATOR
          </motion.p>

          {/* Supporting Text */}
          <motion.div
            variants={textVariants}
            className="space-y-3 mb-12"
          >
            <p className="text-base md:text-lg text-gray-300 tracking-wide">
              Game Assets • Characters • Environments • STL
            </p>
            <p className="text-base md:text-lg text-amber-200/70 font-light italic">
              Bringing ideas to life through modeling and animation.
            </p>
          </motion.div>

          {/* Premium Separator */}
          <motion.div
            variants={textVariants}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-300" />
            <div className="w-2 h-2 bg-amber-300 rounded-full" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Annotations */}
      {annotations.map((annotation, i) => (
        <motion.div
          key={i}
          className="absolute text-xs md:text-sm font-light text-amber-200/60 tracking-widest pointer-events-none"
          style={{
            ...(annotation.top && { top: annotation.top }),
            ...(annotation.bottom && { bottom: annotation.bottom }),
            ...(annotation.left && { left: annotation.left }),
            ...(annotation.right && { right: annotation.right }),
          }}
          custom={i}
          initial="hidden"
          animate={['visible', 'float']}
          variants={annotationVariants}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/10 to-amber-400/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            <span className="relative block px-3 py-2 border border-amber-300/20 rounded-lg backdrop-blur-sm">
              {annotation.text}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Cinematic Camera Drift Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0) 0%, rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at 70% 60%, rgba(251, 191, 36, 0) 0%, rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at 40% 70%, rgba(251, 191, 36, 0) 0%, rgba(0, 0, 0, 0) 50%)',
            'radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0) 0%, rgba(0, 0, 0, 0) 50%)',
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
