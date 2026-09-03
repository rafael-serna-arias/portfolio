import { Link } from "react-router-dom";
import { Suspense, useState } from "react";

import "./Home.scss";

import { Canvas } from "@react-three/fiber";

// Data
import { latestProjects } from "./data/latestProjectCardsData.js";

import { Perf } from 'r3f-perf'

import ProjectCard from "@/components/cards/ProjectCard/ProjectCard.jsx";
import Footer from "@/components/layout/Footer/Footer.jsx";
import Header from "@/components/layout/header/Header.jsx";
import Experience from "@/components/experience/Experience.jsx";



import { Text } from "@react-three/drei"
import ProjectModal from "../../components/ui/modals/ProjectModal/ProjectModal.jsx";


function Home() {

  console.log("Home render");

  const [cards, setCards] = useState(latestProjects.code);

  const [selectedProject, setSelectProject] = useState(null)

  // Estado para controlar la barra de filtro

  const [selectedFiltre, setSelectecFiltre] = useState("front-end")

  const [test, setTest] = useState(false);
  

  return (
    <main className="grid">
      <div className="page__content">
        <div className="home">

          <Header />

          {/* <Link to="/projects/moodboardgenerator">
            Go to Moodboard Generator
          </Link>

          <Link to="/projects/coffeeexperience">
            Go to Coffee Shop 
          </Link>      

          <Link to="/styleguide">
            Go to Styles Guide
          </Link> */}
        

          <section className="introduction">

            <div className="introduction__canvas-container">

              <div className="introduction__canvas-wrapper">
              
                <Canvas  className="introduction__canvas3d">
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

              <div className="introduction__photo"></div>
            </div> 


            <div className="introduction__texts">
              <h2 className="introduction__title">Rafael Serna Arias</h2>
              <p className="introduction__subtitle font-display font-bold ">Designer / Coder</p>
              <p className="introduction__description text-m">Rafcelot is a freelance designer and front-end developer based in Cali, passionate about crafting digital experiences that blend functionality with visual impact.</p>
            </div>

          </section>



          <section className="project-summary">

            <p className="project-summary__title">Some of my latest projects</p>
            
            <div className="project-summary__project-filters">

              <div className="project-summary__buttons">

                <button 
                  type="button"
                  onClick={() => {
                    

                   setCards(latestProjects.code)
                   setSelectecFiltre("front-end")
                  }}
                  className={`project-summary__front-button ${
                    selectedFiltre === "front-end"
                    ? "project-summary__front-button--active"
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
                  className={`project-summary__ux-button ${
                    selectedFiltre === "ux/ui"
                    ? "project-summary__ux-button--active"
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
                  className={`project-summary__commercial-button ${
                    selectedFiltre === "commercial-spaces" 
                    ? "project-summary__commercial-button--active"
                    : ""
                  }`}
            
                >
                  Commercial spaces
                </button>
              
              </div>

              <div className="project-summary__underlines-indicator">
                
                <div
                  className={`project-summary__front-bar ${
                    selectedFiltre === "front-end"
                    ? "active"
                    : ""
                  }`}
                ></div>

                <div
                  className={`project-summary__ux-bar ${
                    selectedFiltre === "ux/ui"
                    ? "active"
                    : ""
                  }`}
                ></div>
               
                <div
                  className={`project-summary__commercial-spaces ${
                    selectedFiltre === "commercial-spaces"
                    ? "active"
                    : ""
                  }`}
                ></div>

              </div>
              
            </div>

            <div className="project-summary__content">
              
              {cards.map((item) => {

                if (item.type === "link") {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="project-card-link"    
                      target="_blank" 
                    >
                      <ProjectCard
                        {...item}
                      />
                    </Link>
                  )
                }  

                return (
                  <ProjectCard
                    key={item.id}
                    {...item}
                    onClick={() => setSelectProject(item.id)}
                    className="project-summary__project-card"
                  />
                )
              })}
              
            </div>

            {/* <div className="project-summary__content">
              {cards.map((item) => (
                <ProjectCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div> */}





          </section>

          <ProjectModal 
            project={selectedProject}
            onClose={() => setSelectProject(null)}
          />
        
          <Footer />

        </div>

        

      </div>
 
      

    </main>
  );
}

export default Home;
