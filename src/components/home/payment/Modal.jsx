import React, { useState } from "react";
import {
	Modal,
	TextField,
	Button,
	Select,
	MenuItem,
	InputLabel,
} from "@mui/material";
import paymentOptions from "./paymentOptions.json";

const PaymentModal = ({ type = "default", onClose, onProceed }) => {
	const [selectedItem, setSelectedItem] = useState("");
	const [amount, setAmount] = useState("");
	const [error, setError] = useState("");

	// Validate paymentOptions[type]
	const currentOptions = paymentOptions[type] || {};

	const handleItemChange = (event) => {
		const selectedOption = event.target.value;
		setSelectedItem(selectedOption);

		// Get the price of the selected plan or default to the minimum amount
		const price =
			currentOptions.plans?.find((plan) => plan.name === selectedOption)
				?.price || currentOptions.minAmount || 1; // Minimum fallback to 1

		setAmount(price);
		setError(""); // Clear any previous error
	};

	const handleAmountChange = (event) => {
		const inputValue = event.target.value;

		// Prevent negative values and ensure valid number
		if (inputValue < 0) {
			setError("Amount must be greater than 0.");
			return;
		}

		// Check minimum value
		const minAmount = currentOptions.minAmount || 1; // Minimum fallback to 1
		if (inputValue < minAmount) {
			setError(`Amount must be at least $${minAmount}.`);
		} else {
			setError("");
		}

		setAmount(inputValue);
	};

	const handleNextPhase = () => {
		const minAmount = currentOptions.minAmount || 1; // Minimum fallback to 1

		// Validate amount before proceeding
		if (amount <= 0 || amount < minAmount) {
			setError(
				`Amount must be greater than 0 and at least $${minAmount}.`
			);
			return;
		}

		// Proceed if no errors
		onProceed({ amount: parseFloat(amount), selectedItem });
		onClose();
	};

	return (
		<Modal open={true} onClose={onClose}>
			<div className="modal-content bg-white p-8 rounded-xl shadow-lg mx-auto mt-40 max-w-lg">
				<h2 className="text-xl font-bold mb-4">
					{type.charAt(0).toUpperCase() + type.slice(1)} Payment
				</h2>
				<p className="mb-4">
					You are about to pay for {type}. Please choose the specific item or
					enter the amount.
				</p>
				{type === "subscription" ? (
					<div className="mb-4">
						<InputLabel>Choose your plan:</InputLabel>
						<Select
							onChange={handleItemChange}
							value={selectedItem}
							fullWidth
							className="mb-4"
						>
							<MenuItem value="">Select a plan</MenuItem>
							{currentOptions.plans?.map((plan) => (
								<MenuItem key={plan.name} value={plan.name}>
									{plan.name} - ${plan.price}
								</MenuItem>
							))}
						</Select>
					</div>
				) : (
					<TextField
						label="Amount"
						type="number"
						value={amount}
						onChange={handleAmountChange}
						fullWidth
						className="mb-4"
						helperText={`Minimum amount: $${currentOptions.minAmount || 1}`}
						error={Boolean(error)}
					/>
				)}
				{error && (
					<p className="text-red-600 text-sm mb-2">{error}</p>
				)}
				<Button
					variant="contained"
					color="primary"
					onClick={handleNextPhase}
					className="w-full"
					sx={{
						marginTop: "16px",
						padding: 1.5,
						backgroundColor: "#c0a700",
						borderRadius: 2,
					}}
					disabled={!amount || error}
				>
					Next
				</Button>
			</div>
		</Modal>
	);
};

export default PaymentModal;
