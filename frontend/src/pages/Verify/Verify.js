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

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await axios.post(url + "/api/order/verify", {
          success,
          orderId,
        });
        if (response.data.success) {
          navigate("/myOrders");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error verifying payment", error);
        navigate("/");
      }
    };

    if (success && orderId) {
      verifyPayment();
    } else {
      // Handle missing query parameters if needed
      navigate("/"); // Redirect to home if parameters are missing
  }, [url, success, orderId, navigate]); // Added dependencies

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
