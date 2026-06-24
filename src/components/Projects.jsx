import "./Projects.css"
function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="project-title">My Projects</h2>
            <div className="project-grid">
                        <div className="project-card">
                        <h3>Project One</h3>
                         <p>A web application that allows users to track their tasks and deadlines.</p>
                             <a href="#">View on GitHub</a>
                        </div>
               
            
                 
                    <div className="project-card">
                        <h3>Project Two</h3>
                        <p>A social media platform for sharing photos and connecting with friends.</p>
                            <a href="#">View on GitHub</a>
                    </div>
                   
                
                      
                    <div className="project-card">
                        <h3>Project Three</h3>
                         <p>An e-commerce website for buying and selling handmade crafts.</p>
                             <a href="#">View on GitHub</a>
                    </div>
                </div>  
                
            
            
        </section>
    )
}

export default Projects