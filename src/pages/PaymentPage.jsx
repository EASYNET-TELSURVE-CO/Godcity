import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentHistory from "../components/home/payment/PaymentHistory";
import PaymentForm from "../components/home/payment/Form";
import PaymentModal from "../components/home/payment/Modal";
import ReceiptModal from "../components/home/payment/RecieptModal";

const PaymentPage = () => {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [showPaymentHistory, setShowPaymentHistory] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showReceiptModal, setShowReceiptModal] = useState(false);
    const [paymentData, setPaymentData] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const paymentType = location.state?.paymentType;

    useEffect(() => {
        if (paymentType) {
            switch (paymentType) {
                case "donation":
                case "offering":
                case "membership":
                    setShowPaymentModal(true);
                    break;
                case "subscription":
                    setShowPaymentModal(false);
                    break;
                default:
                    setShowPaymentForm(true);
                    break;
            }
        } else {
            setShowPaymentForm(true);
        }
    }, [paymentType]);

    const handleTabChange = (tab) => {
        setShowPaymentForm(tab === "form");
        setShowPaymentHistory(tab === "history");
    };

    const handleProceed = ({ amount, selectedItem }) => {
        setPaymentData({ amount, selectedItem });
        setShowPaymentModal(false);
        setShowPaymentForm(true);
    };

    const handleSubmitPayment = () => {
        setTimeout(() => {
            setShowReceiptModal(true);
        }, 500);
    };

    const closeReceiptModal = () => {
        setShowReceiptModal(false);
        setShowPaymentForm(true);
    };

    const handleMakePaymentClick = () => {
        setShowPaymentModal(true); // Show the payment modal
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <div className="bg-primary text-white py-12 text-center">
                <h1 className="text-4xl font-bold">Make Your Payment Seamlessly</h1>
                <p className="text-lg mt-4">
                    Quick and secure payments for all your needs.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto p-6">
                {/* Tabs */}
                <div className="flex justify-center mb-6">
                    <button
                        onClick={handleMakePaymentClick}
                        className={`py-3 px-6 rounded-l-lg text-lg font-semibold transition ${
                            showPaymentForm
                                ? "bg-primary text-white"
                                : "bg-gray-200 hover:bg-primary hover:text-white"
                        }`}
                    >
                        Make a Payment
                    </button>
                </div>

                {/* Content */}
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    {showPaymentForm && (
                        <PaymentForm
                            paymentData={paymentData}
                            onSubmit={handleSubmitPayment}
                        />
                    )}
                </div>
            </div>

            {/* Modals */}
            {showPaymentModal && (
                <PaymentModal
                    type={paymentType}
                    onClose={() => setShowPaymentModal(false)}
                    onProceed={handleProceed}
                />
            )}
            {showReceiptModal && (
                <ReceiptModal
                    paymentData={paymentData}
                    onClose={closeReceiptModal}
                />
            )}
        </div>
    );
};

export default PaymentPage;
