import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Abdo from "./e-com.module.css";
import axios from "axios";
function EComCheckout() {
  let cart = useSelector((state) => state.cartReducer.cart);
  let x = 0;
  let user = useSelector((state) => state.userReducer.user);
  for (let i of cart) {
    x += i.price * i.count;
  }
  function checkout() {
    if (user.email) {
      axios.post("http://localhost:8000/api/v1/users/placeorder", {
        email: user.email,
      });
    }
  }
  useEffect(() => {
    axios.post("http://localhost:8000/api/v1/users/update", {
      email: user.email,
      cart: cart,
    });
  }, [cart]);

  return (
    <>
      <div>
        <div className={Abdo.checkout}>Check Out</div>
        <div className={Abdo.checkout}>Total : {x} EGP</div>
        <div className={Abdo.checkout}>
          <button className={Abdo.ripple} onClick={checkout}>
            Complete the order
          </button>
        </div>
      </div>
    </>
  );
}

export default EComCheckout;
