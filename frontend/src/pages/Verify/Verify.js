import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import "./Verify.css";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });

    if (response.data.success) {
      navigate("/myOrders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  });

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
