import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import { Environment, Html, OrbitControls, OrthographicCamera } from "@react-three/drei"

import { useControls } from 'leva'
import Ejemplo from "./models/Ejemplo";
import ColorCardModel from "./models/ColorCardModel"
import CodeCardModel from "./models/CodeCardModel";


function Experience() {

  const { size } =useThree();
  const aspect = size.width / size.height

  const meshRef = useRef();


  //MODELADO
  const model = useGLTF("/models/edificio.glb")

  return (
    <>
      {/* 🔥 Cámara sin perspectiva */}
      <OrthographicCamera
        makeDefault
        position={[0, 0, 10]}
        left={-5 * aspect}
        right={5 * aspect}
        top={5}
        bottom={-5}
      />

      <Environment preset="studio" />
      
      <ColorCardModel />

      {/* Luz */}
      {/* <ambientLight intensity={6} /> */}
      <OrbitControls makeDefault />

    
      <CodeCardModel />

      {/* < primitive object={ model.scene }/> */}     
      {/* <Ejemplo cardTwoPosition={[3, 1, 0]} /> */}
    </>
  );
}

export default Experience;