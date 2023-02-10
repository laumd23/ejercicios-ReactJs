import './App.css'
import Counter from './ExerciseOne'
import Greeting from './ExerciseTwo'
import { Header } from './Pages/Header'
import { Restaurant } from './Pages/Restaurant'


function App() {

  return (
    <div className="App">
      <Counter initialCount={0} number={1} />
      <Greeting  name = 'Euralio'/>
      <Header/>
      <Restaurant/>
    </div>
  )
}

export default App
