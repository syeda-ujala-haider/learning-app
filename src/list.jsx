function List(props){
    // const fruits=[{id:1,name:"Apple",calories:95},
    //             {id:2,name:"Banana",calories:45},
    //             {id:3,name:"Peach",calories:67},
    //             // {id:4,name:"Coconut",calories:190}];
    
    // const ListItems=fruits.map(fruit=> <li>{fruit}</li>);
    // return (<ol>{ListItems}</ol>)
    //fruits.sort((a,b)=>a.name.localeCompare(b.name));Alphabetically
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));reverse
    //fruits.sort((a,b)=>b.calories-a.calories);

    //const lowcalfruits=fruits.filter(fruit=>fruit.calories<100)
    const Category=props.category;
    const itemlist=props.items;


    const ListItems=itemlist.map(item=> <li key={item.id}>
                                            {item.name}:&nbsp;
                                            <b>{item.calories}</b></li>);
    return (<>
        <h3 className="List-category">{Category}</h3>
        <ol className="List-items">{ListItems}</ol>

    </>
    
)

}

List.defaultProps={
    category:"Category",
    items:[]

}
export default List

/*
in app

const fruits=[{id:1,name:"Apple",calories:95},
                {id:2,name:"Banana",calories:45},
                {id:3,name:"Peach",calories:67},
                {id:4,name:"Coconut",calories:190}];

    const Vegetables=[{id:5,name:"Potato",calories:195},
                {id:6,name:"Onion",calories:145},
                {id:7,name:"Lady Finger",calories:67},
                {id:8,name:"Tomato",calories:345}];
    
    return(
<>
        {fruits.length>0? <List items={fruits} category="Fruits"/>:null}
         
        {Vegetables.length>0?<List items={Vegetables} category="Vegetables"/>:null}   

</>    );
*/