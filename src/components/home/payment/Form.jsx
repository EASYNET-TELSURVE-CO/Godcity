import React, { useEffect, useState } from "react";

const PaymentForm = ({ paymentData }) => {
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
			// Replace with actual payment processing logic
			// e.g., send amount and paymentMethod to your backend API
			await new Promise((resolve) => setTimeout(resolve, 2000));
			alert("Payment successful!");
		} catch (err) {
			setError("Payment failed. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4 max-w-lg w-full">
			<div>
				<label
					htmlFor="item"
					className="block text-left mt-10 mb-3 text-sm font-medium"
				>
					Item
				</label>
				<input
					type="text"
					id="item"
					value={item}
					onChange={(e) => setItem(e.target.value)}
					required
					className="mt-1 p-2 border rounded w-full"
				/>
			</div>
			<div>
				<label
					htmlFor="amount"
					className="block text-left mt-10 mb-3 text-sm font-medium"
				>
					Amount
				</label>
				<input
					type="number"
					id="amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					required
					className="mt-1 p-2 border rounded w-full"
				/>
			</div>

			<div>
				<label
					htmlFor="payment-method"
					className="block text-sm mt-6 mb-3 text-left font-medium"
				>
					Payment Method
				</label>
				<select
					id="payment-method"
					value={paymentMethod}
					onChange={(e) => setPaymentMethod(e.target.value)}
					className="mt-1 p-2 border rounded w-full"
				>
					<option value="credit-card">Credit Card</option>
					<option value="paypal">PayPal</option>
					{/* Add more payment methods if needed */}
				</select>
			</div>

			{error && <div className="text-red-500">{error}</div>}

			<button
				type="submit"
				disabled={isSubmitting}
				className="py-2 px-4 bg-primary text-white rounded-lg w-full"
			>
				{isSubmitting ? "Processing..." : "Submit Payment"}
			</button>
		</form>
	);
};

export default PaymentForm;
