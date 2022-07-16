import React from "react";
import Die from './components/Die';

export default function App() {

    const dies = [];
    for (let i = 0; i < 10; i++) {
        dies.push(<Die key={i} value={i} />)
    }
    return (
        <div>
            <main>
                <div className="dice-container">
                    {dies}
                </div>
            </main>

        </div>
    )
}