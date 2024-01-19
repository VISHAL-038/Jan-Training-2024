function DynamicComp(){
    let name="vishal"
    const obj ={
        name:"vis",
        age:23
    }
    return(
        <h1>My name is {name} , surname is {obj.name} and age is {obj.age}</h1>
    )
}

export default DynamicComp;