import { ArrowRight } from "lucide-react"
import { Github } from "lucide-react"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "TinDog Project",
        description: "Responsive landing page of a dog dating app, created with HTML, CSS, and Bootstrap 5 for portfolio showcase.",
        image: "/projects/project1.jpeg",
        tags: ["frontend", "html", "css", "bootstrap"],
        demoUrl: "#",
        githubUrl: "https://github.com/carvalholevis/TinDog-Project",
    },
    {
        id: 2,
        title: "Dice Game",
        description: "Interactive web dice game where two players compete by rolling dice and accumulating points, built with HTML, CSS, and JavaScript.",
        image: "/projects/project2.jpeg",
        tags: ["frontend", "javascript", "game"],
        demoUrl: "#",
        githubUrl: "https://github.com/carvalholevis/dice-game",
    },
    {
        id: 3,
        title: "The Drum Kit",
        description: "Virtual drum kit playable via clicks or keyboard keys, demonstrating DOM manipulation and interactive web design with JavaScript.",
        image: "/projects/project3.jpeg",
        tags: ["frontend", "javascript", "interactive"],
        demoUrl: "#",
        githubUrl: "https://github.com/carvalholevis/The-Drum-Kit",
    },
    {
            id: 4,
            title: "WhatsApp Web Clone",
            description: "Web interface clone inspired by WhatsApp Web, built to practice layout, UI replication, and front-end structure using modern web technologies.",
            image: "/projects/project4.jpeg",
            tags: ["frontend", "html", "css", "javascript"],
            demoUrl: "#",
            githubUrl: "https://github.com/carvalholevis/WhatsAppWeb-Clone",
    },
    {
        id: 5,
        title: "CRM - Gestão de Clientes",
        description: "Customer Relationship Management system built with Django to manage clients, interactions, and data efficiently for CA Design de Interiores.",
        image: "/projects/project5.jpeg",
        tags: ["fullstack", "django", "python"],
        demoUrl: "#",
        githubUrl: "https://github.com/carvalholevis/CRM-Gestao-de-Clientes",
    },
    {
        id: 6,
        title: "CarvalhoLevis Host",
        description: "Static website built with HTML and CSS, serving as a showcase or landing page, ideal for demonstrating front-end skills.",
        image: "/projects/project6.jpeg",
        tags: ["frontend", "html", "css"],
        demoUrl: "#",
        githubUrl: "https://github.com/carvalholevis/CarvalhoLevis-Host",
    },
    {
        id: 7,
        title: "Naturalis WebSite",
        description: "Modern landing page for the Naturalis Store, developed in Angular 15 with TypeScript, HTML, and CSS, demonstrating component-based front-end development.",
        image: "/projects/project7.jpeg",
        tags: ["frontend", "angular", "typescript"],
        demoUrl: "#",
        githubUrl: "https://github.com/carvalholevis/angular-naturalis2",
    }
];


export const ProjectSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From the warm roots of Bahia to the complex logic of the web, I view software development as an Infinite Puzzle. Every line of code is a piece that fits into the bigger picture of solving real-world problems. Here is a collection of the solutions I've pieced together so far.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice().sort((a, b) => b.id - a.id).map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 mx-1 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex justify-end items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/carvalholevis" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                    Take a look at my Github <ArrowRight size={16} />
                </a>

            </div>

        </div>


    </section>
}