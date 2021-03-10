import React, { useState, useEffect,useRef } from 'react'
import './Chat.css';
import axios from 'axios';
import { Avatar } from '@material-ui/core';

const Chat = () => {
    const[input,setInput] = useState("");
    const [obj, setObj] = useState({type:"",message:""});
    const [messages,setMessages] = useState([]);
    const [changeData,setChangeData] = useState(false);

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(()=>{
        if(changeData){
            setMessages((oldMessages)=>{
                return [...oldMessages,obj];
            });
            scrollToBottom();
        }
    },[obj]);

    const inputEvent = (ev)=>{
        const {name,value} = ev.target;
        setInput(value);
    }

    const componentDidMount = async (input="")=>{
        const config = {"code": `(function name (param) {return param;})('${input}')`};
        const res = await axios.post('https://shrouded-oasis-94153.herokuapp.com/',config);
        setObj((oldItem)=>{
            return {
                ...oldItem,
                'type':'receiver',
                'message':res.data
            }
        });;
    }
    
    const sendMessage = (event)=>{
        event.preventDefault();
        setChangeData(true);
        setObj((oldItem)=>{
            return {
                ...oldItem,
                'type':'sender',
                'message':input
            }
        });
        const data = componentDidMount(input);
        setInput("");
    }


    return (
        <div className="chat">
            <div className="chat_body">
            {
                messages.map((user,index,arr)=>{
                    return (
                        <div className={`chit_chat ${user.type=='receiver' && 'chat_receiver'}`} key={index}>
                            <Avatar/>
                            <p className="chat_message">
                               {user.message}
                            </p>
                        </div>
                    )
                })
            }
                <div ref={messagesEndRef} />
            </div>
            <div className="chat_input">
                <form>
                    <input name="message" type="text" placeholder="Type message here ..." value={input} onChange={inputEvent}/>

                    <button type="submit" onClick={sendMessage}>click me</button>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
            </div>
        </div>
    )
}

export default Chat
