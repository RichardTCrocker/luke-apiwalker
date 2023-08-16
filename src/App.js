import './App.css';
import {Route, Routes} from 'react-router-dom'
import People from './components/People'
import Planets from './components/Planets'
import Home from './views/Home'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <h1>Luke APIwalker</h1>
      <Form />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
      </Routes>

    </div>
  );
}

export default App;
