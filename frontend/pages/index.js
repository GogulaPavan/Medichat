import { useState } from "react";
import Button from "../components/Button";
import Select from "../components/Select";
import Card from "../components/Card";

export default function Home() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const services = ["Doctor Consultation", "Lab Test Booking", "Pharmacy Order"];

  const handleStartChat = () => {
    setStep(1);
    setShowDropdown(true);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setShowDropdown(false);
    setTimeout(() => {
      setStep(2);
    }, 1000);
  };

  const handleAnotherService = (choice) => {
    if (choice === "yes") {
      setStep(1);
      setShowDropdown(true);
    } else {
      setStep(3);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Card title="MediChat - Smart Hospital Bot">
        {step === 0 && <Button text="Say Hi" onClick={handleStartChat} />}
        {showDropdown && (
          <Select options={services} onChange={handleServiceSelect} />
        )}
        {step === 2 && (
          <div>
            <p className="mb-2">You selected: {selectedService}</p>
            <p>Would you like to choose another service?</p>
            <div className="mt-2">
              <Button text="Yes" onClick={() => handleAnotherService("yes")} />
              <Button text="No" onClick={() => handleAnotherService("no")} />
            </div>
          </div>
        )}
        {step === 3 && <p>Thank you! - MediChat</p>}
      </Card>
    </div>
  );
}
