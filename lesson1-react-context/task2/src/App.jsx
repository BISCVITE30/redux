import React from 'react';
import Header from './Header';
import { user, userDataContext } from './user-context';

class App extends React.Component {
  state = {
    userData: user,
  };

  render() {
    return (
      <div className="page">
        <userDataContext.Provider value={this.state.userData}>
          <Header />
        </userDataContext.Provider>
      </div>
    );
  }
}

export default App;
