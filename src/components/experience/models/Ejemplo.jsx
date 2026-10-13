// import React, { useEffect, useRef } from 'react'
// import { useGLTF, useTexture} from "@react-three/drei"
// import { useFrame } from '@react-three/fiber'
// import * as THREE from "three"



// export default function Ejemplo({cardTwoPosition, ...props}) {  
  
// const { nodes, materials } = useGLTF('/models/color-card-prueba.glb')
// const texture = useTexture("/textures/color-card-texture.png")
// texture.flipY = false
// texture.colorSpace = THREE.SRGBColorSpace

// const myRef = useRef()

// useFrame((state, delta) => {
//   const time = state.clock.getElapsedTime()
//   myRef.current.rotation.y =  Math.sin(time) 

// })

//   return (
//     <group {...props} dispose={null} ref={myRef}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes['card-uno'].geometry}
//         material={materials['Material.001']}
//         position={[-2.072, 0.553, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes['card-dos'].geometry}
//         material={new THREE.MeshStandardMaterial({ map: texture, roughness: 0.5 })}
//         position={cardTwoPosition}
//         rotation={[Math.PI / 2, 0, 0]}
//       />
//     </group>
//   )

// }

// useGLTF.preload('/color-card-prueba.glb')