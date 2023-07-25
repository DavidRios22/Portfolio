import "./App.css"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Router from "./Router"
import store from "./Redux/store"
import Cursor from "./Components/Cursor"
import Navigation from "./Components/Navigation"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Cursor />
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
