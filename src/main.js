import screenMockups from './images/screen-mockups.svg';
import Rating from './rating.js';
import Collaborate from './collaboration.js';
import Conversations from './conversations.js';
import Users from './users.js';
import GetStarted from './getstarted.js';
import SectionTop1 from './sectiontop1';
import SectionTop1B from './sectiontop1B';
import SectionB1 from './sectionB1';
import SectionB2 from './sectionB2';

const Main = ()=>{
    return(
        <main>
            <div className="second_sec">
                <h1 className="heading1">Build The Community Your Fans Will Love</h1>
                <p className="sec_sec-par">Huddle re-imagines the way we build communities. You have a voice, but so does 
                    your audience. Create connections with your users as you engage in genuine discussion.
                </p>
            <button className="sec-btn">Get Started For Free</button>
            </div>
            <div className="sec_sec_b">
                <img src={screenMockups} alt='mockups'/>
            </div>
            <Rating />
            <SectionTop1 />
            <Collaborate />
            <SectionTop1B />
            <Conversations />
            <SectionB1 />
            <Users />
            <SectionB2 />
            <GetStarted />
            
        </main>
    );
}

export default Main;