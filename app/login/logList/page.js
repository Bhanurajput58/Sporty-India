"use client";
import { useEffect, useState } from 'react';

export default function Home() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            const response = await fetch('/api/logs'); 
            const result = await response.json();
            setLogs(result);
        };

        fetchLogs();
    }, []);

    return (
        <div>
            <h1>Access Logs</h1>
            <ul>
                {logs.map((log) => (
                    <li key={log._id}>
                        <strong>{log.ip}</strong> - Reference: {log.referrer}, TimeStamp: {log.timestamp}
                    </li>
                ))}
            </ul>
        </div>
    );
}
