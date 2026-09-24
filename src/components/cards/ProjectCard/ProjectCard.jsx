
import "./Project-card.scss"; 

export default function ProjectCard({
  title, 
  description, 
  image, 
  onClick, 
  icons,
  className

}) {



  return (
    <button
      className={`latest-project-card ${className}` }
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
      />
    
      <div className="">
        <div className="latest-project-card__texts">
          <p>{title}</p>
          <div className="latest-project-card__bottom">
            <p>{description}</p>  
            <div className="latest-project-card__icons">
              {icons?.map((icon, index) => {
                return (

                  <img 
                    key={index}
                    src={icon}
                    alt=""
                  />
              
                )                
              })}
            </div>      
          </div>
        </div>
       
      </div>

    </button>
  )
  
}

