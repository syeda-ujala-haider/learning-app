// import styles from './Button.module.css'

function Button(){
    const styles={
    
        backgroundColor: "hsl(355, 95%, 32%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",

    }
    // let count=0;
    // const handleclick=(name)=>{
    //     if(count<3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // }

    //const handleClick=(event)=>console.log(event);
    const handleClick=(event)=>event.target.textContent="OUCH!🤕🤕";


    // const handleclick2=(name)=>{
    //     console.log(`${name} stop clicking me.`)
    // }
    return(
        //<button style={styles} onClick={()=>handleclick2("Ujala")}>Click Me</button>
        // <button style={styles} onClick={()=>handleclick("Ujala")}>Click Me</button>
        <button style={styles} onClick={(event)=>handleClick(event)}>Click Me 🙂</button>

    );
}
export default Button

//how to style components with css
//-------------------------
//(not including external frameworks or preprocessors)

//1.external
//2.modules
//create a new folder for your component
//3.inline


//click event= an interaction when a user clicks on a
//specific element. we can respond to clicks by passing a 
//callback to the on onclick event handler
