function Event(){
    const check = (props) => {
        alert(props);
    }
    return(
        // <button onClick={check}>Click Me</button>
        <button onClick={()=>check("paise kama bhar za ke amoune 0 hai tera")}>Click me</button>
    )
}
export default Event;