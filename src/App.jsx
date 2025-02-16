import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import TicketForm from "./Components/TicketForm";
import TicketConfirmation from "./Components/TicketConfirmation";
import Ticket from "./Components/Ticket";

function App() {
  return (
    <Router>
      <div className="App bg-[#02191D] min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Ticket />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/TicketForm" element={<TicketForm />} />
          <Route path="/TicketConfirmation" element={<TicketConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
