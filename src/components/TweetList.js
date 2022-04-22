import Tweet from "./Tweet";

const TweetList = (props) => {
    return (
    <div>
        <div className="tweet-list">
            <Tweet name={props.name} message={props.tweets}/>
            <Tweet name={props.name} message={props.tweets}/>
            <Tweet name={props.name} message={props.tweets}/>
            <button onClick={()=>props.setName("John")}>Click Again</button>
        </div>
    </div>)
}

export default TweetList