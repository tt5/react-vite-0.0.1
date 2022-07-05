import './styles/App.css'
import Mycomponent from './components/Mycomponent'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav title={"react-vite-tailwind"} />
      <Mycomponent />
    </div>
  )
}

export default App
