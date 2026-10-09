import "@/components/cards/UxDecisionCard/ux-decision-card.scss";



function UxDecisionCard({ title, rationale, index }) {

  const badgeThemes = [
  {
    bg: 'rgba(9, 83, 77, 1)',      // brand regular
    text: '#ffffff',
  },
  {
    bg: 'rgba(229, 250, 241, 1)',  // brand light
    text: 'rgba(45, 46, 47, 1)',    // texto oscuro
  },
  {
    bg: 'rgba(5, 38, 41, 1)',      // brand dark
    text: '#ffffff',
  },
  ];

  


  // aca usamos RESTO (%) para ciclar los colores si hay mas tarjetas que colores siempre va a dar valores entre 0 y 2
  const theme = badgeThemes[(index - 1) % badgeThemes.length];

  return (
    <div className="ux-decision-card">

      <div className="ux-decision-card__badge" style={{ backgroundColor: theme.bg, color: theme.text }}>
        <p style={{ backgroundColor: theme.bg, color: theme.text }}>{ index }</p>  
      </div>

      <div className="ux-decision-card__texts">
        <h3 className="ux-decision-card__title">{title}</h3>
        <p className="ux-decision-card__rationale body-l--emphasis-medium">{rationale}</p>
      </div>

    </div>
  );
}

export default UxDecisionCard

