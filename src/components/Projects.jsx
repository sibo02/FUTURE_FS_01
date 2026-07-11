import "./Projects.css"
function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="project-title">My Projects</h2>
            <div className="project-grid">
                        <div className="project-card">
                        <h3>Advice Generator App</h3>
                         <p>A web application that allows users to generate random advice.</p>
                             <a href="https://github.com/sibo02/advice-generator">View on GitHub</a>
                        </div>
               
            
                 
                    <div className="project-card">
                        <h3>Rock Paper Scissors</h3>
                        <p>A simple game where players can play rock, paper, scissors against the computer.</p>
                            <a href="https://github.com/sibo02/rock-paper-scissors">View on GitHub</a>
                    </div>
                   
                
                      
                    <div className="project-card">
                        <h3>Intro Component With Sign Up Form</h3>
                         <p>A responsive intro component with a sign-up form.</p>
                             <a href="https://github.com/sibo02/intro-component">View on GitHub</a>
                    </div>
                </div>  
                
            
            
        </section>
    )
}

export default Projects