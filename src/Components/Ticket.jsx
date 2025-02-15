import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ticketType: "",
    numberOfTickets: 1,
  });

  const handleTicketSelection = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      ticketType: type,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.ticketType || formData.numberOfTickets < 1) {
      alert("Please select a ticket type and enter a valid number of tickets.");
      return;
    }

    navigate("/TicketForm", { state: formData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-full sm:max-w-lg lg:max-w-4xl bg-[#041E23] p-6 sm:p-8 rounded-lg shadow-lg border border-[#166270] my-2">
        <div className="bg-[#08252B] p-6 sm:p-10 rounded-2xl border border-[#166270]">
        <div className="font-light mb-6 text-white text-center sm:text-left">
          <div className="grid grid-cols-2 items-center relative">
            <h2 className="text-2xl sm:text-2xl mb-2">Ticket Selection</h2>
            <h5 className="text-right">Step 1/3</h5>
            <div className="absolute bottom-0 left-0 w-full h-[3px] mb-2">
              <div className="w-1/3 h-full bg-[#145F6C] inline-block"></div>
              <div className="w-2/3 h-full bg-[#093239] inline-block"></div>
            </div>
          </div>
    </div>
          <div className="bg-[#0C353E] border border-[#166270] px-6 sm:px-10 py-4 sm:py-6 mx-2 sm:mx-4 text-center rounded-2xl">
            <h1 className="font-bold text-white text-3xl leading-tight">Techember Fest ’25</h1>

            <p className="text-white text-sm sm:text-base mb-3">
              Join us for an unforgettable experience! Secure your spot now.
            </p>
            < p className="text-white text-sm">📍 [Event location] || March 15, 2025 | 7:00 PM </p>
          </div>

<div className="mt-6 space-y-4">
  <p className="block font-semibold ">Select Ticket Type:</p>
  <div className="bg-[#052228] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg border border-[#166270]">
    {[
      { type: "Regular", price: "Free", numLeft: "20 left" },
      { type: "VIP", price: "$50", numLeft: "20 left" },
      { type: "VVIP", price: "$150", numLeft: "20 left" },
    ].map(({ type, price, numLeft }) => (
      <button
        key={type}
        type="button"
        onClick={() => handleTicketSelection(type)}
        className={`px-2 rounded-lg border transition text-sm sm:text-base ${
          formData.ticketType === type
            ? "bg-[#24A0B5] border-[#166270]"
            : "bg-transparent border-[#24A0B5] hover:bg-[#24A0B5]"
        }`}
      >
        <div className="grid grid-cols-2 gap-2 mt-2 text-sm sm:text-base">
          <span className="">{type} ACCESS</span>
          <span className=" bg-[#0E464F] border border-[#24A0B5] px-3 sm:px-2 py-2 rounded ">
            {price}
          </span>
        </div>
        <p className="text-[16px] sm:text-[12px] text-left pl-2">{numLeft}</p>
      </button>
    ))}
  </div>
</div>

          <div className="mt-6">
            <label className="block text-white text-sm sm:text-base">
              Number of Tickets:
              <select
                value={formData.numberOfTickets}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfTickets: Number(e.target.value) })
                }
                className="w-full p-2 rounded bg-[#0C353E] text-white border border-[#24A0B5] mt-2"
                required
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6 px-6 sm:px-8 rounded-3xl bg-[#041E23] border border-[#166270]">
            <button
              type="button"
              className="w-full text-sm sm:text-base bg-transparent text-[#24A0B5] p-2 rounded-lg border border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full text-sm sm:text-base bg-[#24A0B5] text-white p-2 rounded-lg border border-[#166270] hover:bg-[#1c8a9f] transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
