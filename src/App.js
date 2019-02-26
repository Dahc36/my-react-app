import React, { Component } from 'react';

import MyCompOne from './MyCompOne';
import MyCompTwo from './MyCompTwo';

class App extends Component {
  state = {
    value: 0
  }
  onSub = () => {
    this.setState(state => ({ value: state.value - 1 }));
  }
  onAdd = (e) => {
    this.setState(state => ({ value: state.value + 1 }));
  }

  render() {
    return (
      <div>
        <MyCompOne value={this.state.value} />
        <MyCompTwo onSub={this.onSub} onAdd={this.onAdd} />
      </div>
    );
  }
}
export default App;
