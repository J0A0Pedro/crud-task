import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { Button } from 'semantic-ui-react'

function App() {
  return (
    <Router>
      <div className="main">
        <h1>CRUD REACTJS</h1>

        <Button.Group>
          <Link to="/create">
            <Button>Create</Button>
          </Link>
          <Link to="/read">
            <Button>Read Tasks</Button>
          </Link>
        </Button.Group>

        <Routes>
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/update' element={<Update />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
