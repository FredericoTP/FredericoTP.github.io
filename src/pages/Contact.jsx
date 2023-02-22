import '../style/Contact.css';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-box">
        <h2 className="contact-title">Contato</h2>
        <div className="contact-card">
          <img 
            className="contact-icon"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" alt="cel"
          />
          <p className="contact-text">(31) 99139-2481</p>
        </div>
        <div className="contact-card">
          <img
            className="contact-icon"
            src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="email"
          />
          <p className="contact-text">fredericotp@hotmail.com</p>
        </div>
        <a
          className="contact-card"
          href="https://www.linkedin.com/in/fredericotp/"
          target="_blanck"
        >
          <img 
          className="contact-icon"
          src="https://cdn-icons-png.flaticon.com/512/3536/3536569.png" alt="linkedin" />
          <p className="contact-text">Let's connect</p>
        </a>
        <a
          className="contact-card"
          href="https://github.com/FredericoTP"
          target="_blanck"
        >
          <img 
          className="contact-icon"
          src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github" />
          <p className="contact-text">Follow me</p>
        </a>
      </div>
    </div>
  )
}

export default Contact;