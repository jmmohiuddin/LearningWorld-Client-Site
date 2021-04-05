import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <section className="container-md">
        <div className="row mt-5 mb-5">
          <div className=" col-4">
            <b>
              <h3>Book Name</h3>
            </b>
          </div>
          <div className=" col-4">
            <b>
              <h3> Author Name</h3>
            </b>
          </div>
          <div className=" col-4">
            <b>
              <h3>Price</h3>
            </b>
          </div>
        </div>
        {events.map((book) => (
          <div className="row text-justify">
            <p className="col-4">{book?.shipment?.bookName}</p>
            <p className="col-4">{book?.name}</p>
            <p className="col-4">{book?.shipment?.cost}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Orders;
