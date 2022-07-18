import React from "react";
import Die from './components/Die';
import Confetti from 'react-confetti'

export default function App() {
    const [allDice, setDice] = React.useState(allNewDice)
    const [tenzies, setTenzies] = React.useState(false)

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

    function reset() {
        setTenzies(false)
        setDice(allNewDice)
    }

    function rollDice() {
        if (tenzies)
            reset()
        else
            setDice(prevAllDice => prevAllDice.map(die => !die.isHeld ?
                { ...die, value: Math.ceil(Math.random() * 6) } : die))
    }


    function holdDice(id) {
        setDice(prevAllDice => prevAllDice.map(die =>
            die.id === id ? { ...die, isHeld: !die.isHeld } : die))

    }

    React.useEffect(() => {
        const value = allDice[0].value;
        const allHeldAndEqual = allDice.every(die => die.isHeld && die.value == value)
        if (allHeldAndEqual) {
            setTenzies(true)
            console.log('you won');
        }
    }, allDice)


    const dice = allDice.map(data => <Die
        key={data.id}
        value={data.value}
        isHeld={data.isHeld}
        onclick={() => holdDice(data.id)} />)

    return (
        <div>
            {tenzies && <Confetti recycle={false} />}
            <main>
                <div className="dice-container">
                    {dice}
                </div>
                <button className="roll" onClick={rollDice}>
                    {tenzies ? "NewGame" : "Roll"}
                </button>
            </main>

        </div>
    )
}