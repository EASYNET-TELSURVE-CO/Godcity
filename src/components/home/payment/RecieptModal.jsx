const ReceiptModal = ({ paymentData, onClose }) => {
    if (!paymentData) return null;

    const { amount, selectedItem, paymentMethod } = paymentData;

    const handleClose = () => {
        onClose();  // Trigger the onClose function to close the modal
        window.location.href = '/';  // Navigate to the home page
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            style={{ backdropFilter: "blur(5px)" }}
        >
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full mx-auto">
                <h2 className="text-xl font-bold mb-4">Payment Receipt</h2>
                <p className="mb-4">Thank you for your payment!</p>
                <div className="mb-4">
                    <p>
                        <strong>Item:</strong> {selectedItem || "Church Payment"}
                    </p>
                    <p>
                        <strong>Amount Paid:</strong> ${amount.toFixed(2)}
                    </p>
                    <p>
                        <strong>Payment Method:</strong> {paymentMethod}
                    </p>
                </div>
                <button
                    onClick={handleClose}
                    className="py-2 px-4 bg-primary text-white rounded-lg w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ReceiptModal;
