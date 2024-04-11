import './App.css';
import Weather from './components/wather/Wather.js';
function App() {
	return (
		<div className="App">
			<h1>
				Discover the <strong>weather</strong> in
				<span className="block-lg"> every city you go</span>
			</h1>
			<Weather />
		</div>
	);
}

export default App;
