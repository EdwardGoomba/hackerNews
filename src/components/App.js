import React from 'react';
import '../styles/App.css';
// components
import CreateLink from './CreateLink'
import LinkList from './LinkList'

const App = () => {
  return (
    <React.Fragment>
      <LinkList />
      <CreateLink />
    </React.Fragment>
  );
}

export default App;
