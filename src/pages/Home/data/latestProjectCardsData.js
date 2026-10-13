// Images
// import codeGeneratorImage from "@/assets/images/home/code-moodboard.png";
import codeGeneratorImage from "@/assets/images/home/code-moodboard_2.webp";
import walletExperienceImage from '@/assets/images/home/wall-experience.webp'
import realStateExperienceImage from '@/assets/images/home/real-state.webp'



import uiStyleGuide from '@/assets/images/home/ui-style.webp'
import uiCaseStudy from '@/assets/images/home/ux-case.webp'

import maxTikoImage from '@/assets/images/home/max-tiko.webp'
import heroesImage from '@/assets/images/home/heroes.webp'
import localChipsImage from '@/assets/images/home/local-chips.webp'
import saharaImage from '@/assets/images/home/sahara.webp'





// icons
import jsIcon from "@/assets/icons/js-icon.svg"
import sassIcon from "@/assets/icons/sass-icon.svg"
import reactIcon from "@/assets/icons/react-icon.svg"
import threeIcon from "@/assets/icons/three-icon.svg"
import figmaIcon from "@/assets/icons/figma-icon.svg"
import maxIcon from "@/assets/icons/3dsmax-icon.svg"
import rhinocerosIcon from "@/assets/icons/rhinoceros-icon.svg"
import vrayIcon from "@/assets/icons/vray-icon.svg"
import blenderIcon from "@/assets/icons/blender-icon.svg"





export const latestProjects = {
  code: [
    {
      id: "moodboardGenerator",
      image: codeGeneratorImage,
      title: "Moodboard Generator",
      description: "Interior styling tool",

      type: "modal",
      modalType: "front-end-modal",
      icons: [
        jsIcon,
        sassIcon
      ]
    },
    {
      id: "walletExperience",
      image: walletExperienceImage,
      title: "Wallet Experience",
      description: "Product Motion Experience",

      type: "modal",
      modalType: "front-end-modal",
      icons: [
        reactIcon,
        threeIcon,
        blenderIcon
      ]
    },
        {
      id: "realStateExperience",
      image: realStateExperienceImage,
      title: "Real state experience",
      description: "Real Estate Web Experience",

      type: "modal",
      modalType: "front-end-modal",
      icons: [
        reactIcon,
        threeIcon,
        blenderIcon
      ]
    },
        
  ],

  uiux: [
    {
      id: "uxStyleGuide",
      image: uiStyleGuide,
      title: "UI style guide",
      description: "Personal portfolio",
      path: "/projects/styleGuide",

      type: "link",
      icons: [
        figmaIcon,
      ]
    },
    {
      id: "uiCaseStudy",
      image: uiCaseStudy,
      title: "UX case study",
      description: "Moodboard generator",
      path: "/projects/moodboardgenerator",

      type: "link",
      icons: [
        figmaIcon,
      ]
    }
  ],

  commercialSpaces: [
    {
      id: "maxTiko",
      image: maxTikoImage,
      title: "Fast food restaurant",
      description: "Villa garzón - Putumayo",
      
      type: "modal",
      modalType: "commercial-spaces-modal",
      icons: [
        maxIcon,
        rhinocerosIcon,
        vrayIcon,
      ]
    },
    {
      id: "heroes",
      image: heroesImage,
      title: "Ice cream shop",
      description: "Palmira - valle del cauca",
      
      type: "modal",
      modalType: "commercial-spaces-modal",
      icons: [
        maxIcon,
        rhinocerosIcon,
        vrayIcon,
      ]
    },
    {
      id: "localChips",
      image: localChipsImage,
      title: "Fast food restaurant",
      description: "Cali - Valle del cauca",
      
      type: "modal",
      modalType: "commercial-spaces-modal",
      icons: [
        maxIcon,
        rhinocerosIcon,
        vrayIcon,
      ]
    },
    {
      id: "sahara",
      image: saharaImage,
      title: "Bakery",
      description: "Cali - Valle del cauca",
      
      type: "modal",
      modalType: "commercial-spaces-modal",
      icons: [
        maxIcon,
        rhinocerosIcon,
        vrayIcon,
      ]
    },





  ]
}