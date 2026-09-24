import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer.jsx";

import contactImage from "@/assets/images/home/myself.png";

import "./contact.scss"

export default function Contact () {
    return (
        <div className="grid">
            <div className="contact">

                
                

                <div className="contact__content">
                    <div className="contact__texts">
                        <h1>Contact</h1>
                        <div>
                            <p>Available for select freelance opportunities</p>
                            <p>Have an exciting project you need help with?</p>
                            <p>Send me an email.</p>
                        </div>
                    </div>
                    

                    <div className="contact__container-form">
                        <img className="contact__photo" src={contactImage} alt="" />

                        <div className="contact__form">
                            <form action="">
                                <div className="contact__options">
                                    <div className="contact__top-option">
                                        <div className="contact__option">
                                            <label htmlFor="">Name</label>
                                            <input type="text" />
                                        </div>
                                        <div className="contact__option">
                                            <label htmlFor="">Email</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="contact__option">
                                        <label htmlFor="">Mesagge</label>
                                        <textarea id="message"></textarea>
                                    </div>
                                    <button type="submit" className="contact__submit">
                                        Send email
                                    </button>           
                                </div>                            
                            </form>
                        </div>

                    </div>




                </div>

               

            </div>
           
        </div>
    )
}