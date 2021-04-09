import React from "react";
const Event = ({ book }) => {
  const deleteEvent = (id) => {
    fetch(`https://enigmatic-basin-74595.herokuapp.com/deleteEvent/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {});
  };
  const { name, cost, author } = book?.AddEvents;
  return (
    <section className="container-md ">
      <div className="row container-md">
        <div className=" col-3">
          <p className="bookname">{name}</p>
        </div>
        <div className=" col-3">
          <p>{author}</p>
        </div>
        <div className=" col-3">
          <p>{cost}</p>
        </div>
        <div className=" col-3">
          <button
            onClick={() => deleteEvent(book._id)}
            className="btn btn-primary mb-2"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default Event;
