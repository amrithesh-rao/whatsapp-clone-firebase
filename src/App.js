import './App.css';
import { useEffect,useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Login from './Login';
import {useStateValue} from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue(null);

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ):
      (
    <div className="app_body"> 
    <Router>
              <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <Chat/>
                </Route>              
              </Switch>            
            </Router>
    </div>

      )}
    </div>
  );
}

export default App;
