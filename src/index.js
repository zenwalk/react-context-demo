import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const ThemeContext = React.createContext({
  theme: 'teal',
  toggleTheme: () => { }
});

function Button(props) {
	return (
		<ThemeContext.Consumer>
			{({theme, toggleTheme}) => {
        return ( 
          <>
            <h1 style={{backgroundColor: theme}}>helloworld</h1>
            <button onClick={toggleTheme}>{props.children}</button>
          </>
        )
			}}
		</ThemeContext.Consumer>
	);
}

function Toolbar() {
	return (
		<div>
			<Button>change Theme</Button>
		</div>
	);
}

class App extends React.Component {
   
  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'teal' ? 'lightblue' : 'teal'
    }))
  }

  state = {
    theme: 'teal',
    toggleTheme: this.toggleTheme
  };
    
	render() {
		return (
			<div className="App">
				<ThemeContext.Provider value={this.state}>
					<Toolbar />
				</ThemeContext.Provider>
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
