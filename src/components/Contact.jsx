import "./Contact.css";
function Contact() {
    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">Contact Me</h2>
            <p >Feel free to reach out to me!</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit" className="submit-btn">
                    Send Message
                </button>
            </form>
        </section>
    
    )
    
}

export default Contact