import React, {Component} from 'react'

export default class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Вместо статического представления того, что рендерит <Mouse>,
            используем рендер-проп для динамического определения, что надо отрендерить.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }
