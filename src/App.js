import React from 'react';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

class App extends React.Component {
  render() {
    return (
        <Layout>
          <Home />
        </Layout>
    );
  }
}

export default App;
