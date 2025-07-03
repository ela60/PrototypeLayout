"use client";
import { useState } from "react";
import { NextPage } from "next";

type PlanType = "Regular" | "Platinum" | "Enterprise";

const plans = [
  {
    name: "Regular",
    price: 99.99,
    description: "Price for 1-50 unit",
    autoPay: true,
  },
  {
    name: "Platinum",
    price: 129.99,
    description: "Price for 1-50 unit",
    autoPay: false,
  },
  {
    name: "Enterprise",
    price: 199.99,
    description: "Price for 1-50 unit",
    autoPay: false,
  },
];

const cards = [
  { id: "1", name: "Alex Jones (Amex card)", masked: "****9655" },
  { id: "2", name: "Alex Jones (Amex card)", masked: "****9265" },
  { id: "3", name: "Alex Jones (Amex card)", masked: "****9565" },
];

const PlanPage: NextPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("Regular");
  const [selectedCard, setSelectedCard] = useState<string>("1");
  const [showModal, setShowModal] = useState(false);

  const totalCharge =
    plans.find((plan) => plan.name === selectedPlan)?.price ?? 0;

  return (
    <div className="min-h-screen bg-white p-6 text-[#272B35] relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-[#E0E0E0]">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="RentYard Logo" className="h-6 w-auto" />
        </div>
        <button className="text-gray-600 hover:text-gray-800 rounded shadow px-4 py-2">
          Save & Exit
        </button>
      </div>

      <div className="p-6 rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-4">
          Choose a plan after 30-days free trial
        </h2>

        {/* Billing frequency */}
        <div className="flex gap-2 mb-4">
          <button className="bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded">
            Monthly
          </button>
          <button className="text-gray-700 border px-3 py-1 rounded text-sm">
            Annually (save 57%)
          </button>
        </div>

        {/* Plan Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => {
                setSelectedPlan(plan.name as PlanType);
                setShowModal(true);
              }}
              className={`border rounded-md p-4 cursor-pointer ${
                selectedPlan === plan.name
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.autoPay && (
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                    Auto Pay
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold">
                ${plan.price.toFixed(2)}
                <span className="text-sm font-normal text-gray-600">/mo</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
            </div>
          ))}
        </div>

        {/* Payment Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-md font-semibold mb-2">Payment option</h3>
            <div className="text-right mt-2">
              <button className="text-sm text-blue-600 underline hover:underline">
                Add new card
              </button>
            </div>
          </div>
          <div className="border border-[#E0E0E0] rounded-md divide-y divide-[#E0E0E0]">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex items-center justify-between p-4"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <span className="flex items-center gap-1 pointer-events-none text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v1H3V6a2 2 0 012-2h1V3a1 1 0 011-1zM3 8h14v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 100 2h4a1 1 0 100-2H8z" />
                    </svg>
                    {card.name} {card.masked}
                  </span>
                </label>

                <button className="text-blue-600 border border-blue-600 rounded shadow px-3 py-1 font-medium text-sm hover:bg-blue-50">
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8 border-t-2 border-black pt-6">
        <button className="text-sm text-gray-600 underline hover:text-gray-800">
          Back
        </button>
        <div className="flex items-center gap-6">
          <p className="font-medium">
            Total with card charge:{" "}
            <span className="text-black">${totalCharge.toFixed(0)}</span>
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
            Pay & add property
          </button>
        </div>
      </div>

    {showModal && (
  <div className="fixed inset-0 flex bg-opacity-50 items-center justify-center z-50">

    <div
      className="bg-white rounded-lg shadow-lg relative flex flex-col p-6"
      style={{ width: "780px", height: "380px" }}
    >
      {/* Modal header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Add a new card</h3>
        <button
          onClick={() => setShowModal(false)}
          className="text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
      </div>

      {/* Card form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
  <div>
    <label className="text-sm mb-1 block">Name on card</label>
    <input
      type="text"
      placeholder="Full name"
      className="w-full border border-[#E0E0E0] rounded px-3 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div>
    <label className="text-sm mb-1 block">Card number</label>
    <input
      type="text"
      placeholder="0000 0000 0000 0000"
      className="w-full border border-[#E0E0E0] rounded px-3 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div>
    <label className="text-sm mb-1 block">Expiry date</label>
    <input
      type="text"
      placeholder="MM/YY"
      className="w-full border border-[#E0E0E0] rounded px-3 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>
  <div>
    <label className="text-sm mb-1 block">CVC</label>
    <input
      type="text"
      placeholder="123"
      className="w-full border border-[#E0E0E0] rounded px-3 py-2 focus:outline-none focus:border-blue-500"
    />
  </div>
</div>

<div className="text-right mt-2">
  <button
    onClick={() => setShowModal(false)}
    className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700"
  >
    Save
  </button>
</div>

    </div>
  </div>
)}

    </div>
  );
};

export default PlanPage;
