import React, { useState } from "react";
import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
  Toast,
} from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";

const UploadBook = () => {
  const bookCatogoies = [
    "Action and Adventure",
    "Anthology",
    "Classic",
    "Comic and Graphic Novel",
    "Crime and Detective",
    "Drama",
    "Fable",
    "Fairy Tale",
    "Fan-Fiction",
    "Fantasy",
    "History",
    "Horror",
    "Humor",
    "Legend",
    "Magical Realism",
    "Mystery",
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Short Story",
    "Suspense/Thriller",
    "Biography",
    "Autobiography",
    "Essay",
    "Narrative Nonfiction",
    "Memoir",
    "Poetry",
    "Speech",
    "Play",
    "Science Fiction",
  ];
  const [showToast, setShowToast] = useState(false);
  const [selectedCatogory, setSelectedCatogory] = useState(bookCatogoies[0]);
  const handleChangeSelect = (e) => {
    setSelectedCatogory(e.target.value);
  };

  //handle book upload
  const handleUpload = async (e) => {
    e.preventDefault();
    const bookTitle = e.target.bookTitle.value;
    const authorName = e.target.authorName.value;
    const imageURL = e.target.imageURL.value;
    const catogory = e.target.catogory.value;
    const bookDescription = e.target.bookDescription.value;
    const bookPDFURL = e.target.bookPDFURL.value;

    const book = {
      bookTitle,
      authorName,
      imageURL,
      catogory,
      bookDescription,
      bookPDFURL,
    };

    fetch("http://localhost:5001/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Book Uploaded Successfully");
          setShowToast(true); // 显示 Toast
          setTimeout(() => setShowToast(false), 3000);
          e.target.reset();
        } else {
          console.log("Failed to upload book");
        }
      })
      .catch((error) => {
        console.log("Error uploading book:", error);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form
        onSubmit={(e) => handleUpload(e)}
        className="flex lg:w-[980px] flex-col flex-wrap gap-4"
      >
        {/* 1st row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            {/* bookTitle */}
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Book Title"
              required
            />
          </div>
          {/* authorName */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name="authorName"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              name="imageURL"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="catogory" value="catogory" />
            </div>
            <Select
              id="catogory"
              name="catogory"
              className="w-full rounded"
              value={selectedCatogory}
              onChange={handleChangeSelect}
            >
              {bookCatogoies.map((catogory, index) => (
                <option key={index} value={catogory}>
                  {catogory}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="bookDescription" />
          </div>
          <Textarea
            id="bookDescription"
            row={6}
            name="bookDescription"
            placeholder="bookDescription"
            required
            className="w-full"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="bookPDFURL" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            name="bookPDFURL"
            placeholder="bookPDFURL"
            required
          />
        </div>
        <Button type="submit" className="bg-blue-700 text-white mt-5">
          Upload Book
        </Button>
      </form>
      {showToast && (
                <div className="toast fixed top-1 right-1">
                    <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
                    <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
                </div>
            )}
    </div>
  );
};

export default UploadBook;
