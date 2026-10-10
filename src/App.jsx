// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// 1. Import Layout yang sudah ada dari Tugas 2 (berisi Header & Footer)
import Layout from "./components/Layout";

// 2. Import halaman-halaman yang sudah kamu buat
import Home from "./pages/home";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="login" element={<Login />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;