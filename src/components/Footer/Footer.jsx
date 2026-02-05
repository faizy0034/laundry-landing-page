import "./Footer.css";

const Footer = () => {
  const whatsappNumber = "2347070670152"; // replace with your number
  const email = "adekunlefaizoladebayo@gmail.com";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span>🧺</span> FreshWash
        </div>

        <div className="footer-links">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi! I want to place a laundry order.`}
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>
          <a href={`mailto:${email}`}>📧 Email</a>
          <span>📍 EKSU, Ado-Ekiti, Nigeria</span>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} FreshWash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
