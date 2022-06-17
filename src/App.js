import { useEffect, useState, useMemo, useCallback } from "react";
import List from "./List";

const initialUsers = [ 
  { id: 1, name: "Luis" },
  { id: 2, name: "Maria" }
]

function App() {

  const [ users, setUsers ] = useState(initialUsers)
  const [ text, setText ] = useState("")
  const [ search, setSearch ] = useState("")

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text }
    // Traemos una copia delos anteriores Users y le agregamos uno nuevo. 
    setUsers([...users, newUser])
  }



  const handleDelete = useCallback((userId) => {
    // Regresamos los Id que sean distintos al Id pasado y este Id Sera Eliminado.
    // Nos regresa una copia del array original y elimina el elemento que coincida con el Id.
    setUsers(users.filter(user => user.id !== userId))
  }, [users]) // <== Nos indicara cuando vuelve a memorizarse la difinicion de una funcion 
  // Cundo cambia la lista de usuarios tanmbien cambia la lista de eliminacion. 

  const handleSearch = () => {
    setSearch(text);
  }

  // process, en lo que retorna la funcion del argumento, el arreglo de dependencias me diria a quien debo de escuchar para volver a ejecutar la memorizacion, solo lo hara cuando cambia algun valor. 
  const filteredUsers = useMemo(() => 
    // valor que retorna la funcion.
    users.filter(user => {
      // console.log('filter process')
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  ,[search, users]); // cada que cambie algo en el search se ejecutaria. 

  // Funcion computada. una funcion que retorna un valor.

  const printUsers = useCallback(() => {
    console.log('changed users', users)
  }, [users]) // Para que cuando cambien los usuarios se vuelvan a redefinir. 
  // Cunado cambie el estado user modifica esa definicion. 
  
  
  useEffect(() => {
    printUsers();
  }, [users, printUsers])
  
  useEffect(() => {
    // console.log('App render')
  })
  
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>
      <button onClick={handleAdd}>
        Add
      </button>
      <List users={filteredUsers} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
