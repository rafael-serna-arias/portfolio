import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import { Environment, Html, OrbitControls, OrthographicCamera } from "@react-three/drei"

import { useControls } from 'leva'

import ColorCardModel from "./models/ColorCardModel"
import CodeCardModel from "./models/CodeCardModel";
import CardsModel from "./models/CardsModel";
import { cardsData } from "./models/data/cardsModelData";



function Experience() {

  const { size } =useThree();
  const aspect = size.width / size.height

  const meshRef = useRef();


  //MODELADO
  // const model = useGLTF("/models/edificio.glb")

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


    {cardsData.map((card) => (
      <CardsModel
        key={card.id}
        card={card}
      />
    ))}


    {/* <OrbitControls /> */}

     {/* <CardsModel /> */}



      
      {/* <ColorCardModel />    
      <CodeCardModel /> */}

      {/* <Environment preset="studio" /> */}

      {/* < primitive object={ model.scene }/> */}     
      {/* <Ejemplo cardTwoPosition={[3, 1, 0]} /> */}

      {/* Luz */}
      {/* <ambientLight intensity={6} /> */}
      {/* <OrbitControls makeDefault /> */}

    </>
  );
}

export default Experience;