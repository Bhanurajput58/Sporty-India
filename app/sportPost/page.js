"use client";
import { useState } from 'react';

export default function WriteDummy() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [playerCount, setPlayerCount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/api/sports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name, 
        rating: Number(rating), 
        playerCount: Number(playerCount) 
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="number"
        placeholder="Player Count"
        value={playerCount}
        onChange={(e) => setPlayerCount(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
