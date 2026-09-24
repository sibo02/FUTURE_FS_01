import "./Projects.css"
function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="project-title">My Projects</h2>
            <div className="project-grid">
                   
                      <div className="project-card">
                        <h3>Drama & Movie Watchlist</h3>

                            <p>
                              A React application where users can search for dramas and movies,
                              add them to a personal watchlist, track their status, and rate them.
                           </p>

                          <div className="project-links">
                            <a
                                href="#" 
                                target="_blank"
                                rel="noreferrer" >
                                   View on GitHub
                            </a>

                            <a
                             href="#"
                             target="_blank"
                             rel="noreferrer"
                             >
                                Live Demo
                          </a>
                        </div>
                       </div>
                        
                        <div className="project-card">
                        <h3>Weather App</h3>
                          <p>
                            A responsive weather application that allows users to search for a city
                            and view current weather information.
                          </p>

                       <div className="project-links">
                          <a
                             href="https://github.com/sibo02/Weather-app"
                             target="_blank"
                             rel="noreferrer"
                             >
                             View on GitHub
                            </a>

                          <a
                            href="#"
                           target="_blank"
                           rel="noreferrer"
                          >
                           Live Demo
                         </a>
                     </div>
                  </div>
                       <div className="project-card">
                        <h3>Advice Generator App</h3>
                         <p>A web application that allows users to generate random advice.</p>
                             <a href="https://github.com/sibo02/advice-generator" target="_blank">View on GitHub</a>
                             <a href="https://sibo02.github.io/advice-generator" target="_blank">Live Demo</a>
                        </div>
               
                 
                    <div className="project-card">
                        <h3>Rock Paper Scissors</h3>
                        <p>A simple game where players can play rock, paper, scissors against the computer.</p>
                            <a href="https://github.com/sibo02/rock-paper-scissors" target="_blank">View on GitHub</a>
                            <a href="https://sibo02.github.io/rock-paper-scissors" target="_blank">Live Demo</a>
                    </div>
                 
                      <div className="project-card">
                        <h3>Product List with Cart</h3>

                          <p>
                             A responsive e-commerce product page where users can browse products,
                             add items to a cart, update quantities, and view their order summary.
                          </p>

                       <div className="project-links">
                         <a
                           href="#"
                           target="_blank"
                           rel="noreferrer"
                           >
                             View on GitHub
                          </a>

                          <a
                           href="#"
                           target="_blank"
                           rel="noreferrer"
                           >
                            Live Demo
                           </a>
                      </div>
                    </div>
  
                   <div className="project-card">
                     <h3>Our Pricing</h3>

                        <p>
                          A responsive pricing component with an annual and monthly billing toggle
                          that dynamically updates the displayed prices.
                        </p>

                      <div className="project-links">
                        <a
                         href="#"
                         target="_blank"
                         rel="noreferrer"
                       >
                        View on GitHub
                      </a>

                      <a
                       href="#"
                       target="_blank"
                       rel="noreferrer"
                       >
                         Live Demo
                     </a>
                  </div>
                </div>

                    <div className="project-card">
                        <h3>Intro Component With Sign Up Form</h3>
                         <p>A responsive intro component with a sign-up form.</p>
                             <a href="https://github.com/sibo02/intro-component" target="_blank">View on GitHub</a>
                             <a href="https://sibo02.github.io/intro-component" target="_blank">Live Demo</a>
                    </div>
                  
                   <div className="project-card">
                    <h3>QR Code Component</h3>

                       <p>
                         A simple and responsive QR code component built with HTML and CSS,
                         focusing on clean layout, spacing, and responsive design.
                     </p>

                    <div className="project-links">
                      <a
                       href="#"
                       target="_blank"
                       rel="noreferrer"
                      >
                         View on GitHub
                     </a>

                       <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                       >
                         Live Demo
                       </a>
                    </div>
                </div>

                <div className="project-card">
                  <h3>FAQ Accordion</h3>

                    <p>
                      A responsive FAQ accordion where users can expand and collapse questions
                      to view their answers.
                    </p>

                    <div className="project-links">
                       <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        >
                           View on GitHub
                      </a>

                       <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                       >
                          Live Demo
                       </a>
                     </div>
                 </div>
                </div>  
          
            
        </section>
    )
}

export default Projects