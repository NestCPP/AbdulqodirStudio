'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function PremiumHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/image.png)',
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Content */}
      <motion.div className="relative z-10 max-w-3xl mx-auto px-6 text-center" variants={containerVariants}>
        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
            <span className="text-white">Crafting Worlds</span>
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
              Worth Exploring
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-amber-100/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          AAA-quality game assets, cinematic renders & immersive worldbuilding for creators and studios.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#portfolio"
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-semibold rounded-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105"
          >
            View Portfolio
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-amber-300/60 text-amber-100 font-semibold rounded-lg hover:bg-amber-400/10 hover:border-amber-300 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Social/Links */}
        <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center gap-6 text-sm">
          <a href="#" className="text-amber-200/70 hover:text-amber-200 font-medium transition-colors">
            Instagram
          </a>
          <span className="text-amber-300/30">•</span>
          <a href="#" className="text-amber-200/70 hover:text-amber-200 font-medium transition-colors">
            ArtStation
          </a>
          <span className="text-amber-300/30">•</span>
          <a href="#" className="text-amber-200/70 hover:text-amber-200 font-medium transition-colors">
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative accent lines */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </motion.div>
  )
}
