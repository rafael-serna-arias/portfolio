import React, { useRef, useEffect } from "react"
import { useControls } from "leva"
import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"



export default function ColorCardModel(props) {

  // -----------------------------
  // ASSETS
  // -----------------------------

  const { nodes } = useGLTF("/models/color-card.glb")

  const texture = useTexture("/textures/color-card-texture.png")



  // -----------------------------
  // REFS
  // -----------------------------

  const myRef = useRef()

  // Guarda el ángulo acumulado de la animación
  const angleRef = useRef(0)



  // -----------------------------
  // TEXTURE CONFIG
  // -----------------------------

  // No modificar la textura en cada render
  useEffect(() => {

    texture.flipY = false
    texture.colorSpace = THREE.SRGBColorSpace
    texture.generateMipmaps = false
    texture.minFilter = THREE.LinearFilter

    texture.needsUpdate = true

  }, [texture])



  // -----------------------------
  // DEBUG CONTROLS
  // -----------------------------

  const { position, scale } = useControls("Color card", {

    position: {
      value: { x: 10, y: 0, z: 0 },
      step: 0.1
    },

    scale: {
      value: 2
    }

  })



  // -----------------------------
  // ANIMATION
  // -----------------------------

  useFrame((state, delta) => {

    const time = state.clock.getElapsedTime()



    // Genera un valor entre 0.1 → 1.1
    // sin(time * número_grande) → más rápido
    // sin(time * número_pequeño) → más lento
    const speed = 0.6 + Math.sin(time * 0.05) * 0.5



    // Se multiplica por delta para que la animación
    // sea independiente de los FPS
    angleRef.current += delta * speed



    // Oscilación horizontal
    // El 0.6 controla la amplitud
    myRef.current.rotation.y = Math.sin(angleRef.current) * 0.6



    // Movimiento vertical descendente
    myRef.current.position.y += -delta * 3.5



    // Pequeña inclinación
    myRef.current.rotation.x = Math.cos(time * 0.5) * 0.2



    // Reinicia la posición cuando baja demasiado
    if (myRef.current.position.y < -10) {

      myRef.current.position.y = 10

    }

  })



  // -----------------------------
  // RENDER
  // -----------------------------

  return (

    <group
      {...props}
      dispose={null}
      ref={myRef}
      position={[position.x, position.y, position.z]}
      scale={scale}
    >

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.card.geometry}
        material={new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 1
        })}
      />

    </group>

  )

}