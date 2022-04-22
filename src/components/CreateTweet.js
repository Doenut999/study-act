const CreateTweet = (props) => {


    const userInputHandler = (event) => {
        props.setTextInput(event.target.value)
    }

    const submitTweetHandler = (event) => {
        event.preventDefault();
        props.setTweets([...props.tweets, props.textInput]);
        props.setTextInput("")
    }
    return (
    <div className="tweet">
        <form onSubmit={submitTweetHandler} onChange={userInputHandler}>
            <textarea cols="50" rows="5" value={props.textInput}>

            </textarea>
            <button >Submit</button>
            <h1 onClick={()=> props.setTextInput("")}>{props.textInput}</h1>
        </form>
    </div>)
}

export default CreateTweet