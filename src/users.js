import users from './images/illustration-your-users.svg';

const Users = ()=> {
    return(
        <div className='collab-sec_main'>
            <div className='collab-sec'>
                <div>
                    <h1>Your Users</h1>
                    <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                        once signed in to your app, your users can start chatting immediately. </p>
                </div>
                <div>
                    <img src = {users} alt='collaborate'/>
                </div>
            </div>
        </div>
    );
}

export default Users;