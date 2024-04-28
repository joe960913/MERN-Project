"use client";

import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const handleDeleteBook = (id) => {
    fetch(`http://localhost:5001/book/${id}`, {
      method: "DELETE",
    }).then(() => {
      alert("Book deleted successfully");
      window.location.reload();
    });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Books</h2>
      <div>
        <div className="overflow-x-auto">
          <Table className="lg:w-[980px]">
            <Table.Head>
              <Table.HeadCell>No.</Table.HeadCell>
              <Table.HeadCell>Book Title</Table.HeadCell>
              <Table.HeadCell>Author Name</Table.HeadCell>
              <Table.HeadCell>category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit Or Manage</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {books.map((book, index) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={index}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index}
                  </Table.Cell>
                  <Table.Cell>{book.bookTitle}</Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>$10</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/admin/dashboard/edit-book/${book._id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    >
                      Edit
                    </Link>
                    {/* delete book by id */}
                    <button
                      className="font-semibold rounded bg-red-600 px-4 py-1 text-white hover:bg-cyan-600 transition-all ease-in duration-100"
                      onClick={() => handleDeleteBook(book._id)}
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageBook;
