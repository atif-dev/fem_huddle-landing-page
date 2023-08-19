import flowingConversation from './images/illustration-flowing-conversation.svg';

const Conversations = ()=> {
    return(
        <div className='flow-convers_sec'>
            <div>
                <img src={flowingConversation} alt='flowing-conversations'/>
            </div>
            <div>
                <h1>Flowing Conversations</h1>
                <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                    just-in-time loading for a more natural flow.</p>
            </div>
        </div>
    );
}

export default Conversations;