import React from 'react';
import { API } from './view.jsx';
import InputField from './components/input.jsx';
import Button from './components/button.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.sendRequest = this.sendRequest.bind(this); 
  }

  async sendRequest(e) {
    e.preventDefault;
    const input = document.querySelector('.inputName');
    const url = `${API.SERVER_URL}?name=${input.value}`;

    const response = await (await fetch(url)).json();
    alert(response.gender);
    input.parentElement.reset();
  }

  render() {
    return (
      <form action="#">
        <InputField />
        <Button onClick={this.sendRequest}/>
      </form>        
    );
  }
}