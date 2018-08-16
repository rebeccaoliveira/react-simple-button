import React from 'react';

class SimpleButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render () {
    return (
      <div className="simple-button">
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'hello' : 'bye' }
        </button>
      </div>
    );
  }
}

export default SimpleButton;
