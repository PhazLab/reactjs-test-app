function AgeButton({increment, decrement}) {
    return <>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
}

export default AgeButton