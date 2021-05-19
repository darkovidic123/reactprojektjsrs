import React, { Component } from "react";
export default class Forma extends Component {
  state = {
    ime: "",
    prezime: "",
    mail: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Podatci su uneseni", this.state.ime);
    window.alert("Hvala,registrirani ste.");
    
  };
  render() {
    return (

      <form class="forma">
          <p>Ime</p>
        <input
          placehoder="ime"
          value={this.state.ime}
          onChange={(e) => this.setState({ ime: e.target.value })}
        />
        <br />
        <p>prezime</p>
        <input
          placehoder="prezime"
          value={this.state.prezime}
          onChange={(e) => this.setState({ prezime: e.target.value })}
        />
        <br />
        <p>email</p>
        <input

          placehoder="mail"
          value={this.state.mail}
          onChange={(e) => this.setState({ mail: e.target.value })}
        />
        <br />
        <br />
        
        <button className='botun11' onClick={(e) => this.onSubmit(e)}>Pošalji</button>
      </form>

    );
  }
}