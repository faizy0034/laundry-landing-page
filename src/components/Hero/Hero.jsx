import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
     <div className="hero-content fade-in">

        {/* Trust badge */}
        <div className="badge">
          🚚 Free Pickup & Delivery
        </div>

        <h1>
          Fresh Laundry, <span>Done Right</span>
        </h1>

       <p>
  Affordable and professional laundry services for students and busy
  individuals around <strong>EKSU & Ado-Ekiti</strong>.  
  We wash, iron, and deliver your clothes clean and fresh.
</p>


        {/* Quick highlights */}
        <div className="highlights">
          <span>✔ Same-Day Service</span>
          <span>✔ Neat Ironing</span>
          <span>✔ Trusted by Students</span>
        </div>

        {/* CTA buttons */}
        <div className="hero-buttons">
          <a
            href="https://wa.me/2347070670152"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Book on WhatsApp
          </a>

          <a href="#services" className="btn secondary">
            View Services
          </a>
          <p className="hero-note">
  ⏱ Same-day service available • Pickup & delivery included
</p>

        </div>
      </div>

     
    </section>
  );
};

export default Hero;
