import { Link } from "react-router-dom";
import { Suspense, useState } from "react";

import "./Home.scss";

import { Canvas } from "@react-three/fiber";

// Data
import { latestProjects } from "./data/latestProjectCardsData.js";

import { Perf } from 'r3f-perf'

import ProjectCard from "@/components/cards/ProjectCard/ProjectCard.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";

import Experience from "@/components/experience/Experience.jsx";



import { Text } from "@react-three/drei"
import ProjectModal from "../../components/ui/modals/ProjectModal/ProjectModal.jsx";
import CommercialModal from "../../components/ui/modals/CommercialModal/CommercialModal.jsx";
import Navbar from "../../components/layout/Navbar/Navbar.jsx";

import contactImage from "@/assets/images/home/myself.png";

function Home() {

  

  const [cards, setCards] = useState(latestProjects.code);

  const [selectedProject, setSelectProject] = useState(null)

  // Estado para controlar la barra de filtro
  const [selectedFiltre, setSelectecFiltre] = useState("front-end")


  // Esto es para saber que tipo de modal se va a imprimir. 
  const currentProject = cards.find(
    (item) => item.id === selectedProject
  );

  // console.log(currentProject.modalType)

  return (
    <main className="grid">
      
        <div className="home">    
          
          <div className="home__introduction">


            
            <div className="home__canvas-container">
              <div className="home__canvas-wrapper">   

                <Canvas  className="home__canvas3d">
                  {/* <Perf position="top-left"/> */}

                  <Suspense
                    fallback={
                      <Text
                        position={[0, 0, 0]}
                        fontSize={0.5}
                        color="white"
                      >
                        Loading...
                      </Text>
                    }
                  >
                    <Experience />
                  </Suspense>
                  
                </Canvas>
                
              </div>
              
              <img className="home__photo" src={contactImage} alt="" />
              {/* <div className="introduction__photo"></div> */}
            </div> 



            <div className="home__texts">
              <h2>Rafael Serna Arias</h2>
              <p>Designer / Coder</p>
              <p>Rafcelot is a freelance designer and front-end developer based in Cali, passionate about crafting digital experiences that blend functionality with visual impact.</p>
            </div>

          </div>



          <section className="home__project-summary">

            <p>Some of my work</p>
            
            <div className="home__project-filters">

              <div className="home__buttons">
                <button 
                  type="button"
                  onClick={() => {               
                   setCards(latestProjects.code)
                   setSelectecFiltre("front-end")
                  }}
                  className={`home__button ${
                    selectedFiltre === "front-end"
                    ? "home__button--active"
                    : ""
                  }`}
                >
                  Front-end
                </button>

                <button 
                  type="button"
                  onClick={ () => {
                    setCards(latestProjects.uiux)
                    setSelectecFiltre("ux/ui")
                  }}
                  className={`home__button ${
                    selectedFiltre === "ux/ui"
                    ? "home__button--active"
                    : "" 
                  }`}
                >
                  UX / UI
                </button>
                              
                <button 
                  type="button"
                  onClick={ () => {
                    setCards(latestProjects.commercialSpaces)
                    setSelectecFiltre("commercial-spaces")
                  }}
                  className={`home__button ${
                    selectedFiltre === "commercial-spaces" 
                    ? "home__button--active"
                    : ""
                  }`}
                >
                  Spaces
                </button>              
              </div>


              <div className="home__underlines-indicator">                
                <div
                  className={`home__front-bar ${
                    selectedFiltre === "front-end"
                    ? "active"
                    : ""
                  }`}
                ></div>

                <div
                  className={`home__ux-bar ${
                    selectedFiltre === "ux/ui"
                    ? "active"
                    : ""
                  }`}
                ></div>
               
                <div
                  className={`home__commercial-spaces ${
                    selectedFiltre === "commercial-spaces"
                    ? "active"
                    : ""
                  }`}
                ></div>
              </div>

              
            </div>




            <div className="home__cards-container">
              
              {cards.map((item) => {

                if (item.type === "link") {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="home__project-card"    
                      // target="_blank" 
                    >
                      <ProjectCard {...item} />
                    </Link>
                  )
                }  

                return (
                  <ProjectCard
                    key={item.id}
                    {...item}
                    onClick={() => setSelectProject(item.id)}
                    className="home__project-card"
                  />
                )
              })}
              
            </div>



          </section>

          
          {selectedProject && 
            <>
              {currentProject.modalType === "commercial-spaces-modal"
                ? 
                    <CommercialModal
                      project={selectedProject}
                      onClose={() => setSelectProject(null)}
                    />
                  
                : 
                    <ProjectModal
                      project={selectedProject}
                      onClose={() => setSelectProject(null)}
                    />
                  
              }
            </>
          }

        
         

        </div>

        

      
 
      

    </main>
  );
}

export default Home;
