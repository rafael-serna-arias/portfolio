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
  // guarda una referencia que persiste entre renders sin provocar un nuevo render.
  // Referencia un elemento del DOM
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
    }, 

  })



  // -----------------------------
  // ANIMATION
  // -----------------------------
  // state informacion de la escena.
  // delta tiempo transcurrido desde el frame anterior.
  useFrame((state, delta) => {
    // getElapesedTime() devuelve cuántos segundos han pasado desde que comenzó en reloj
    const time = state.clock.getElapsedTime()

    // Esto se hace para que la velocidad no sea la misma si no que presente variaciones y sea mas interesante
    // El primer valor controla la velocidad
    // el segundo hace que oscile 
    // el tercer valor controla cuanto varia la velocidad.     
    const speed = 0.9 + Math.sin(time) * 0.5

    // Se multiplica por delta para que la animación sea independiente de los FPS
    // myRef necesito guardar un valor entre renders. 
    angleRef.current += delta * speed

    // Oscilación horizontal
    // el ultimo valor controla el angulo de rotacion
    myRef.current.rotation.y = Math.sin(angleRef.current) * THREE.MathUtils.degToRad(30)

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
      // {...props}
      // dispose={null}
      ref={myRef}
      position={[position.x, position.y, position.z]}
      scale={scale}
    >
      <mesh
        geometry={nodes.card.geometry}
        material={new THREE.MeshBasicMaterial({
          map: texture,
        })}
      />
    </group>

  )

}