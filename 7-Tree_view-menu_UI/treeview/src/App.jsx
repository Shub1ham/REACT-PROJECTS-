import './App.css'
import Treeview from './component/Tree_view'
import menus from './component/Data'
function App() {
  return(
    <Treeview menus={menus}></Treeview>
  )
}

export default App
