import React from 'react';

class SimpleButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {isTroggleOn: true}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isTroggleOn: !prevState.isTroggleOn
    }));
  }

  render () {
    return (
      <div>
        <button onClick= {this.handleClick}>{this.state.isToggleOn ? 'hello' : 'bye' }
        </button>
      </div>
    );
  }
}

export default SimpleButton;
