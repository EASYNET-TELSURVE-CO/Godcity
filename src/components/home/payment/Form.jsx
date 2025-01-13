import React, { useEffect, useState } from "react";

const PaymentForm = ({ paymentData, onSubmit }) => {
	const [amount, setAmount] = useState(paymentData?.amount || "");
	const [item, setItem] = useState(paymentData?.selectedItem || "");
	const [paymentMethod, setPaymentMethod] = useState("credit-card");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (paymentData) {
			setAmount(paymentData.amount || "");
			setItem(paymentData.selectedItem || "");
		}
	}, [paymentData]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsSubmitting(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			onSubmit(); // Trigger the receipt display
			setAmount(""); // Clear the amount
			setItem(""); // Clear the item
		} catch (err) {
			setError("Payment failed. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="bg-white p-8 rounded-lg shadow-lg">
			<form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
				<div>
					<label htmlFor="item" className="block text-sm font-medium text-gray-700">
						Description
					</label>
					<input
						type="text"
						id="item"
						value={item}
						onChange={(e) => setItem(e.target.value)}
						required
						className="mt-1 p-3 border rounded-lg w-full"
					/>
				</div>

				<div>
					<label htmlFor="amount" className="block text-sm font-medium text-gray-700">
						Amount
					</label>
					<input
						type="number"
						id="amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						required
						className="mt-1 p-3 border rounded-lg w-full"
						min="1"
					/>
				</div>

				<div>
					<label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">
						Payment Method
					</label>
					<select
						id="payment-method"
						value={paymentMethod}
						onChange={(e) => setPaymentMethod(e.target.value)}
						className="mt-1 p-3 border rounded-lg w-full"
					>
						<option value="credit-card">Credit Card</option>
						<option value="paypal">PayPal</option>
						{/* Add more payment methods if needed */}
					</select>
				</div>

				{error && <div className="text-red-500 text-sm">{error}</div>}

				<button
					type="submit"
					disabled={isSubmitting || amount <= 0}
					className={`w-full p-3 rounded-lg text-white ${
						isSubmitting || amount <= 0 ? "bg-gray-400" : "bg-primary hover:bg-primary-dark"
					}`}
				>
					{isSubmitting ? "Processing..." : "Submit Payment"}
				</button>
			</form>
		</div>
	);
};

export default PaymentForm;
