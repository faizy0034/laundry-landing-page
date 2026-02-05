import React, { useRef, useState, useEffect } from "react";
import "./HowItWorks.css";

const steps = [
  {
    step: 1,
    title: "Schedule Pickup",
    desc: "Book your laundry pickup via WhatsApp in just 2 minutes.",
    icon: "📲",
  },
  {
    step: 2,
    title: "We Wash & Iron",
    desc: "Your clothes are washed, dried, and neatly ironed with care.",
    icon: "🧼",
  },
  {
    step: 3,
    title: "Delivery to You",
    desc: "Fresh, clean clothes delivered right to your doorstep.",
    icon: "🚚",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      className={`howitworks ${visible ? "fade-in" : ""}`}
      ref={sectionRef}
      id="howitworks"
    >
      <h2>How It Works</h2>
      <p className="how-intro">
        Getting your laundry done has never been this easy!
      </p>

      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.step}>
            <div className="step-icon">{step.icon}</div>
            <h3>
              Step {step.step}: {step.title}
            </h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
