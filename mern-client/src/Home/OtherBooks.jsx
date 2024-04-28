import React from "react";
import { useState, useEffect } from "react";
import { BookCard } from "../components/BookCard";

export const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  // useEffect to fecth data from the server loacted at http://localhost:5001/all-books
  useEffect(() => {
    fetch("http://localhost:5001/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(2, 10));
      });
  }, []); // Add an empty dependency array here
  return (
    <div>
      <BookCard books={books} headline="Other Books" />
    </div>
  );
};
