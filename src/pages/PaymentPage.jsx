import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentHistory from "../components/home/payment/PaymentHistory";
import PaymentForm from "../components/home/payment/Form";
import PaymentModal from "../components/home/payment/Modal";

const PaymentPage = () => {
	const [showPaymentForm, setShowPaymentForm] = useState(false);
	const [showPaymentHistory, setShowPaymentHistory] = useState(false);
	const [showPaymentModal, setShowPaymentModal] = useState(false);
	const [paymentData, setPaymentData] = useState(null); // Store payment data from modal
	const location = useLocation();
	const navigate = useNavigate();

	const paymentType = location.state?.paymentType;

	useEffect(() => {
		if (paymentType) {
			switch (paymentType) {
				case "donation":
				case "offering":
				case "membership":
					setShowPaymentForm(true);
					setShowPaymentHistory(false);
					setShowPaymentModal(true); // Show the PaymentModal
					break;
				case "subscription":
					setShowPaymentForm(false);
					setShowPaymentHistory(false);
					setShowPaymentModal(false); // Hide the PaymentModal
					setShowConfirmationModal(true); // Show the ConfirmationModal
					break;
				default:
					setShowPaymentForm(true);
					setShowPaymentHistory(false);
					break;
			}
		} else {
			setShowPaymentForm(true);
			setShowPaymentHistory(false);
		}
	}, [paymentType]);

	const handleTabChange = (tab) => {
		if (tab === "form") {
			setShowPaymentForm(true);
			setShowPaymentHistory(false);
		} else if (tab === "history") {
			setShowPaymentForm(false);
			setShowPaymentHistory(true);
		}
	};

	const handleProceed = ({ amount, selectedItem }) => {
		const data = { amount, selectedItem };
		// Update payment data with information from PaymentModal
		setPaymentData(data);
		setShowPaymentModal(false);
		setShowPaymentForm(true); // Show the PaymentForm
	};

	return (
		<div className="p-10 flex items-center justify-center flex-col max-w-4xl mx-auto font-normal w-full">
			<div className="mb-4 flex items-center max-w-lg w-full">
				<button
					onClick={() => handleTabChange("form")}
					className={`py-2 px-4 w-full rounded ${
						showPaymentForm ? "bg-primary text-white" : "bg-gray-200"
					}`}
				>
					Make a Payment
				</button>
				<button
					onClick={() => handleTabChange("history")}
					className={`py-2 w-full px-4 rounded ${
						showPaymentHistory ? "bg-primary text-white" : "bg-gray-200"
					}`}
				>
					Payment History
				</button>
			</div>

			{showPaymentForm && <PaymentForm paymentData={paymentData} />}
			{showPaymentHistory && <PaymentHistory />}
			{showPaymentModal && (
				<PaymentModal
					type={paymentType}
					onClose={() => setShowPaymentModal(false)}
					onProceed={handleProceed}
				/>
			)}
		</div>
	);
};

export default PaymentPage;
