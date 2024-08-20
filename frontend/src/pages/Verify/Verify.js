import React, { useContext, useEffect, useCallback } from "react";
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

  // Define verifyPayment with useCallback to prevent recreation on each render
  const verifyPayment = useCallback(async () => {
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
      console.error('Verification error:', error);
      navigate("/");
    }
  }, [url, success, orderId, navigate]); // Dependencies for verifyPayment

  useEffect(() => {
    console.log('Navigating to verify page with params:', { success, orderId });
    verifyPayment();
  }, [verifyPayment, success, orderId]); // Ensure all relevant dependencies are included

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
