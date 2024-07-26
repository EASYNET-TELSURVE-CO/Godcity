import React, { useState } from "react";
import { Modal, Button, TextField } from "@mui/material";

const ConfirmationModal = ({ onClose }) => {
	const [paymentMethod, setPaymentMethod] = useState("card");
	const [cardDetails, setCardDetails] = useState("");

	const handlePaymentMethodChange = (event) => {
		setPaymentMethod(event.target.value);
	};

	const handleCardDetailsChange = (event) => {
		setCardDetails(event.target.value);
	};

	const handlePayment = () => {
		// Call API to process payment
		console.log("Payment details:", {
			paymentMethod,
			cardDetails,
		});
		
	};

	return (
		<Modal open={true} onClose={onClose}>
			<div className="modal-content bg-white">
				<h2 className="text-xl font-bold mb-4">Payment Confirmation</h2>
				<p className="mb-4">
					Please select your payment method and enter the details.
				</p>
				<div className="mb-4">
					<select
						onChange={handlePaymentMethodChange}
						value={paymentMethod}
						className="w-full p-2 border rounded"
					>
						<option value="card">Credit/Debit Card</option>
						<option value="paypal">PayPal</option>
						<option value="other">Other</option>
					</select>
				</div>
				{paymentMethod === "card" && (
					<TextField
						label="Card Details"
						type="text"
						value={cardDetails}
						onChange={handleCardDetailsChange}
						fullWidth
						className="mb-4"
					/>
				)}
				<Button
					variant="contained"
					color="primary"
					onClick={handlePayment}
					className="w-full"
					sx={{
						marginTop: "16px",
						padding: 1.5,
						backgroundColor: "#c0a700",
						borderRadius: 2,
					}}
				>
					Confirm Payment
				</Button>
			</div>
		</Modal>
	);
};

export default ConfirmationModal;
