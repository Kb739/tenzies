import React from "react";
import Die from './components/Die';

export default function App() {
    const [allDice, setDice] = React.useState(allNewDice)
    function allNewDice() {
        const arr = []
        for (let i = 0; i < 10; i++)
            arr.push({
                id: i,
                value: Math.ceil(Math.random() * 6)
            })
        return arr;
    }

    const dice = allDice.map(data => <Die key={data.id} value={data.value} />)
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