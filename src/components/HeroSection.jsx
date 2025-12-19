import { ArrowDown } from "lucide-react"


export const HeroSection = () => {

    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
                    <span className="opacity-0 animate-fade-in"> Hello, I am </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2">Lévis </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-4">Carvalho</span>

                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                A Full Stack Developer bridging the gap between imagination and reality.
                </p>

                <div className="opacity-0 animate-fade-in-delay-4 pt-4 flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a href="#projects" className="cosmic-button mx-4">
                        Take a look at my work
                    </a>
                    <a href="#certifications" className="cosmic-button mx-4">
                        Take a look at my certifications
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <spam className="text-sm text-muted-foreground mb-2"> Scroll </spam>
            <ArrowDown className="h-5 w-5 text-primary" />

        </div>
    </section>
}