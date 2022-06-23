function DetailsForm({change, text, submit}) {
    return <form onSubmit={submit}>
        <input type="text" value={text} onChange={change}/>
        <button type='submit'>Change Name</button>
    </form>
}

export default DetailsForm