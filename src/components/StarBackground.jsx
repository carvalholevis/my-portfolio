import { GitPullRequestCreateArrowIcon } from "lucide-react"
import { useEffect } from "react"
import { useState } from "react"

// the stars will have: id, size, x, y, opacity, animationDuration
// the meteors will have: id, size, x, y, delay, animationDuration

export const StarBackground = () => {

        const [stars, setStars] = useState([])
        const [meteors, setMeteors] = useState([])

        useEffect(() => {
            generateStars();
            generateMeteors();

            const handleResize = () => {
                generateStars()
            };

            window.addEventListener('resize', handleResize)

            return () => window.removeEventListener('resize', handleResize)
        }, []);

        const generateStars = () => {
            const numberOfStars = Math.floor(
                (window.innerWidth * window.innerHeight) / 10000);

            const newStars = []

            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id:i,
                    size: Math.random() * 2 + 0.5,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.3,
                    animationDuration: Math.random() * 4 + 2,
                })
            }

            setStars(newStars);

        }

        const generateMeteors = () => {
            const numberOfMeteors = 5;

            const NewMeteors = [];

            for (let i = 0; i < numberOfMeteors; i++) {
                NewMeteors.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 50 - 20,
                    delay: Math.random() * 10,
                    animationDuration: Math.random() * 2 + 3,
                })
            }

            setMeteors(NewMeteors);

        }


    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
                }}></div>
        )
        
        )}

        {meteors.map((meteor) => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                left: meteor.x + "%",
                top: meteor.y + "%",
                opacanimatioDelay: meteor.delay + "s",
                animationDuration: meteor.animationDuration + "s",
                }}></div>
        )
        
        )}

    </div>
}