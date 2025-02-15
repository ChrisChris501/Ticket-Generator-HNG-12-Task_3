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
    <div className="min-h-screen flex items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-2xl bg-[#041E23] p-6 sm:p-10 rounded-lg shadow-lg border border-[#166270]">
        <div className="bg-[#052228] p-10 rounded-2xl  border border-[#166270]">
          <h2 className="text-3xl font-light mb-6 text-white text-center sm:text-left relative after:content-[''] after:block after:h-[3px] after:w-full after:bg-[linear-gradient(to_right,#145F6C_50%,#093239_50%)] after:mt-3">
            Ticket Selection
          </h2>

          {/* Event Details */}
          <div className="bg-[#0C353E]  border border-[#166270] px-10 py-6 mx-4 text-center rounded-2xl">
            <h1 className="text-lg font-bold text-white">Techember Fest ’25</h1>
            <p className="text-white p-2">
              Join us for an unforgettable experience! Secure your spot now.
            </p>
            <p className="text-white">📍 Lagos, Nigeria</p>
            <p className="text-white">March 15, 2025 | 7:00 PM</p>
          </div>

          <div className="mt-6 space-y-4">
            <p className="block text-white font-semibold">Select Ticket Type:</p>
            <div className="flex flex-col space-y-3">
              <button
                type="button"
                onClick={() => handleTicketSelection("Regular")}
                className={`block w-full text-center px-6 py-3 rounded-lg border ${
                  formData.ticketType === "VIP"
                    ? "bg-[#24A0B5] text-white border-[#166270]"
                    : "bg-transparent text-[#24A0B5] border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white"
                } transition`}
              >
                REGULAR ACCESS {/* 20 left */} <h3>Free</h3>
              </button>
              <button
                type="button"
                onClick={() => handleTicketSelection("VIP")}
                className={`block w-full text-center px-6 py-3 rounded-lg border ${
                  formData.ticketType === "VIP"
                    ? "bg-[#24A0B5] text-white border-[#166270]"
                    : "bg-transparent text-[#24A0B5] border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white"
                } transition`}
              >
                VIP ACCESS
                <h3>$50</h3>
              </button>

              <button
                type="button"
                onClick={() => handleTicketSelection("VVIP")}
                className={`block w-full text-center px-6 py-3 rounded-lg border ${
                  formData.ticketType === "VVIP"
                    ? "bg-[#24A0B5] text-white border-[#166270]"
                    : "bg-transparent text-[#24A0B5] border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white"
                } transition`}
              >
                VVIP ACCESS
                <h3>$150</h3>
              </button>
            </div>
          </div>

          {/* Number of Tickets */}
          <div className="mt-6">
            <label className="block text-white">
             Number of Tickets:
              <select
                value={formData.numberOfTickets}
                onChange={(e) =>
                  setFormData({ ...formData, numberOfTickets: Number(e.target.value) })
                }
                className="w-full p-2 rounded bg-[#0C353E] text-white border border-[#24A0B5]"
                required
              >
                <option value="" disabled>Select a number</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
          ))}
        </select>
      </label>
  </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-4 px-8 rounded-3xl bg-[#041E23] border border-[#166270]" >
            <button
              type="button"
              className="w-full sm:w-auto text-center bg-transparent text-[#24A0B5] p-2 rounded-lg border border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-[#24A0B5] text-white p-2 rounded-lg border border-[#166270] hover:bg-[#1c8a9f] transition"
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
