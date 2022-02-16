import { useState  } from 'react';
import { BrowserRouter as Routes ,Route } from "react-router-dom";

import Home from './components/Home'
import Product from './components/Product'
import CartList from './components/CartList'
import Nav from './components/Nav'
import Side from './components/Side'
import Back from './components/Back'

function App() {

  const [side, setSide] = useState(false)


  return (
    <Router className="App">
      <main>
        <Nav click={() => setSide(true)}/>
        <Back show={side} click={() => setSide(false)}/>
        <Side show={side} click={() => setSide(false)}/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={CartList} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
