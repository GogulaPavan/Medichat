import { useState } from "react";
import Button from "../components/Button";
import Select from "../components/Select";
import Card from "../components/Card";

export default function Home() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const services = ["Doctor Consultation", "Lab Test Booking", "Pharmacy Order", "Health Checkup"];

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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <Card title="MediChat - Smart Hospital Bot">
        {step === 0 && <Button text="Say Hi" onClick={handleStartChat} />}
        {showDropdown && (
          <div className="mt-4">
            <Select options={services} onChange={handleServiceSelect} />
          </div>
        )}
        {step === 2 && (
          <div className="mt-4">
            <p className="mb-2 text-gray-700">You selected: <strong>{selectedService}</strong></p>
            <p className="text-gray-600">Would you like to choose another service?</p>
            <div className="mt-3 flex gap-4 justify-center">
              <Button text="Yes" onClick={() => handleAnotherService("yes")} />
              <Button text="No" onClick={() => handleAnotherService("no")} />
            </div>
          </div>
        )}
        {step === 3 && <p className="text-xl font-semibold text-green-600">Thank you! - MediChat</p>}
      </Card>
    </div>
  );
}
