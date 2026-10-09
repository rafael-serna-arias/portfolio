
import "./work.scss"
import { useState } from "react"

import { allProjects} from "./data/allProjectsCardData.js"
import { Link } from "react-router-dom"
import ProjectCard from "../../components/cards/ProjectCard/ProjectCard.jsx"
import CommercialModal from "../../components/ui/modals/CommercialModal/CommercialModal.jsx"
import ProjectModal from "../../components/ui/modals/ProjectModal/ProjectModal.jsx"

export default function Work () {

    const [selectedCategory, setSelectedCategory] = useState("all")
   
    const [selectedProject, setSelectProject] = useState(null)
    console.log("selectedproject", selectedProject)

    // permite filtrar el data según la categoría y despues se usa un map para imprimir.
    const filteredProjects = 
        selectedCategory === "all"
            ? allProjects
            : allProjects.filter(
                project => project.category === selectedCategory
            );


    const currentProject = allProjects.find(
        (item) => item.id === selectedProject
    );
    console.log("currentProject", currentProject)


    return (

        <>
        <div className="grid">
            <div className="work">

                
                <div className="work__texts">
                    <h1>Work</h1>
                    <p>
                        My background spans spatial, product, UX/UI, and front-end design. 
                        Today, I’m focused on creating digital experiences through design
                        and code.
                    </p>
                </div>
             

     
                <div className="work__main-projects">
                    
                    <div className="work__filters">

                        <div className="work__buttons">
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className={`work__button ${
                                    selectedCategory === "all"
                                    ? "work__button--active"
                                    : ""
                                }`}
                            >
                                All
                            </button>

                            <button
                                onClick={() => setSelectedCategory("front-end")}
                                className={`work__button ${
                                    selectedCategory === "front-end"
                                    ? "work__button--active"
                                    : ""
                                }`}
                            >   
                                Front-end
                            </button>

                            <button
                                onClick={() => setSelectedCategory("ux-ui")}
                                className={`work__button ${
                                    selectedCategory === "ux-ui"
                                    ? "work__button--active"
                                    : ""
                                }`}

                            >   
                                UX / UI
                            </button>

                            
                            <button
                                onClick={() => setSelectedCategory("spaces")}
                                className={`work__button ${
                                    selectedCategory === "spaces"
                                    ? "work__button--active"
                                    : ""
                                }`}

                            >   
                                Spaces
                            </button>
                        </div>


                        <div className="work__underlines-indicator">

                            <div
                                className={`work__all-bar ${
                                    selectedCategory  === "all"
                                    ? "active"
                                    : ""
                                }`}
                            ></div>

                            <div
                                className={`work__front-bar ${
                                    selectedCategory === "front-end"
                                    ? "active"
                                    : ""
                                }`}
                            ></div>

                            <div
                                className={`work__ux-bar ${
                                    selectedCategory === "ux-ui"
                                    ? "active"
                                    : ""
                                }`}
                            ></div>
                                                
                            <div
                                className={`work__spaces-bar ${
                                    selectedCategory === "spaces"
                                    ? "active"
                                    : ""
                                }`}
                            ></div>

                        </div>



                    </div>


                    <div className="work__projets-container">
                        { filteredProjects.map((item) => {

                            if(item.type === "link") {
                                return (
                                    <Link
                                        key={item.id}
                                        to={item.path}
                                        className="project-summary__project-card"
                                    >
                                        <ProjectCard {...item}/>
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
                        })
                        }
                    </div>


                </div>

                {selectedProject && 
                    <>
                        {currentProject?.modalType === "commercial-spaces-modal"
                            ?
                                <CommercialModal 
                                    project={currentProject.id}
                                    onClose={() => setSelectProject(null)}
                                />
                            :
                                <ProjectModal 
                                    project={currentProject.id}
                                    onClose={() => setSelectProject(null)}
                                />
                        }

                    </>
                }

            </div>
        </div>
        </>

    )
}
