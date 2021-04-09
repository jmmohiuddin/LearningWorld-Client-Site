import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Event from "../Event/Event";
import "./Admin.css";
const Admin = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://quiet-springs-03889.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <>
      {/* <Link to="/addBook" className="addMin mt-5 d-inline-block">
        Add Product
      </Link>
      <br />
      <Link to="/Admin" className="addMin mt-5 d-inline-block">
        Manage books
      </Link> */}
      <section className="container-md Orders mt-5">
        <br />
        <br />
        <div className="row container-md OrdersTitle">
          <div className=" col-3">
            <b>
              <h5>Book Name</h5>
            </b>
          </div>
          <div className=" col-3">
            <b>
              <h5> Author Name</h5>
            </b>
          </div>
          <div className=" col-3">
            <b>
              <h5>Price</h5>
            </b>
          </div>
          <div className=" col-3">
            <b>
              <h5>Action</h5>
            </b>
          </div>
        </div>
        <br />
        <br />
        <div className="row ">
          {events.length === 0 && (
            <CircularProgress className="text-center mt-5" />
          )}
          {events.map((book) => (
            <Event book={book}></Event>
          ))}
        </div>
      </section>
    </>
  );
};

export default Admin;
