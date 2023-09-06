import { useEffect, useState } from "react";
import {Jumbotron} from "../Components/Components";
import { projects } from "../Data/ComponentData";
import Projects from "../Sections/Projects";
import { Globals } from "../Data/Globals";


export const ProjectsPage =() => {

    const [{loading, cartegories}, setCartegories] = useState({loading: false, data: {}});
    // const [{projects}, setProjects] = useState({loading: true, data: {}});
    // const fetchData = async ()=>{
    //     var response;
    //     setCartegories({loading: true, cartegories: response});
    //     try {
    //         response = await fetch(Globals.getCartegories, {
    //             method: 'GET', // HTTP method
    //             headers: {
    //               'Origin': Globals.origin, // Your website's origin
    //               'Access-Control-Request-Method': 'GET', 'Access-Control-Request-Headers': 'Authorization',},
    //           });
    //         console.log({response});
    //         setCartegories({loading: false, cartegories: response});
    //     } catch (error) {
            
    //     }
        
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [''])
    
    return (
        
        <>
            <Jumbotron 
                page='Projects' 
                id='projects'
                title='Our Projects' 
                heading='Responsive & functional Software.' 
            />
            {loading && <>
                <div className="alert alert-warning rounded-3">
                    Loading
                </div>
            </>}
            { !loading && <div className="bg-white pt-5 pb-5">
                <div className="container">
                   
                   <div className="mt-5">
                       <Projects 
                            wrapper='Web App' 
                            title='Web' 
                            content='Web Application'
                            projects={projects}/>
                   </div>

                   <div className="mt-5">
                        <Projects 
                            wrapper='Mobile App' 
                            title='Mobile' 
                            content='Mobile Application'
                            projects={projects}/>
                   </div>

                   <div className="mt-5">
                        <Projects 
                            wrapper='Destop App' 
                            title='Desktop' 
                            content='Destop Application'
                            projects={projects}/>
                   </div>

                   <div className="mt-5">
                        <Projects 
                            wrapper='Python Software' 
                            title='Python' 
                            content='Python Software'
                            projects={projects}/>
                   </div>

                   <div className="mt-5">
                        <Projects 
                            wrapper='Data Analysis' 
                            title='Analysis' 
                            content='Data Analysis'
                            projects={projects}/>
                   </div>

                </div>
            </div>}
        </>
    );
}