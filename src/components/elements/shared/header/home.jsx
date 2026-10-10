// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import booksData from "../Utils/books";
import styles from "../styles/Books.module.css";

function Home() {
  // useState untuk mengelola state daftar buku (sesuai materi Hooks)
  const [booksList, setBooksList] = useState([...booksData]);

  // useEffect untuk inisialisasi data (nilai tambah - sesuai materi Refactor useEffect)
  useEffect(() => {
    console.log("Komponen Home telah dimuat!");
  }, []);

  // useEffect untuk memantau perubahan pada booksList
  useEffect(() => {
    console.log("Daftar buku di Home diperbarui:", booksList);
  }, [booksList]);

  // Fungsi untuk menambahkan data menggunakan hooks (Poin 7)
  const handleClick = () => {
    const newBook = {
      id: booksList.length + 1,
      judul: "Deep Work",
      penulis: "Cal Newport",
      tahun: 2016,
      harga: "Rp 110.000",
      gambar: "https://via.placeholder.com/150?text=Deep+Work",
    };

    // Menambahkan buku baru ke state
    setBooksList((prevList) => [...prevList, newBook]);
    alert("Buku baru berhasil ditambahkan di halaman Home!");
  };

  return (
    <div className={styles.booksContainer}>
      <h1 className={styles.title}>🏠 Halaman Home</h1>
      <p className={styles.subtitle}>Daftar Buku Tersedia</p>

      <div className={styles.cardContainer}>
        {/* Menggunakan metode map untuk menampilkan data (Poin 6) */}
        {booksList.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src={book.gambar} alt={book.judul} />
            <h3>{book.judul}</h3>
            <p>Penulis: {book.penulis}</p>
            <p>Tahun: {book.tahun}</p>
            <p>Harga: {book.harga}</p>
          </div>
        ))}
      </div>

      {/* Button untuk menambahkan data menggunakan hooks (Poin 7) */}
      <button onClick={handleClick} className={styles.addButton}>
        ➕ Tambah Buku Baru
      </button>
    </div>
  );
}

export default Home;