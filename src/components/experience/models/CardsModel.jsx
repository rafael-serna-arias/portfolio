import { useGLTF, useTexture} from "@react-three/drei"
import { cardsData } from "./data/cardsModelData"
import * as THREE from "three"
import React, { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"

export default function CardsModel ({ card }) {
    
    const { nodes } = useGLTF(card.modelLink)
    const texture = useTexture(card.textureLink)

    // guarda una referencia que persiste entre renders sin provocar un nuevo render.
    // Referencia un elemento del DOM
    const myRef = useRef()

    // Guarda el ángulo acumulado de la animación
    const angleRef = useRef(0)

 

    // -----------------------------
    // TEXTURE CONFIG
    // -----------------------------
    useEffect(() => {
        texture.flipY = false
        texture.colorSpace = THREE.SRGBColorSpace
        texture.generateMipmaps = false
        texture.minFilter = THREE.LinearFilter
        texture.needsUpdate = true
    }, [texture])


    // -----------------------------
    // ANIMATION
    // -----------------------------
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
        // el ultimo valor controla el angulo en el que oscila. 
        myRef.current.rotation.y = Math.sin(
            time * card.animation.speed + card.animation.phase
        ) * 
        THREE.MathUtils.degToRad(card.animation.amplitude)
  
        // Movimiento vertical descendente
        myRef.current.position.y += -delta * 3

        // pequeña inclinación 
        myRef.current.rotation.x = Math.cos(time * 0.5) * 0.2

        if(myRef.current.position.y < -15) {
            myRef.current.position.y = 15
        }
        
    })

    return (
        <>
            <group
                ref={myRef}
                position={card.position}
                scale={2}
            >
                <mesh                   
                    geometry={nodes[card. geometryName].geometry}

                    material={new THREE.MeshBasicMaterial({
                        map: texture,
                        toneMapped: false
                    })}
                />    
            </group>     
        </>
 
    )
}



