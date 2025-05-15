"use client";
import { useEffect, useState } from 'react';

export default function Home() {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        const fetchSports = async () => {
            const response = await fetch('/api/sports'); 
            const result = await response.json();
            setSports(result);
        };

        fetchSports();
    }, []);

    return (
        <div>
            <h1>Sports Collection</h1>
            <ul>
                {sports.map((sport) => (
                    <li key={sport._id}>
                        <strong>{sport.name}</strong> - Rating: {sport.rating}/10, Player Count: {sport.playerCount}
                    </li>
                ))}
            </ul>
        </div>
    );
}
