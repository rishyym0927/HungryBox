import React from 'react'
import "./Subscription.css";
export const Subscription = () => {
    return (
        <div className='sub-info'>
            <h1 style={{ textAlign: "center",color:"#49557E" }}>Subscription Plans</h1>
            <div className='plan-container'>
                <div className='plan-heading'>
                    <h1 className='ph1' style={{ textAlign: "center" }}>Weekly Plan</h1>
                    <h1 className='ph2' style={{ textAlign: "center" }}>Monthly Plan</h1>
                </div>
                <div className='plan-desc'>
                    <div className='plan-price-1'>
                        <div className='plan-price'>
                            <h1>$2/week</h1>
                            <hr />
                            <ul>
                                <li>✅ Unlimited Delivery</li>
                                <li>✅ Free Delivery</li>
                                <li>✅ 24/7 Availability</li>
                                <li>❌ Service Charge</li>
                                <li>❌ Extra Coin</li>
                                <li>❌ Special Discount</li>
                            </ul>
                        </div>
                    </div>
                    <div className='plan-price-2'>
                        <div className='plan-price'>
                            <h1>$10 / 3-Month</h1>
                            <hr/>
                            <ul>
                                <li>✅ Unlimited Delivery</li>
                                <li>✅ Free Delivery</li>
                                <li>✅ 24/7 Availability</li>
                                <li>✅ Service Charge</li>
                                <li>✅ Extra Coin</li>
                                <li>❌ Special Discount</li>
                                <li>❌ Discount Coupon</li>
                                <li>❌ Seasonal Gift</li>
                            </ul>
                        </div>

                        <div className='plan-price'>
                            <h1>$20 / 6-Month</h1>
                            <hr />
                            <ul>
                                <li>✅ Unlimited Delivery</li>
                                <li>✅ Free Delivery</li>
                                <li>✅ 24/7 Availability</li>
                                <li>✅ Service Charge</li>
                                <li>✅ Extra Coin</li>
                                <li>✅ Special Discount</li>
                                <li>✅ Life Time Availability</li>
                                <li>✅ Discount Coupon</li>
                                <li>✅ Seasonal Gift</li>
                            </ul>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}
