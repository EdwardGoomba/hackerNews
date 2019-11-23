import React from 'react';
import { Switch, Route } from 'react-router-dom'
// styles
import '../styles/App.css';
// components
import CreateLink from './CreateLink'
import Header from './Header'
import LinkList from './LinkList'

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
