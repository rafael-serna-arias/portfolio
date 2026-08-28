import "./Project-card.scss"; 

export default function ProjectCard({title, description, image, onClick}) {

  return (
    <div 
      className="latest-project-card"
      onClick={onClick}
    >
      <img 
        className="latest-project-card__img"
        src={image} 
        alt={title} 
      />
      <div className="latest-project-card__texts">
        <p className="font-display font-bold latest-project-card__title">{title}</p>
        <p className="text-xs font-semibold latest-project-card__description">{description}</p>
      </div>
    </div>
  )
  
}

