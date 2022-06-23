function World({name, age}) {
    return <span>world of {name} {age > 0 ? `your age is ${age}` : 'you are not in this world at this age 0' }</span>
}

export default World