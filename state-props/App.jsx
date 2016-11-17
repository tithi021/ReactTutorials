import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        // Define state
        this.state = {
            header: "Header from props...",
            content: "Content from props..."
        }
    }

   render() {
      return (
         <div>
           <Header headerProp = {this.state.header} />
           <Content contentProp = {this.state.content} />
         </div>
      );
   }
}
// Header Component
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        )
    }
}
// Content Component
class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.contentProp}</h1>
            </div>
        )
    }
}
export default App;