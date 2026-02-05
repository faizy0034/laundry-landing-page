import "./Services.css";

const servicesData = [
  {
    icon: "🧼",
    title: "Washing",
    desc: "Deep washing with quality detergents to keep your clothes fresh.",
  },
  {
    icon: "👔",
    title: "Ironing",
    desc: "Sharp and professional ironing for all your outfits.",
  },
  {
    icon: "🧥",
    title: "Dry Cleaning",
    desc: "Special care for delicate and premium fabrics.",
  },
  {
    icon: "🚚",
    title: "Pickup & Delivery",
    desc: "We pick up and deliver your clothes on time.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <p className="services-intro">
        Fast, affordable and reliable laundry services around EKSU & Ado-Ekiti.
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/234XXXXXXXXXX"
        className="services-cta"
        target="_blank"
        rel="noreferrer"
      >
        Book a Service
      </a>
    </section>
  );
};

export default Services;
