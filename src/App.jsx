import React, { useState } from 'react'
import World from './components/World'
import DetailsForm from './components/DetailsForm'
import AgeButton from './components/AgeButton'
import Tasks from './components/Tasks'

function App() {
    const [age, setAge] = useState(24)
    const [name, setName] = useState('samuel')
    const [text, setText] = useState('')

    function increment() {
        setAge(age + 1)
    }

    function decrement() {
        if (age > 0) {
            setAge(age - 1)
        }
    }

    function handleChange(e) {
        setText(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setName(text)
        setText('')
    }



    return <>
        <h1>Hello <World name={name} age={age}/></h1>
        <DetailsForm change={handleChange} submit={handleSubmit} text={text} />
        <AgeButton increment={increment} decrement={decrement} />
        <hr />
        <Tasks/>
    </>
}

export default App