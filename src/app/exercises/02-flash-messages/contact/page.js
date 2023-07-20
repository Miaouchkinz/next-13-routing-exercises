'use client';

import React from 'react';
import { ToastContext } from '../../../../components/ToastProvider/ToastProvider';
import { useRouter } from 'next/navigation';

/**
 * Acceptance Criteria:
 * - Submitting the contact form should redirect the user to the exercise homepage
 *   (/exercises/02-flash-messages).
 * - Upon redirection, a confirmation message should be shown, using the Toast component.
 *   You should also make use of the ToastShelf and ToastProvider components from the previous project.
 * - You don't have to use localStorage or cookies or anything like that. React context alone should be sufficient.
 */

function ContactPage() {
  const { createToast } = React.useContext(ToastContext);
  const [message, setMessage] = React.useState('');
  const [name, setName] = React.useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    createToast(
      `Thank you for reaching out ${name}, we'll be in touch!`,
      'success'
    );

    // reset form fields
    setMessage('');
    setName('');

    // redirect user to exercise page
    router.push('/exercises/02-flash-messages');
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
