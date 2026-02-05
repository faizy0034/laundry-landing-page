import "./Contact.css";

const Contact = () => {
  const whatsappNumber = "2347070670152"; // replace with your WhatsApp number
  const phoneNumber = "+2347070670152"; // replace with call number
  const email = "adekunlefaizoladebayo@gmail.com"; // replace with email

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Have questions or want to book directly? Reach out to us!
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>WhatsApp</h3>
          <p>Chat with us instantly</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I want to place a laundry order.")}`}
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            💬 Chat Now
          </a>
        </div>

        <div className="contact-card">
          <h3>Call</h3>
          <p>Speak directly with us</p>
          <a href={`tel:${phoneNumber}`} className="contact-btn">
            📞 Call Now
          </a>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>Send us a message</p>
          <a href={`mailto:${email}`} className="contact-btn">
            📧 Send Email
          </a>
        </div>

        <div className="contact-card">
          <h3>Location</h3>
          <p>EKSU / Ado-Ekiti, Nigeria</p>
          <a
            href="https://goo.gl/maps/your-location" // replace with Google Maps link
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            📍 View Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
