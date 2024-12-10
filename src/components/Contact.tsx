import { Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { SectionBackground } from './ui/SectionBackground';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    error: null
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ isLoading: true, isSuccess: false, error: null });

    try {
      const response = await fetch('https://api.airtable.com/v0/appnroG9IGssUiw3n/Projects', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer patuZqHNLOWDq71Xg.442ce81e50912cef508fe52b475908c2ca8151ea41095049cbf7a27e9451789b',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: formData.name,
                email: formData.email,
                Info: formData.message,
                Status: "false"
              }
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormState({
        isLoading: false,
        isSuccess: true,
        error: null
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSuccess: false }));
      }, 5000);

    } catch (error) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        error: 'Failed to submit form. Please try again.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="pt-5 pb-24 px-6 transform translate-y-20 opacity-0 transition-all duration-1000 ease-out"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent">
            Get Started Today
          </span>
        </h2>
        <SectionBackground>
          <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-dark-100 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-800/50 border border-dark-600 rounded-lg 
                  focus:ring-2 focus:ring-primary-600 focus:border-transparent text-dark-100
                  backdrop-blur-xl relative z-10"
                required
                disabled={formState.isLoading}
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-dark-100 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-800/50 border border-dark-600 rounded-lg 
                  focus:ring-2 focus:ring-primary-600 focus:border-transparent text-dark-100
                  backdrop-blur-xl relative z-10"
                required
                disabled={formState.isLoading}
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-dark-100 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-dark-800/50 border border-dark-600 rounded-lg 
                  focus:ring-2 focus:ring-primary-600 focus:border-transparent text-dark-100
                  backdrop-blur-xl relative z-10"
                required
                disabled={formState.isLoading}
              />
            </div>

            {formState.error && (
              <div className="text-red-500 text-sm">{formState.error}</div>
            )}

            {formState.isSuccess && (
              <div className="text-green-500 text-sm">Message sent successfully!</div>
            )}

            <Button 
              type="submit" 
              variant="primary" 
              icon={Send} 
              className="w-full relative z-10"
              disabled={formState.isLoading}
            >
              {formState.isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </SectionBackground>
      </div>
    </section>
  );
}