import React, { useState, useEffect } from 'react';
import SpinningLoader from '../../common/Loader';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        // Replace with actual API call
        // e.g., fetch('/api/payments') or use a custom hook
        const response = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                json: () => [
                  { id: 1, amount: '50.00', date: '2024-07-01', method: 'Credit Card' },
                  { id: 2, amount: '30.00', date: '2024-07-15', method: 'PayPal' },
                ],
              }),
            2000
          )
        );
        const data = await response.json();
        setPayments(data);
      } catch (err) {
        setError('Failed to load payment history.');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, []);

  if (loading) return <SpinningLoader/>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className='py-8 font-normal w-full max-w-lg'>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Date</th>
            <th className="border text-right p-2">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="border p-2">{payment.id}</td>
              <td className="border p-2">{payment.amount}</td>
              <td className="border p-2">{payment.date}</td>
              <td className="border text-right p-2">{payment.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
