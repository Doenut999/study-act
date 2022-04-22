import {useState} from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

const App = () => {
    const [name, setName] = useState("Dev Ed")
    // const message = "I went to sleep today wow"
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);

    const sayHelloHandler = () => {
        setName("Florin Pop")
    }

    return (
    <div>
        <h1>Hello {name}</h1>
        <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
        <TweetList name={name} tweets={tweets} setName={setName} />
        <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;
