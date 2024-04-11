import useFetch from './useFetch';
import Search from '../search/Search';
import { useState } from 'react';
import WatherBody from '../wather-body/WatherBody';
import './style.css';

export default function Wather() {
	const [city, setCity] = useState('cairo');
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=86ff9662c54e7ada90e189d51a509adc`;
	const { data: wather = {}, status, error } = useFetch(url);

	function handelSearch(cityName) {
		setCity(cityName);
	}
	return (
		<div className="wrapper">
			<h2 className="title"> {city ? city : ''}</h2>
			<Search search={city} handelSearch={handelSearch} />
			<WatherBody error={error} status={status} wather={wather} />
		</div>
	);
}
