import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddBook.css";
const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      imageURL: imageURL,
      AddEvents: data,
    };
    const url = `https://quiet-springs-03889.herokuapp.com/addEvent`;
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
    <div className="container-md mt-5">
      <h1 className="mt-5 mb-5">Add Book</h1>
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
          className=" btn btn-primary pl-4 pt-2 pb-2 pr-4"
          value="Save"
        />
      </form>
    </div>
  );
};

export default AddBook;
