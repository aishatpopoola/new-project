import React from "react";
import { Routes,Route } from "react-router-dom";
import Layout from "./component/Layout";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import EventPage from "./pages/EventPage/EventPage";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/event/:id" element={<EventPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
