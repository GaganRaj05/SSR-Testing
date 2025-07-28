// src/components/PrerenderReady.jsx
import { useEffect } from 'react'

export default function PrerenderReady() {
    useEffect(() => {
    const timer = setTimeout(() => {
      document.dispatchEvent(new Event('prerender-ready'))
    }, 500)  // Increased delay to handle larger pages
    
    return () => clearTimeout(timer)
  }, [])

  return null

}