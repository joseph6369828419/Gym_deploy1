// SubscribeForm.js
import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribeClick = () => {
    // Validate email before proceeding
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Perform any additional logic, such as sending the email to a server
    // For simplicity, we'll just set subscribed to true
    setSubscribed(true);

    // Open the user's default email client with a pre-filled email
    window.open(`mailto:${email}?subject=Subscription%20Confirmation&body=Thank%20you%20for%20subscribing!`);
  };

  const validateEmail = (email) => {
    // Use a simple email validation regex or a more robust solution
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <button onClick={handleSubscribeClick}>Subscribe</button>
      {subscribed && <p>Thank you for subscribing! Check your email for confirmation.</p>}
    </div>
  );
};

export default SubscribeForm;
