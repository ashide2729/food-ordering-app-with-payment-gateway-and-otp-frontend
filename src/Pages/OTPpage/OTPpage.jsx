import React, { useState, useEffect } from 'react'
import './_OTPpage.scss'

export default function OTPpage() {

    const [otp, setOtp] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    function handleSubmit() {
        setShowMessage(true);
    }

    useEffect(() => {
        if (showMessage) {
            setTimeout(function () { window.location.href = "/" }, 5000);
        }
    }, [showMessage])

    return (
        <div className="otp-page-container">
            <a href={`/`} className="back-arrow">{"<"}</a>
            {
                showMessage ?
                    <div className="message-container">
                        {otp === "123456" ?
                            <div class="svg-box">
                                <svg class="circular green-stroke">
                                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10" />
                                </svg>
                                <svg class="checkmark green-stroke">
                                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)">
                                        <path class="checkmark__check" fill="none" d="M616.306,283.025L634.087,300.805L673.361,261.53" />
                                    </g>
                                </svg>
                            </div>
                            :
                            <div class="svg-box">
                                <svg class="circular red-stroke">
                                    <circle class="path" cx="75" cy="75" r="50" fill="none" stroke-width="5" stroke-miterlimit="10" />
                                </svg>
                                <svg class="cross red-stroke">
                                    <g transform="matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)">
                                        <path class="first-line" d="M634.087,300.805L673.361,261.53" fill="none" />
                                    </g>
                                    <g transform="matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)">
                                        <path class="second-line" d="M634.087,300.805L673.361,261.53" />
                                    </g>
                                </svg>
                            </div>
                        }
                        {otp === "123456" ? "Payment successful" : "Payment failed, wrong OTP"}
                        <span>You will be redirected automatically, else click <a href={`/`}>here</a></span>
                    </div>
                    :
                    <>
                        <input type="text" className="otp-input" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
                        < button className="submit-otp" onClick={() => handleSubmit()}>Submit</button>
                    </>
            }
        </div>
    )
}
