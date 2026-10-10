// src/pages/Book.jsx
import React, { useState, useEffect } from "react";
import booksData from "../utils/books";
import styles from "../styles/book.module.css";

function Book() {
  const [booksList, setBooksList] = useState([...booksData]);

  useEffect(() => {
    console.log("Komponen Book telah dimuat!");
  }, []);

  useEffect(() => {
    console.log("Daftar buku di Book diperbarui:", booksList);
  }, [booksList]);

  const handleClick = () => {
    const newBook = {
      id: booksList.length + 1,
      title: "The Lean Startup",
      desc: "Bagaimana pengusaha modern menggunakan inovasi berkelanjutan.",
      price: "Rp 125.000",
      seed: booksList.length + 1,
    };

    setBooksList((prevList) => [...prevList, newBook]);
    alert("Buku baru berhasil ditambahkan di halaman Book!");
  };

  return (
    <div className={styles.booksContainer}>
      <h1 className={styles.title}>📚 Halaman Book</h1>
      <p className={styles.subtitle}>Koleksi Buku Pilihan</p>

      <div className={styles.cardContainer}>
        {booksList.map((book) => (
          <div key={book.id} className={styles.card}>
            <img
              src={`https://picsum.photos/seed/${book.seed}/200/300`}
              alt={book.title}
            />
            <h3>{book.title}</h3>
            <p>{book.desc}</p>
            <p>Harga: {book.price}</p>
          </div>
        ))}
      </div>

      <button onClick={handleClick} className={styles.addButton}>
        ➕ Tambah Buku Baru
      </button>
    </div>
  );
}

export default Book;