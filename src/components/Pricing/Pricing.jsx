import { useState } from "react";
import "./Pricing.css";

const pricingPlans = [
  {
    name: "Basic",
    price: "₦1,500",
    features: [
      "Washing & Drying",
      "Standard Ironing",
      "Pickup & Delivery",
    ],
  },
  {
    name: "Premium",
    price: "₦2,500",
    features: [
      "Deep Washing",
      "Neat Ironing",
      "Pickup & Delivery",
      "Same-Day Service",
    ],
  },
  {
    name: "Express",
    price: "₦3,500",
    features: [
      "Priority Laundry",
      "Premium Ironing",
      "Pickup & Delivery",
      "Same-Day Service",
      "Special Care Items",
    ],
  },
];

const whatsappNumber = "234XXXXXXXXXX"; // Replace with your WhatsApp number

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBookClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleConfirm = () => {
    if (selectedPlan) {
      const message = `Hi! I want to place an order for the *${selectedPlan.name}* plan (${selectedPlan.price}). Please confirm pickup time.`;
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
      setSelectedPlan(null);
    }
  };

  const handleCancel = () => {
    setSelectedPlan(null);
  };

  return (
    <section className="pricing" id="pricing">
      <h2>Our Pricing</h2>
      <p className="pricing-intro">
        Affordable laundry plans for every need. Pick your plan and get fresh clothes today!
      </p>

      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button className="btn-pricing" onClick={() => handleBookClick(plan)}>
              Book {plan.name} Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Confirm Your Order</h3>
            <p>
              You are about to book the <strong>{selectedPlan.name}</strong> plan for{" "}
              <strong>{selectedPlan.price}</strong>.
            </p>
            <div className="modal-buttons">
              <button className="btn-confirm" onClick={handleConfirm}>
                Confirm & WhatsApp
              </button>
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
