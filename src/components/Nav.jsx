import "../styles/Nav.css"

function Nav({title}) {
  return (
    <div className="nav bg-cyan-200">
      <div>{title}</div>
      <nav className="tabs">
        <button className="bg-blue-600 text-white">Tb1</button>
        <button className="bg-blue-600 text-white">Tb2</button>
        <button className="bg-blue-600 text-white">Tab3</button>
      </nav>
    </div>
  )
}

export default Nav
