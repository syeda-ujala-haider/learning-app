//props=read-only prperties that are sahred beteen components
//a parents component can send data to child componenet
//<Component key=value/>

//proptypes=a mechanisim that ensures that the passed values 
// is of the correct datatype.
//age:PropTypes.number

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent?"Yes":"No"}</p>
        </div>
    );
}
Student.defualtProps={
    name:"Guest",
    age:0,
    isStudent:false
    
}
export default Student
/* in app do this
            <Student name="Ujala" age={20} isStudent={true}/>
            <Student name="Zain" age={24} isStudent={false}/>
            <Student name="Ali" age={34} isStudent={false}/>
            <Student/>
*/