import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
            <h1>{this.props.contentProp}</h1>
         </div>
      );
   }
}

export default App;