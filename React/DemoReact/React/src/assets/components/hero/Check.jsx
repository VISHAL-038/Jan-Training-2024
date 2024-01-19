function Check() {
  const checkAge = (props) => {
    if(props<18){
        alert("tenage");
    }
    else{
        alert("adult");
    }
  };
  return (
    <button onClick={()=>checkAge("20")}>Click me</button>
  );
}

export default Check;
