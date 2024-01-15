import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardContainer from './components/CardContainer';

function App() {
  const [users, setUsers] = useState();

  async function getUsers() {

    const fetchUsers = await fetch('users.json');

    const usersjson = await fetchUsers.json();

    setUsers(usersjson)
  }

  useEffect(()=>{
    getUsers();
  },[])


  return(
    <>
    <section className='main'>
      <header>
        <input type="text" placeholder='Search'/>
        <button>Search</button>
      </header>

      <CardContainer
        users={users}
      />
    </section>
    </>
  )

}

export default App
