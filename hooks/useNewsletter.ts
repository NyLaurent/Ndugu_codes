import { useState } from 'react';

interface NewsletterResponse {
  message?: string;
  error?: string;
}

export const useNewsletter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const subscribeToNewsletter = async (email: string) => {
    setIsLoading(true);
    setMessage(null);
    setError(null);

    const url = process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_URL;

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('form_type', 'newsletter');

      const response = await fetch(url || 'https://formspree.io/f/YOUR_NEWSLETTER_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setMessage('Successfully subscribed to newsletter!');
        return { success: true, message: 'Successfully subscribed to newsletter!' };
      } else {
        const result = await response.json();
        const errorMessage = result.errors 
          ? result.errors.map((err: { message: string }) => err.message).join(', ')
          : 'Failed to subscribe to newsletter. Please try again.';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to subscribe to newsletter';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => {
    setMessage(null);
    setError(null);
  };

  return {
    subscribeToNewsletter,
    isLoading,
    message,
    error,
    clearMessages,
  };
};
