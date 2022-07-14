import './styles/App.css'
import Mycomponent from './components/Mycomponent'
import Nav from './components/Nav'
import Border from './components/Border'

function App() {
  return (
    <div className="App">
      <Nav title={"react-vite-tailwind"} />
      <Mycomponent />
      <Border size="4">hello</Border>
    </div>
  )
}

export default App
