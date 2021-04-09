import React, { useEffect, useState } from "react";
import Nilkhet from "../../images/Nilkhet.jfif";
import "./Home.css";
import BookCart from "../BookCart/BookCart";
import { CircularProgress } from "@material-ui/core";
const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/events")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  console.log(book);
  return (
    <>
      {/* <div>
        <input type="file" />
      </div> */}
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Nilkhet})`,
        }}
        className="background"
      >
        <div className="container allBook">
          {book.length === 0 && (
            <CircularProgress className="text-center mt-5" />
          )}
          {book.map((book) => (
            <BookCart key={book._id} book={book}></BookCart>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
