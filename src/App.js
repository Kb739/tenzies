import React from "react";
import Die from './components/Die';

export default function App() {
    const [allDice, setDice] = React.useState(allNewDice)

    function allNewDice() {
        const arr = []
        for (let i = 0; i < 10; i++)
            arr.push({
                id: i,
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        return arr;
    }

    function rollDice() {
        setDice(prevAllDice => prevAllDice.map(die => !die.isHeld ?
            { ...die, value: Math.ceil(Math.random() * 6) } : die))
    }


    function holdDice(id) {
        setDice(prevAllDice => prevAllDice.map(die =>
            die.id === id ? { ...die, isHeld: !die.isHeld } : die))

    }

    const dice = allDice.map(data => <Die
        key={data.id}
        value={data.value}
        isHeld={data.isHeld}
        onclick={() => holdDice(data.id)} />)

    return (
        <div>
            <main>
                <div className="dice-container">
                    {dice}
                </div>
                <button className="roll" onClick={rollDice}>Roll</button>
            </main>

        </div>
    )
}