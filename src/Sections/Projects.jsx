
import ScrollAnimation from "react-animate-on-scroll";
import { Wrapper, Project, } from "../Components/Components";

function Projects({projects, wrapper, title, content, children}) {
   
    return(
       <>
            <section id="projects">
                <div className="container mt-5 mb-5">
                        <Wrapper 
                            wrapper={wrapper} 
                            title={title}
                            content={content}
                        >
                        </ Wrapper>
                        <ScrollAnimation
                            animateIn='fadeInRight'
                            animateOut='fadeOutLeft'>
                            <div className="d-flex" style={{overflowX: 'auto', overflowY: 'hidden', flexWrap: 'nowrap', zIndex: '1000', position: 'relative'}}>
                                {projects.map((project)=> <Project {...project} />)}
                            </div>
                        </ScrollAnimation>
                        {children}
                </div>
            </section>


       </>
    );
}

export default Projects;
