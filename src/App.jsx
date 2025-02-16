import React from "react";
import { Routes, Route } from "react-router-dom";
import TicketForm from "./Components/TicketForm";
import TicketConfirmation from "./Components/TicketConfirmation";
import Ticket from "./Components/Ticket";
import "./index.css";

function App() {
  return (
    <div className="App bg-[#02191D] min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Ticket />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/ticketform" element={<TicketForm />} />
        <Route path="/ticketconfirmation" element={<TicketConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
