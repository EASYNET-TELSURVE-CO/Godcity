import React, { useState } from "react";
import {
	Modal,
	TextField,
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
} from "@mui/material";
import paymentOptions from "./paymentOptions.json";

const PaymentModal = ({ type, onClose, onProceed }) => {
	const [selectedItem, setSelectedItem] = useState("Family A Plan");
	const [amount, setAmount] = useState("");
	const [phase, setPhase] = useState(1);

	const handleItemChange = (event) => {
		const selectedOption = event.target.value;
		setSelectedItem(selectedOption);
		const price =
			paymentOptions[type].plans?.find((plan) => plan.name === selectedOption)
				?.price || paymentOptions[type].minAmount;
		setAmount(price);
	};

	const handleAmountChange = (event) => {
		setAmount(event.target.value);
	};

	const handleNextPhase = () => {
		onProceed({ amount, selectedItem });
        onClose();
	};

	return (
		<Modal open={true} onClose={onClose}>
			<div className="modal-content bg-white p-8 rounded-xl shadow-lg mx-auto mt-40 max-w-md">
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
							<MenuItem value="Family A Plan">Select a plan</MenuItem>
							{paymentOptions[type].plans.map((plan) => (
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
						helperText={`Minimum amount: $${paymentOptions[type].minAmount}`}
					/>
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
				>
					Next
				</Button>
			</div>
		</Modal>
	);
};

export default PaymentModal;
