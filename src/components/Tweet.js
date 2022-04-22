const Tweet = (props) => {
    return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.message}</h3>
        <button>Delete</button>
        <button>Like</button>
    </div>)
}

export default Tweet