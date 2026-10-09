import CloseIcon from "../../icons/CloseIcon/CloseIcon"
import GithubIcon from "../../icons/GithubIcon/GithubIcon"
import VercelIcon from "../../icons/VercelIcon/VercelIcon"
import "./project-modal.scss"

import { projectModalData } from "./projectModalData"

import { useEffect } from "react"


export default function ProjectModal ({project, onClose, }) {

    const isModalOpen = project !== null   

    // Bloquea el scroll de la página cuando hay un modal abierto
    useEffect(() => {

       

        document.body.style.overflow = isModalOpen
        ? 'hidden'
        : ''

        return () => {
        document.body.style.overflow = ''
        }

    }, [isModalOpen])


    if (project === null) return null



    const currentProject = projectModalData[project]


     return (      
        <>

            <div className="project-modal grid">   
                
                <div 
                    className="project-modal__overlay"
                    onClick={onClose}    
                >
                </div>  
                

                <div className="project-modal__container">

                    
                    <button 
                        className="project-modal__close-button"
                        onClick={onClose}
                    >
                            <CloseIcon />
                    </button>
                    

                    <div className="project-modal__header">
                        <h2>{currentProject.title}</h2>
                        <div className="project-modal__line"></div>
                        <div className="project-modal__meta">
                            <p>{currentProject.role}</p>
                            <p>{currentProject.fecha}</p>
                        </div>
                    </div>

                    <div className="project-modal__image">
                    <img  src={currentProject.img} alt="" />
                    </div>

                    <div className="project-modal__explanation">
                        <div className="project-modal__texts">
                            <div className="project-modal__description">
                                <p>The challange</p>
                                <p className="text-m">{currentProject.challenge}</p>
                            </div>
                            <div className="project-modal__description">
                                <p>The solution</p>
                                <p className="text-m">{currentProject.solution}</p>
                            </div>
                        </div>

                        <div className="project-modal__buttons">
                            <a className="project-modal__button project-modal__button--primary" href={currentProject.liveUrl} target="_blank">
                                <VercelIcon />
                                View live project
                            </a>
                            <a className="project-modal__button project-modal__button--secondary" href={currentProject.sourceUrl} target="_blank">
                                <GithubIcon />
                                View source
                            </a>
                        </div>
                    </div>
                
                
                            
                </div>
            </div>
        </>
    )


}