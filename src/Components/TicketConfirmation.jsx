import React from "react";
import { useNavigate } from "react-router-dom";
import TicketImage from "../assets/Ticket.png";

const TicketConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 border rounded-3xl border-[#166270]">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl  border border-[#166270] text-center">
        <div className="bg-[#041E23] p-6 sm:p-10 rounded-2xl">
          <div className="grid grid-cols-2 items-center relative">
            <h2 className="text-xl sm:text-2xl font-light mb-2">Ready</h2>
            <h5 className="text-right">Step 3/3</h5>
            <div className="absolute bottom-0 left-0 w-full h-[3px] mb-2">
              <div className="w-1/2 h-full bg-[#145F6C] inline-block"></div>
              <div className="w-1/2 h-full bg-[#093239] inline-block"></div>
            </div>
          </div>
          <div>
              <h2 className="mt-3 text-2xl font-semibold">Your Ticket is Booked!</h2>
              <p className="text-white text-sm mt-5">You can download or check your email for a copy.</p>
              <img src={TicketImage} alt="Ticket" className="w-90 h-45 rounded-lg shadow-lg my-10" />
              </div>
          <div className="grid grid-cols-2 gap-4 mt-6 px-6 sm:px-8 rounded-3xl bg-[#041E23] border border-[#166270]">
            <button type="button" className="w-full sm:w-auto bg-transparent text-[#24A0B5] p-2 rounded-lg border border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition" onClick={() => navigate("/Ticket")}>Book Another Ticket</button>
            <button type="submit" className="w-full sm:w-auto bg-[#24A0B5] text-white p-2 rounded-lg border border-[#166270] hover:bg-[#1c8a9f] transition"
             onClick={() => navigate("/TicketConfirmation")}>Download Ticket</button>
          </div>
      </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
