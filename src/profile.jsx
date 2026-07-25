function Profile()
{
    const imgUrl='./src/assets/pic.jpg'
    const handler=(e)=>e.target.style.display="none"
    return(
        <img onClick={(e)=>handler(e)} src={imgUrl}></img>
    )
}
export default Profile