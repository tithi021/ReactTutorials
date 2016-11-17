import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Array: {this.props.propArray}</h1>
            <h1>Bool: {this.props.propBool ? "True...": "False..."}</h1>
            <h1>Func: {this.props.propFunc(2)}</h1>
            <h1>Func: {this.props.propNumber}</h1>
            <h1>Func: {this.props.propString}</h1>
            <h1>Func: {this.props.propObject.objectName1}</h1>
            <h1>Func: {this.props.propObject.objectName2}</h1>
            <h1>Func: {this.props.propObject.objectName3}</h1>
         </div>
      );
   }
}

App.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
}

App.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function(e) { return e},
    propNumber: 1,
    propString: "String value...",
    propObject: {
        objectName1: "Object value 1",
        objectName2: "Object value 2",
        objectName3: "Object value 3"
    }
}
export default App;