import 'bootstrap/dist/css/bootstrap.min.css'
import ListUser from './Components/ListUser'
import UserState from './context/UserState'
import FormUser from './Components/FormUser'

const App = () => {
  return (
    <>
      <UserState>
      <FormUser/>
      <ListUser />
      </UserState>
      

    </>
  )
}

export default App
