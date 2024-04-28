import React, {useState, useEffect} from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
    Button,
    Label,
    Select,
    TextInput,
    Textarea,
    Toast,
  } from "flowbite-react";
  import { FaTelegramPlane } from "react-icons/fa";

const EditBook = () => {
  //根据router中的loader的配置，拿到data渲染一个表单。每个表单项都是可编辑的，最后有一个保存按钮，点击后提交表单。表单项有：bookTitle, authorName, imageURL, description, bookPDFURL，用flowbite-react来渲染。
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();
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
  const [selectedCatogory, setSelectedCatogory] = useState(bookCatogoies[0]);
  const handleChangeSelect = (e) => {
    setSelectedCatogory(e.target.value);
  };

  useEffect(() => {
    setSelectedCatogory(category);
  }, [category]);

  //handle book update
  const handleUpdate = async (e) => {
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
    // method: PATCH
    fetch(`http://localhost:5001/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
            alert("Book updated successfully");
            //link to the manage book page after 1s
            setTimeout(() => {
                window.location.href = "/admin/dashboard/manage";
            }, 1000);
        }
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update A Book</h2>
      <form
        onSubmit={(e) => handleUpdate(e)}
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
              defaultValue={bookTitle}
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
              defaultValue={authorName}
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
              defaultValue={imageURL}
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
              defaultValue={category}
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
            defaultValue={bookDescription}
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
            defaultValue={bookPDFURL}
          />
        </div>
        <Button type="submit" className="bg-blue-700 text-white mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
