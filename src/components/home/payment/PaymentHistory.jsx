import React, { useState, useEffect } from "react";
import SpinningLoader from "../../common/Loader";

const PaymentHistory = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPaymentHistory = async () => {
            try {
                // Simulate an API call
                const response = await new Promise((resolve) =>
                    setTimeout(
                        () =>
                            resolve({
                                json: () => [
                                    { id: 1, amount: "50.00", date: "2024-07-01", method: "Credit Card" },
                                    { id: 2, amount: "30.00", date: "2024-07-15", method: "PayPal" },
                                ],
                            }),
                        2000
                    )
                );
                const data = await response.json();
                setPayments(data);
            } catch (err) {
                setError("Failed to load payment history. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchPaymentHistory();
    }, []);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
                <SpinningLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <p className="text-red-600 font-medium">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 py-2 px-6 bg-primary text-white rounded-lg shadow-lg"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Payment History</h2>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full table-auto hidden md:table">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-4 text-left">ID</th>
                            <th className="p-4 text-left">Amount</th>
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-right">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment.id} className="border-b last:border-0">
                                <td className="p-4">{payment.id}</td>
                                <td className="p-4">${payment.amount}</td>
                                <td className="p-4">{payment.date}</td>
                                <td className="p-4 text-right">{payment.method}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Mobile View */}
                <div className="grid gap-4 md:hidden">
                    {payments.map((payment) => (
                        <div
                            key={payment.id}
                            className="border rounded-lg p-4 shadow-sm bg-white"
                        >
                            <p>
                                <strong>ID:</strong> {payment.id}
                            </p>
                            <p>
                                <strong>Amount:</strong> ${payment.amount}
                            </p>
                            <p>
                                <strong>Date:</strong> {payment.date}
                            </p>
                            <p>
                                <strong>Payment Method:</strong> {payment.method}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
