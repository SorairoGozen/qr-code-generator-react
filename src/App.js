import React, { Component } from 'react';
import './App.css';
const QRCode = require('qrcode.react');
 class App extends Component {
   constructor(props){
     super();
     this.state={
      qrCode:'',
      input: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateQrCode = this.generateQrCode.bind(this);
   }
   generateQrCode(){
     if(this.state.input.length<50){
      this.setState({
        qrCode : this.state.input,
        error: '',
        input : '',
      } )
     }
     else{
      this.setState({
        input : '',
        error: 'Too long string'
      } );

     }
      
   }
   handleChange(e) {
    this.setState({ input: e.target.value });
  }
  render (){
    return(
      <div className="App">
        <h1>Generate a QR CODE</h1>
        <input type='text' name='textToGenerate' onChange={ this.handleChange } value={this.state.input} placeholder='Text to code' />
        <button onClick={this.generateQrCode}>Generate</button><br/><br/>
        <div style={{color: "display"}}>
          <p>{this.state.error}</p>
          <QRCode value={this.state.qrCode} />
        </div>
      </div>
    )
  }
}
export default App;
