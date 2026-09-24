import CloseIcon from '../../icons/CloseIcon/CloseIcon'

import './commercial-modal.scss'
import {commercialModalData} from './commercialModalData.js'


export default function CommercialModal ({project, onClose}) {

    const currentProject = commercialModalData[project]


    return ( 
        <div className='project-modal grid'>

            <div
                className="project-modal__overlay"
                onClick={onClose}
            >
                
            </div>

      

            <div className='project-modal__container'>
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

                <div className='commercial-modal__content'>
                    <div className="commercial-modal__image">
                        <img  src={currentProject.img} alt="" />
                    </div>

                    <p>{currentProject.description}</p>
                </div>

            </div>




        </div>

    )
}