import React, { Component } from 'react';
import ButtonDisplay from './components/ButtonDisplay';
import './css/app.css';
import TextInputDisplay from './components/TextInputDisplay';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Buttons</h1>
				<ButtonDisplay/>
				<h1>Text inputs</h1>
				<TextInputDisplay/>
      		</div>
		);
	}
}

export default App;