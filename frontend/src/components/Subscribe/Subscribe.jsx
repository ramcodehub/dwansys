import './Subscribe.css';
import { useState, useEffect } from 'react';

const Subscribe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: null, text: '' });

  // More robust way to access environment variable
  const API_BASE = (import.meta && import.meta.env && import.meta.env.VITE_API_BASE_URL) 
    ? import.meta.env.VITE_API_BASE_URL 
    : 'http://localhost:5001'; // Default to 5001 instead of 5000

  // Log the API base URL for debugging
  useEffect(() => {
    console.log('Subscribe Component - VITE_API_BASE_URL:', import.meta?.env?.VITE_API_BASE_URL);
    console.log('Subscribe Component - API_BASE being used:', API_BASE);
  }, [API_BASE]);

  // Prevent form submission on Enter key in input field
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    // Get form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get('email') || '').trim();

    // Basic validation
    if (!email) {
      setFeedback({ type: 'error', text: 'Please enter your email address.' });
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedback({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json?.error?.message || 'Failed to subscribe');
      }
      // Clear form on success
      form.reset();
      setFeedback({
        type: 'success',
        text: `Thank you for subscribing! We'll keep you updated with the latest industry trends. ✅`,
      });
    } catch (err) {
      setFeedback({ type: 'error', text: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-between text-start rounded-4 subscribe">
      <div className="col-10 col-lg-6">
        <h2 className="lh-1">Subscribe to our list</h2>
        <p className="lh-1 m-0 p-0" style={{ color: '#AAAAAA' }}>
          Stay up to date with the industry trends.
          <br />
          Don't worry we won't spam.
        </p>
      </div>
      <div className="col-lg-6">
        <form onSubmit={handleSubmit} className="controls">
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            className="bg-black rounded-3" 
            style={{ padding: '1.25rem' }}
            required
            onKeyDown={handleKeyDown} // Prevent Enter key submission
          />
          <button 
            type="submit" 
            className="px-5 py-3 fs-6 rounded-3" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        <div className="feedback">
          {feedback.text ? (
            <div
              className="mt-2"
              style={{
                color: feedback.type === 'success' ? '#16a34a' : '#dc2626',
                fontWeight: 600,
                textAlign: 'center',
                backgroundColor: 'transparent',
              }}
            >
              {feedback.text}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;