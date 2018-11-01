import React, { Component } from 'react';

import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Layout from './Components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
