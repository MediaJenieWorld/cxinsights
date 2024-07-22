/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
// import axios from "axios"
import { load } from '@cashfreepayments/cashfree-js'
import { createPaymentOrder, verifyPaymentApi } from "@/utils/api";

import Custom_Centered_DynamicDialog from "@/components/ui/Dialog/Center_Dialog";
import { subscriptionPacks } from '@/utils/SubPacks';
import "./styles.scss"
import { toast } from 'react-toastify';

function Subscription() {

    const [cashfree, setCashfree] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let insitialzeSDK = async function () {
            const res = await load({
                mode: "sandbox",
            })
            setCashfree(res)
        }
        insitialzeSDK()
    }, [])

    const getSessionId = async (pack) => {
        try {
            let res = await createPaymentOrder({ pack })
            if (res.data && res.data.payment_session_id) {
                return {
                    sessionId: res.data.payment_session_id,
                    orderId: res.data.order_id
                }
            }
        } catch (error) {
            toast.error("Payment Order Failed")
            console.log(error.message)
        }
    }

    const verifyPayment = async (orderId) => {
        try {
            let res = await verifyPaymentApi({ orderId })
            if (res && res.data) {
                console.log("Response ==>", res);
                if (res.data.length > 0) {
                    const x = res.data.some((order, i) => order.payment_status == "SUCCESS")
                    if (x) {
                        toast.success("Payment Successfull")
                    }
                    else {
                        toast.error("Payment failed")
                    }
                }
                else {
                    toast.error("Payment " + res.data?.payment_status || "failed")
                }
            }
        } catch (error) {
            console.log(error.message)
            toast.info("payment verification failed")
        }
    }

    const handleClick = async (pack) => {
        try {
            let { sessionId, orderId } = await getSessionId(pack)
            let checkoutOptions = {
                paymentSessionId: sessionId,
                redirectTarget: "_modal",
            }

            cashfree.checkout(checkoutOptions).then((res) => {
                toast.info("Checking Payment Status...")
                verifyPayment(orderId)
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    const activateTrailPack = () => { }
    return (
        <div className="SubsPage">
            <div className="Subscription">
                <div id='heading'>CHOOSE YOUR <span>SUBSCRIPTION</span></div>{" "}
                <div className="Subscription__container">
                    {subscriptionPacks.map((subs, i) => {
                        return (
                            <div
                                className={`item`}
                                key={i}
                            >
                                <div className="right">
                                    <h3>{subs.name}</h3>
                                    <p>{subs.price}</p>
                                    <Custom_Centered_DynamicDialog
                                        label="info"
                                        dialogStyles={{ width: "max-content" }}
                                        boxStyles={{ backgroundColor: "rgb(91 90 90 / 80%)", borderRadius: "10px", padding: "1rem", width: "90%", justifyContent: "flex-start" }}
                                        LabelChildren={() => <i className="pi pi-info-circle"></i>}
                                    >
                                        <div className="dialog-content">
                                            <div className="flex-column">
                                                <h4>Subscription Pack Name:</h4>
                                                <p style={{ color: "var(--star-color)" }}>{subs.name}</p>
                                            </div>
                                            <div className="flex-column">
                                                <h4>What you can view:</h4>
                                                <p style={{ color: "var(--star-color)" }}>{subs.description}</p>
                                            </div>
                                            <div className="flex-column">
                                                <h4>Insight Limit:</h4>
                                                <p style={{ color: "var(--star-color)" }}>{subs.insightLimit}</p>
                                            </div>
                                            <div className="flex-column">
                                                <h4>Vailidity:</h4>
                                                <p style={{ color: "var(--star-color)" }}>{subs.validity} days</p>
                                            </div>
                                            <div className="flex-column">
                                                <h4>Price:</h4>
                                                <p style={{ color: "var(--star-color)" }}>{subs.price}</p>
                                            </div>
                                        </div>
                                    </Custom_Centered_DynamicDialog>
                                    {/* <i className="pi pi-info-circle"></i> */}
                                </div>
                                <div className="left">
                                    <button onClick={() => handleClick(subs.name)} className='start'>Buy</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Subscription
// {      <div
//     className="item"
// >
//     <div className="right">
//         <h3>FREE TRIAL</h3>
//         <p>Rs. 0/ 7 Days</p>
//         <Custom_Centered_DynamicDialog
//             label="info"
//             dialogStyles={{ width: "max-content" }}
//             boxStyles={{ backgroundColor: "rgb(91 90 90 / 80%)", borderRadius: "10px", padding: "1rem", width: "90%", justifyContent: "flex-start" }}
//             LabelChildren={() => <i className="pi pi-info-circle"></i>}
//         >
//             <div className="dialog-content">
//                 <div className="flex-column">
//                     <h4>Subscription Pack Name:</h4>
//                     <p style={{ color: "var(--star-color)" }}>FREE TRIAL</p>
//                 </div>
//                 <div className="flex-column">
//                     <h4>What you can view:</h4>
//                     <p style={{ color: "var(--star-color)" }}>Access to basic insights</p>
//                 </div>
//                 <div className="flex-column">
//                     <h4>Insight Limit:</h4>
//                     <p style={{ color: "var(--star-color)" }}>10 insights per day</p>
//                 </div>
//                 <div className="flex-column">
//                     <h4>Vailidity:</h4>
//                     <p style={{ color: "var(--star-color)" }}>7 days</p>
//                 </div>
//                 <div className="flex-column">
//                     <h4>Price:</h4>
//                     <p style={{ color: "var(--star-color)" }}>Rs. 0/ 7 Days</p>
//                 </div>
//             </div>
//         </Custom_Centered_DynamicDialog>
//         {/* <i className="pi pi-info-circle"></i> */}
//     </div>
//     <div className="left">
//         <button onClick={() => activateTrailPack()} className='start'>Activate</button>
//     </div>
// </div>}