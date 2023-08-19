import growTogether from './images/illustration-grow-together.svg';

const Collaborate = ()=> {
    return(
        <div className='collab-sec_main'>
            <div className='collab-sec'>
                <div>
                    <h1>Grow Together</h1>
                    <p>Generate meaningful discussions with your audience and build a strong, loyal community. 
                    Think of the insightful conversations you miss out on with a feedback form. </p>
                </div>
                <div>
                    <img src = {growTogether} alt='collaborate'/>
                </div>
            </div>
        </div>
    );
}

export default Collaborate;