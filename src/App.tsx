import { Toaster } from 'sonner'
import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'
import { useUsersStore } from './store/store'

function App () {
  const getUsers = useUsersStore(state => state.fetchUsers)
  const users = useUsersStore(state => state.users)

  const handleButton = () => {
    getUsers()
  }

  return (
    <div className='bg-slate-300 h-screen p-4'>
      {
        users.length === 0 && <button onClick={handleButton} >Start</button>
      }
      <ListOfUsers></ListOfUsers>
      <CreateNewUser></CreateNewUser>
      <Toaster richColors></Toaster>
    </div>
  )
}

export default App
