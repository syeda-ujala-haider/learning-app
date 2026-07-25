import profilePic from './assets/pic.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picure"></img>
            <h2 className="card-title">Ujala</h2>
            <p className="card-description">I am a student of software Engineering and learning React </p>
        </div>
    );
}
export default Card