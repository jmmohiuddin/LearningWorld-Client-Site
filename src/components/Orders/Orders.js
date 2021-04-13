import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";

import "./Order.css";
const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(
      "https://quiet-springs-03889.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <>
      <Header></Header>
      <div className="container-md">
        <div className="text-center orders">Orders</div>
        <section className=" MainContainer">
          <div className="row mt-3 mb-5 childContainer ">
            <div className=" col-4">
              <b>
                <h3 className="text-center">Book Name</h3>
              </b>
            </div>
            <div className="col-4 text-center">
              <b>
                <h3> Author Name</h3>
              </b>
            </div>
            <div className="col-4 text-center">
              <b>
                <h3>Price</h3>
              </b>
            </div>
          </div>
          {events.map((book) => (
            <div className="row text-justify pb-3 pt-3">
              <p className="col-4 table-primary pb-3 pt-3 text-center ">
                {book?.shipment?.bookName}
              </p>
              <p className="col-4 table-secondary pb-3 pt-3 text-center">
                {book?.name}
              </p>
              <p className="col-4 table-info pb-3 pt-3 text-center">
                {book?.shipment?.cost}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Orders;
