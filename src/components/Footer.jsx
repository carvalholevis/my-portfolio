import { Linkedin, Twitter, Instagram } from "lucide-react"; // 1. Importação necessária

export const Footer = () => {
    return (
        <footer className="py-8 px-4 bg-secondary/30 border-t border-primary/20 backdrop-blur-sm relative">
            
            {/* Container para alinhar com a margem do resto do site */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                
                {/* LADO ESQUERDO: Ícones (Como você pediu) */}
                <div className="flex gap-6">
                    <a 
                        href="https://www.linkedin.com/in/levitoncarvalho/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" 
                        aria-label="Linkedin"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>
                    
                    <a
                        href="https://x.com/caralholevis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                        aria-label="Twitter"
                    >
                        <Twitter className="h-5 w-5" />
                    </a>
                    
                    <a
                        href="https://www.instagram.com/caralholevis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram className="h-5 w-5" />
                    </a>
                </div>

                {/* LADO DIREITO: Texto de Copyright */}
                <p className="text-sm text-muted-foreground text-center md:text-right">
                    &copy; {new Date().getFullYear()} <span className="text-primary font-medium">CarvalhoLevis</span> - All rights reserved. 
                </p>

            </div>
        </footer>
    )
}