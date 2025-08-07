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

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data: NewsletterResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe to newsletter');
      }

      setMessage(data.message || 'Successfully subscribed to newsletter!');
      return { success: true, message: data.message };
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
