
import About from "../Sections/About";
import Home from "../Sections/Home";
import Projects from "../Sections/Projects";
import Services from "../Sections/Services";
import { projects } from "../Data/ComponentData";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";


export function HomePage() {
    return (
        <>
            <ScrollAnimation 
                animateIn='bounceInRight'
                animateOut='bounceOutLeft'>
                <Home />
            </ScrollAnimation>
                <About />

            <Services />
            <ScrollAnimation
                animateIn='bounceInRight'
                animateOut='bounceOutLeft'
            >
            <Projects
                title='Projects'
                content={'Our Projects!'}
                wrapper='Projects'
                projects={projects}>
                <Link 
                    to='/projects' 
                    className='read-more no-decoration m-0'>
                    See More
                </Link>
            </Projects>
            </ScrollAnimation>
        </>
    );
}