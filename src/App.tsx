import React from 'react';
import './App.css';
import { APIGET } from './services/api.service';

export class App extends React.Component {
  apiService = APIGET;
  constructor(props: any) {
    super(props);
    this.apiService('comics').then((resp) => console.log(resp));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
      </div>
    );
  }
}
