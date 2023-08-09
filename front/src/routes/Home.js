import React, {useState} from "react";
import {dbService} from "../fbase";

const Home = () => {
    const [xweet, setXweet] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("xweets").add({
            xweet, createAt: Date.now(),

        });
        setXweet("");
    }
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setXweet(value);
    }
    return (
        <div>

            <form onSubmit={onSubmit}>
                <input
                    value={xweet}
                    onChange={onChange}
                    type="text"
                    placeholder="temp"
                    maxLength={120}
                />
                <input type="submit" value="Xweet"/>
            </form>
        </div>
    );
};
export default Home;