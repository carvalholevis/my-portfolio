import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { CertificationSection } from "../components/CertificationSection"

export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Background Effects (Starting here)*/}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <CertificationSection />
            <ProjectSection />
            <ContactSection />
        </main>
        {/* Footer */}
        <Footer />
    </div>
}