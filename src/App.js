import React from "react";
import Die from './components/Die';

export default function App() {

    function allNewDice() {
        const arr = []
        for (let i = 0; i < 10; i++)
            arr.push({
                id: i,
                value: Math.ceil(Math.random() * 6)
            })
        return arr;
    }
    const dice = allNewDice().map(obj => <Die key={obj.id} value={obj.value} />)
    return (
        <div>
            <main>
                <div className="dice-container">
                    {dice}
                </div>
            </main>

        </div>
    )
}