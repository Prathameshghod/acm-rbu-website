// components/Home.tsx

'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
// import logo from '../components/acm-logo.png'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })

    renderer.setSize(window.innerWidth-20, window.innerHeight)

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true }) // original indigo color
    const torus = new THREE.Mesh(geometry, material)

    scene.add(torus)

    camera.position.z = 30

    const animate = () => {
      requestAnimationFrame(animate)

      torus.rotation.x += 0.01
      torus.rotation.y += 0.005

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth-100, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-300">
          ACM Student Chapter
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Ramdeobaba University, Nagpur
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Empowering students through technology, innovation, and collaboration.
        </p>
        {/* <img src={`${logo.src}`} alt="ACM Logo" className="w-32 h-32 mx-auto mb-8" /> */}
      </div>
    </section>
  )
}
