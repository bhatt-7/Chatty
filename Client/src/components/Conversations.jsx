import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ConversationsItem from './ConversationsItem';

function Conversations() {
    const lightTheme = useSelector((state) => state.themeKey);
    const dispatch = useDispatch();
    const [conversations, setConversations] = useState([
        {
            name: "Test1",
            lastMessage: "Last message 1",
            timeStamp: "today"
        },
        {
            name: "Test2",
            lastMessage: "Last message 2",
            timeStamp: "today"
        },
        {
            name: "Test3",
            lastMessage: "Last message 3",
            timeStamp: "today"
        },
    ]);

    return (
        <div className={`sb-conversation ${lightTheme ? '' : 'dark'}`}>
            {conversations.map(conversation => (
                <ConversationsItem props={conversation} key={conversation.name} />
            ))}
        </div>
    )
}

export default Conversations
