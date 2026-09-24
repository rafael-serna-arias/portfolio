import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

import "./layout.scss"

export default function Layout () {
   return (
        <div className="grid">
            <div className="layout">
                <Navbar />

                <main>
                    <Outlet />
                </main>

                <Footer />

            </div>

        
        </div>
    );
}