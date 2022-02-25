
function Todo ( { data, dispatch }) 
{
    return(
      <div style={{color: data.complete ? "green" : "red"}}>
        <span>{data.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{data.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => { dispatch( {type:"toggle", payload: {id: data.id} } ) } }>toggle</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={ () => { dispatch( {type:"delete", payload: {id: data.id} } ) } } >delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    );
  
  };

  export default Todo;