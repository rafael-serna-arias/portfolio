// Styles
import "./color-card.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

// UI Icons
import BrushIcon from "@/components/ui/icons/BrushIcon/BrushIcon.jsx";
import PaintbrushIcon from "@/components/ui/icons/PaintbrushIcon/PaintbrushIcon.jsx";
import TextIcon from "@/components/ui/icons/TextIcon/TextIcon.jsx";
import DoubleIcon from "@/components/ui/icons/Double/Double.jsx";

// Data
import { variantConfig } from "./data/colorCardsData.js";


// ─────────────────────────────────────
// Variant components
// ─────────────────────────────────────

function InterfaceColor({ colors }) {
  
  const { regular, light, dark } = colors;

  return (
    <div
      className="color-card__layer-light"
      style={{ backgroundColor: light, color: dark }}
    >
      <div
        className="color-card__layer-dark"
        style={{ backgroundColor: dark, color: "white" }}
      >
        <div
          className="color-card__layer-regular"
          style={{ backgroundColor: regular, color: "white" }}
        >
          <div className="color-card__regular-texts">
            <p className="color-card__label-regular text-m font-medium font-display">
              Regular
            </p>

            <PaintbrushIcon />
          </div>
        </div>

        <div className="color-card__dark-texts">
          <p className="color-card__label-dark text-m font-medium font-display">
            Dark
          </p>

          <TextIcon className="check-icon" />
        </div>
      </div>

      <div className="color-card__light-texts">
        <p className="color-card__label-light text-m font-medium font-display">
          Light
        </p>

        <BrushIcon className="check-icon" />
      </div>
    </div>
  );
}


function GrayColor({ colors, icon: Icon }) {
  const { regular, iconColor } = colors;

  return (
    <div
      className="color-card__gray-colors"
      style={{
        backgroundColor: regular,
        color: iconColor,
      }}
    >
      {Icon && (
        <span className="color-card__gray-colors-icon">
          <Icon />
        </span>
      )}
    </div>
  );
}


// ─────────────────────────────────────
// Main component
// ─────────────────────────────────────

function ColorCard({ variant }) {
  // Get configuration based on variant
  const config = variantConfig[variant];

  // Guard clause
  if (!config) return null;

  // Variant → Component map
  const VariantComponent = {
    interface: InterfaceColor,
    gray: GrayColor,
  };

  const ColorVariant = VariantComponent[variant];

  return (
    <div className="cards-grid">
      {config.map((item) => (
        <div
          className="color-card"
          key={item.id}
        >
          {/* Header */}
          <div className="color-card__header">
            <div className="color-card__title">
              <h3 className="text-l">
                {item.title}
              </h3>

              <FontAwesomeIcon icon={faCode} />
            </div>

            <p className="font-display text-m font-medium text-secondary">
              {item.description}
            </p>
          </div>

          {/* Colors */}
          <ColorVariant colors={item.colors} icon={item.icon} />
        </div>
      ))}
    </div>
  );
}

export default ColorCard;
