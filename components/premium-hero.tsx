'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function PremiumHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-3xl mx-auto px-6 text-center" variants={containerVariants}>
        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-tight">
            <span className="text-slate-900">Crafting Worlds</span>
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Worth Exploring
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Premium 3D art, environment design & animation. AAA-quality game assets, cinematic renders, and immersive worldbuilding for studios and creators.
        </motion.p>

        {/* Stats */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-slate-600 font-medium">5.0 • 24+ Projects</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#portfolio"
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105"
          >
            View Portfolio
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Social/Links */}
        <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center gap-6 text-sm">
          <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            Instagram
          </a>
          <span className="text-slate-300">•</span>
          <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            ArtStation
          </a>
          <span className="text-slate-300">•</span>
          <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
