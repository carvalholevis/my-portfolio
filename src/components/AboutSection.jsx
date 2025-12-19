import { Download, UserRoundSearch } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="min-h-screen flex items-center py-24 px-4 relative ">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
                <div className="flex justify-center md:justify-start mx-auto">
                    <img src="public/profile-photo.jpeg" className="w-64 h-64 md:w-80 md:h-100 object-cover rounded-4xl border-4 border-white hover:border-primary grayscale shadow-xl transition-all duration-500 hover:grayscale-0 hover:scale-105">
                    </img>




                </div>

                <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                        A Tropical Soul, Solving the <span className="text-primary text-glow">Infinite Puzzle</span>
                    </h3>
                    <p className="text-justify text-lg md:text-lx leading-relaxed text-muted-foreground indent-8">
                        Born under the warm sun of Bahia and now exploring new horizons in Portugal, I am a 30-year-old developer who believes technology needs a human touch. My journey across the Atlantic taught me adaptability and resilience—traits I bring to every line of code I write.
                    </p>
                    <p className="text-justify text-lg md:text-lx leading-relaxed text-muted-foreground indent-8">
                        Since 2023, I have been immersing myself in Software Engineering, captivated by the power of creation it offers. I see Full Stack development as an infinite puzzle waiting to be solved. My mission is simple yet ambitious: turning logic into universes, crafting robust applications where performance meets purpose.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a
                            href="#contacts"
                            className="cosmic-button inline-flex items-center gap-2 justify-center"
                        >
                            <span>Get in touch</span>
                            <UserRoundSearch />
                        </a>
                        <a
                            href="public/LevitonResume.pdf" target="_blank"
                            download="Levis_Carvalho_CV.pdf"
                            className="px-6 py-2 rounded-full border border-primary text-primary font-medium inline-flex items-center gap-2 justify-center transition-all duration-300 hover:bg-primary/10 hover:scale-105 active:scale-95"
                        >
                            <span>Download CV</span>
                            <Download />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}