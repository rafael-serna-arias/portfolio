import MoodboardGenerator from "../../../../pages/projects/MoodboardGenerator/MoodboardGenerator";

import moodboardGeneratorImg from "@/assets/images/projects-modals/moodboard-generator.png"
import walletExperienceImg from "@/assets/images/projects-modals/wallet-experience.png"
import realStateExperienceImg from "@/assets/images/projects-modals/real-state-experience.png"



export const projectModalData = {

    moodboardGenerator: {
        img: moodboardGeneratorImg,
        title: "Moodboard generator",
        role: "Designer & Front-end Developer",
        fecha: "July 2025",
        challenge: "Create a simple and intuitive tool that allows users to quickly generate visual moodboards without feeling overwhelmed by the interface.",
        solution: "I designed and developed a lightweight moodboard generator focused on visual exploration, with a responsive interface that adapts to different screen sizes.",
        liveUrl: "https://moodboard-generator-2.vercel.app/", 
        sourceUrl: "https://github.com/Rafcelot/Moodboard-Generator-2/tree/main"
    },



    walletExperience: {
        img: walletExperienceImg,
        title: "Wallet experience",
        role: "Designer & Front-end Developer",
        fecha: "Mayo 2026",
        challenge: "How can a physical wallet be presented digitally in a way that feels as tactile and engaging as the real product itself?",
        solution: "I designed an interactive product experience that uses 3D, animation, and scroll-driven interactions to progressively reveal the wallet’s details and functionality.",
        liveUrl: "https://wallet-three-omega.vercel.app/",
        sourceUrl: "https://github.com/Rafcelot/wallet"

    },
    
    realStateExperience: {
        img: realStateExperienceImg,
        title: "Real state experience",
        role: "Designer & Front-end Developer",
        fecha: "Mayo 2026",
        challenge: "How can a real estate website make it easier and more engaging for potential buyers to explore different apartment types?",
        solution: "I created an interactive 3D experience that allows users to explore the building and select different apartment typologies directly from the 3D model, turning property discovery into a more immersive and intuitive experience.",
        liveUrl: "https://real-state-tj28.vercel.app/",
        sourceUrl: "https://github.com/Rafcelot/real-state"

    }
}