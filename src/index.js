import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/Home.js";
import QueueCard from "./components/QueueCard.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav_bar from "./components/Layout.js";
import Counter from "./components/Counter.js"
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
  /* required for forms just write required bro
  phone number type change 
  complete login and login check
  photo filefield second and third
  patient info get from database and not from use navigate
  moment js for datetime in cookies
  payment
  search
  */




  
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/queue-card" element={<QueueCard />}></Route>
      <Route path="/counter" element={<Counter />}></Route>
        <Route element={<Nav_bar />}>
        <Route path="/" element={<HomePage />}></Route>
        
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
