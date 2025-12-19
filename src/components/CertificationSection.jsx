import { ExternalLink } from "lucide-react"; // Importe o ícone

const certificates = [
    {
        id: 1,
        title: "Global Networking & Infrastructure",
        institution: "Descomplica Faculdade Digital",
        technologies: ["TCP/IP", "Network Infrastructure", "Network Security", "Routing", "Cloud Basics"],
        date: "2025",
        hours: "160h",
        credentialUrl: "https://certificados.descomplica.com.br/graduacao/642ec26c69bdfba3647f117b1ded9f34c8cb76a848096ddddd7dbc4b09da83f9"
    },
    {
        id: 2,
        title: "Mobile Application Development",
        institution: "Descomplica Faculdade Digital",
        technologies: ["Mobile Development", "React Native", "iOS & Android", "Expo", "Mobile UI/UX"],
        date: "2025",
        hours: "160h",
        credentialUrl: "https://certificados.descomplica.com.br/graduacao/3d0c9679bc5102ab9ee9822137512beea09e49f89d30fd95fb4f2c2e4e09e972"
    },
    {
        id: 3,
        title: "Smart Data Structures & Algorithms",
        institution: "Descomplica Faculdade Digital",
        technologies: ["Data Structures", "Algorithms", "Code Optimization", "DevOps Culture", "Big O Notation"],
        date: "2025",
        hours: "240h",
        credentialUrl: "https://certificados.descomplica.com.br/graduacao/eec62986164b82caace55c7951ec9415ea5b982660a40cd8ae98ea79efad390c"
    },
    {
        id: 5,
        title: "The Complete Full-Stack Web Development Bootcamp",
        institution: "The App Brewery | Dr. Angela Yu",
        technologies: ["Full-Stack Development", "React.js", "Node.js", "REST APIs", "MongoDB"],
        date: "2025",
        hours: "61.5h",
        credentialUrl: "https://www.udemy.com/certificate/UC-0cee606d-d94a-4132-9258-0a14a2e06fa5/"
    },
    {
        id: 6,
        title: "Local Area Networks (LAN) & Hardware",
        institution: "Descomplica Faculdade Digital",
        technologies: ["LAN Architecture", "Network Configuration", "Hardware Maintenance", "Cabling Standards", "IT Support"],
        date: "2025",
        hours: "240h",
        credentialUrl: "https://certificados.descomplica.com.br/graduacao/8b5075432165801753fc137e7a40878388e3b28cf3d6a077507b63621bdce413"
    },
    {
        id: 7,
        title: "Fundamentals of Programming",
        institution: "Descomplica Faculdade Digital",
        technologies: ["Programming Logic", "Algorithms", "Clean Code", "Computational Thinking", "Flowcharts"],
        date: "2024",
        hours: "160h",
        credentialUrl: "https://certificados.descomplica.com.br/graduacao/e3064416a1666455ad9643c0e5893b90d0c42df80affe6bf5caf90bb77ff8a89"
    },
    {
        id: 8,
        title: "User Experience (UX) Design",
        institution: "Descomplica Faculdade Digital",
        technologies: ["UX Design", "Usability Testing", "Prototyping", "Wireframing", "Design Thinking"],
        date: "2024",
        hours: "240h",
        credentialUrl: "https://certificados.descomplica.com.br/graduacao/a8767c10384116a99609c070c98fef71d14686e5b84f58ebeb9eb1027c64b0f1"
    },
    {
        id: 9,
        title: "Database Development & Architecture",
        institution: "Descomplica Faculdade Digital",
        technologies: ["SQL", "NoSQL", "Data Modeling", "Relational Databases", "Query Optimization"],
        date: "2024",
        hours: "160h",
        credentialUrl: "https://certificados.descomplica.com.br/graduacao/39bc62bbcd69c4c633940a4649e6f097657d153a16a6e71d82cb31e2a944c8fd"
    },
    {
        id: 10,
        title: "Object-Oriented Programming & Architecture",
        institution: "Descomplica Faculdade Digital",
        technologies: ["OOP", "Design Patterns", "Software Architecture", "SOLID Principles", "UML"],
        date: "2024",
        hours: "240h",
        credentialUrl: "https://certificados.descomplica.com.br/graduacao/8ba8bb0c7d9070d84615022d90b2128d755b47b74301d10b9b0d30eb1c2e4dd3"
    },
    {
        id: 11,
        title: "Java + Angular Fullstack Bootcamp",
        institution: "Santander Universidades",
        technologies: ["Java", "Angular", "Spring Boot", "TypeScript", "Backend Development"],
        date: "2023",
        hours: "115h",
        credentialUrl: "https://hermes.dio.me/certificates/2EDE81D8.pdf"
    }
];

export const CertificationSection = () => {
    return (
        <section className="py-12 relative" id="certifications">
            <h2 className="text-3xl font-bold text-center mb-8">
                My <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto px-4">
                Just as a puzzle is never truly finished, my learning journey is continuous. Each certification represents a new <strong className="text-primary">piece of knowledge</strong>, expanding my ability to build better, smarter, and more scalable solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
                {certificates.map((cert) => (
                    <div key={cert.id} className="bg-card p-6 rounded-lg shadow-sm border hover:border-primary transition-all duration-300 group">

                        {/* Cabeçalho do Card */}
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex-1 mr-2">
                                <h3 className="font-semibold text-lg leading-tight mb-1">{cert.title}</h3>
                                <p className="text-sm text-muted-foreground">{cert.institution}</p>
                            </div>

                            {/* Link para o PDF (Ícone) */}
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    title="View Certificate"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>

                        {/* Detalhes: Data e Horas */}
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 font-mono">
                            <span className="bg-secondary px-2 py-1 rounded">{cert.date}</span>
                            <span>•</span>
                            <span className="text-primary font-medium">{cert.hours}</span>
                        </div>

                        {/* Tecnologias */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {cert.technologies.map(tech => (
                                <span key={tech} className="text-xs border px-2 py-1 rounded-full bg-background/50 text-foreground/80">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}