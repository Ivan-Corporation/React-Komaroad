import React, {Component} from 'react'
import Mouse from './Mouse';
import Cat from './Cat';


 export default class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Убеги от кота!</h1>
          <Mouse  render={mouse => ( 
            <Cat mouse={mouse} />
          )}/>
        </div>
      );
    }
    
  }
  
  