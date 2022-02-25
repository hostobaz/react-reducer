import {useReducer, useState} from 'react';
import Todo from './Todo';


const ACTIONS = 
{
  ADD:"add-todo",
  TOGGLE:"toggle",
  DELETE:"delete"
};



function reducer( state, action)
{

  switch(action.type)
  {
    case ACTIONS.ADD :
      return [...state, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE:
      return state.map( item => {

        if( item.id === action.payload.id )
        {
          return { ...item, complete: !item.complete }
        }
        return item;
      });
    case ACTIONS.DELETE:
      return state.filter( (item) => item.id != action.payload.id );
    default:
      return state;
  }
}


function newTodo(name)
{
  return {id: Date.now(), name: name, complete:false }
}




function App() 
{
  const [ name, setName ] = useState("");
  const [ todos, dispatch ] = useReducer( reducer, [] );

  const saveButton = ( e ) =>
  {
    e.preventDefault();
    dispatch( { type:ACTIONS.ADD, payload:{name:name} } );
    setName("");

  };


  console.log(todos);

  return (
    <>
      <form onSubmit={saveButton}>
        <input value={ name } onChange={(e) => setName(e.target.value)} />
        <button type="button">Save</button>
      </form>
      <div>
        {todos.map( item => 
        {
          return <Todo key={item.id} data={item} dispatch={dispatch} />;
        })}
      </div>
    </>
  );
}





export default App;
