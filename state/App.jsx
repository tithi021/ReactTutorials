import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        // State define for header and contents
        this.state = {
            header: "Header from state...",
            content: "content from state"
        }
    }
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h1>{this.state.content}</h1>
         </div>
      );
   }
}

export default App;