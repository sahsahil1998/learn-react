import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState(''); // Using useState for firstName
  const [lastName, setLastName] = useState('');  // Using useState for lastName

  function handleFirstNameChange(e) {
    setFirstName(e.target.value); // Set the state
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);  // Set the state
  }

  function handleReset() {
    setFirstName(''); // Reset the state
    setLastName('');  // Reset the state
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
