import { useState } from "react";
import "./FloatingWhatsApp.css";

const plans = [
  { name: "Basic", price: "₦1,500" },
  { name: "Premium", price: "₦2,500" },
  { name: "Express", price: "₦3,500" },
];

const whatsappNumber = "2347070670152"; // replace with your WhatsApp number

const FloatingWhatsApp = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleConfirm = () => {
    if (selectedPlan) {
      const message = `Hi! I want to place an order for the *${selectedPlan.name}* plan (${selectedPlan.price}). Please confirm pickup time.`;
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
      setModalOpen(false);
      setSelectedPlan(null);
    }
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <button className="floating-whatsapp" onClick={handleClick}>
        💬 WhatsApp
      </button>

      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Select a Plan</h3>
            <p>Choose the plan you want to book via WhatsApp:</p>
            <div className="plan-options">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  className={`plan-btn ${selectedPlan?.name === plan.name ? "selected" : ""}`}
                  onClick={() => handleSelectPlan(plan)}
                >
                  {plan.name} - {plan.price}
                </button>
              ))}
            </div>
            <div className="modal-buttons">
              <button className="btn-confirm" onClick={handleConfirm} disabled={!selectedPlan}>
                Confirm & WhatsApp
              </button>
              <button className="btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
