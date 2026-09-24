import { BrowserRouter, Routes, Route } from "react-router-dom";




import Home from "@/pages/Home/Home";
import MoodboardGenerator from "@/pages/projects/MoodboardGenerator/MoodboardGenerator";
import CoffeeExperience from "@/pages/projects/CoffeeExperience/CoffeeExperience";
import StyleGuide from "@/pages/StyleGuide/StyleGuide";
import Contact from "@/pages/Contact/Contact.jsx"
import Layout from "./components/layout/Layout/Layout";
import Work from "./pages/Work/Work";

export default function App() {


  
  return (
       
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route
              path="/projects/moodboardgenerator"
              element={<MoodboardGenerator />}
            />
            <Route 
              path="/projects/coffeeexperience"
              element={<CoffeeExperience />}
            />      
            <Route
              path="/projects/styleGuide"
              element={<StyleGuide />}
            />

            <Route 
              path="/contact"
              element={<Contact />}
            />
            
            <Route 
              path="/work"
              element={<Work />}
            />
        </Route>
    </Routes>

    </BrowserRouter>
  );

  
}
