import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddBook.css";
import Header from "../Header/Header";
import logo from "../../images/logo.png";
const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      imageURL: imageURL,
      AddEvents: data,
    };
    const url = `http://localhost:5055/addEvent`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response", res));
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "03b008c33977f6a3ea82d4ba47c18173");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Header></Header>
      <div className="container-md mt-5 mainContainer">
        <div className="row">
          <div className="col-6">
            <h1 className="addbook">Add Book</h1>
          </div>
          <div className="col-6">
            <img src={logo} className="logo" alt="" />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="container-md">
          <div className="row">
            {" "}
            <input
              className="col-6 same-desgine "
              name="name"
              placeholder="name"
              ref={register({ required: true })}
            />
            <input
              className="col-6 same-desgine"
              name="author"
              placeholder="author name"
              ref={register({ required: true })}
            />
          </div>
          <div className="row">
            <input
              className="col-6 same-desgine"
              name="cost"
              placeholder="price"
              ref={register({ required: true })}
            />
            <br />
            <input
              className="col-6"
              name="exampleRequired"
              type="file"
              onChange={handleImageUpload}
            />
          </div>
          <br />
          <input
            type="submit"
            className=" btn btn-secondary pl-5 pt-2 pb- pr-5"
            value="Save"
          />
        </form>
      </div>
    </>
  );
};

export default AddBook;
