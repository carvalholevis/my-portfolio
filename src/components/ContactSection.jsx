import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Linkedin } from "lucide-react"
import { Instagram } from "lucide-react"
import { Twitter } from "lucide-react"
import { MapPinCheck } from "lucide-react"
import { Mail, Phone } from "lucide-react"
import { cn } from "../lib/utils"
import { Send } from "lucide-react"

const WhatsAppIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>)


export const ContactSection = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                'service_ktwf00s',
                'template_sxd776g',
                form.current,
                {
                    publicKey: '4_6QOqvzcKyrNyap_',
                }
            )
            .then(
                () => {
                    alert('Message sent successfully! 🚀');
                    setIsSubmitting(false);
                    e.target.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    alert('Oops! Something went wrong. Please try again.');
                    setIsSubmitting(false);
                },
            );
    };

    return <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Ready to build something <span className="text-primary"> Stellar? </span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                Get in <span className="text-primary">touch...</span>
            </h3>
            <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                My orbit is always open to new opportunities and collaborations. If you want to bridge the gap between imagination and reality, feel free to send a signal. Let's discuss how my logic and resilience can add value to your team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center md:justify-start mx-auto">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Information
                    </h3>

                    <div className="space-y-6 justify-center items-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4> Email </h4>
                                <a href="mailto:carvalholevis@icloud.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    carvalholevis@icloud.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4> Phone </h4>
                                <a href="tel:+351930662282" className="text-muted-foreground hover:text-primary transition-colors">
                                    +351 930 662 282
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPinCheck className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4> Location </h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Maia, Porto, Portugal
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <WhatsAppIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4> WhatsApp </h4>
                                <a href="https://api.whatsapp.com/send/?phone=%2B351930662282&text&type=phone_number&app_absent=0" className="text-muted-foreground hover:text-primary transition-colors" target="_blank">
                                    Send me a message...
                                </a>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send me a <span className="text-primary">Message</span></h3>

                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Lévis Carvalho" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your E-mail</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="carvalholevis@icloud.com" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Feel free to send me anything" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                isSubmitting && "opacity-50 cursor-not-allowed"
                            )}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            {!isSubmitting && <Send />}
                        </button>

                    </form>

                </div>
            </div>
        </div>
    </section>
}