
function UserGreeting(props){
    // if(props.isloggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please login to continue</h2>
    // }
    return (props.isloggedIn?<h2 className="welcome-message">Welcome {props.username} </h2>: <h2 className="login-prompt">Please Log in to continue</h2>);
}
export default UserGreeting
/* in app
 <UserGreeting isloggedIn={false} username="Ujala"/>  
 
 */
//conditional rendering= allows you to constrol
//what gets rendered in your appliction based on
//certain conditions
//(hide,show, or change the componenet)