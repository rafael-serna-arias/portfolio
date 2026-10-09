import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer.jsx";

import contactImage from "@/assets/images/home/myself.png";

import "./contact.scss"
import { useState } from "react";



export default function Contact () {

    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);
        setStatus("");

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                "https://formspree.io/f/xljdzobw",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                setStatus("Message sent successfully.");
                form.reset();
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch {
            setStatus("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };



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

                            
                            <form onSubmit={handleSubmit}>
                                <div className="contact__options">

                                    <div className="contact__top-option">

                                        <div className="contact__option">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                            />
                                        </div>

                                        <div className="contact__option">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                            />
                                        </div>

                                    </div>

                                    <div className="contact__option">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                        />
                                    </div>

                                    <div className="contact__send-message">
                                        <button
                                            type="submit"
                                            className="contact__submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Sending..." : "Send email"}
                                        </button>

                                        {status && (
                                            <p className="contact__status">
                                                {status}
                                            </p>
                                        )}
                                    </div>

                                </div>
                            </form>
                
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}