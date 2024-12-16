import React, { useState } from 'react';

const PaymentPage = () => {
    const [paymentData, setPaymentData] = useState({
        amount: '',
        currency: 'USD',
        payment_method: 'card'
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    const handlePayment = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include additional headers if required
                    // 'Authorization': `Bearer YOUR_TOKEN_HERE`,
                },
                credentials: 'include', // Include cookies if required
                body: JSON.stringify(paymentData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Payment failed');
            }

            const data = await response.json();
            setMessage('Payment Successful!');
            console.log('Payment Data:', data);
        } catch (error) {
            setMessage(`Payment Failed: ${error.message}`);
            console.error('Payment Error:', error);
        }
    };

    return (
        <div>
            <h1>Payment Page</h1>
            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={paymentData.amount}
                onChange={handleInputChange}
            />
            <select
                name="currency"
                value={paymentData.currency}
                onChange={handleInputChange}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
            </select>
            <button onClick={handlePayment}>Pay Now</button>
            <p>{message}</p>
        </div>
    );
};

export default PaymentPage;
