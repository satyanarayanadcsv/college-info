
import { BrowserRouter, Route,  Switch } from 'react-router-dom';
import './App.css';
import { Collegeview } from './components/Collegeview';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { NotFound } from './components/NotFound';

function App() {


  return (
    <div>
      <BrowserRouter>
       <Navbar/>      
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/view/:id" component={Collegeview}/>
          <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
