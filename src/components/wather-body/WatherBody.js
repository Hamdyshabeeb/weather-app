import './style.css';

export default function WatherBody({ status, error, wather }) {
	function convertToSearchedAreaDate(offset, utcDate) {
		const offsetMillseconds = offset * 1000;
		const utcDateMillseconds = utcDate * 1000;
		const localTime = utcDateMillseconds + offsetMillseconds;
		const searchedAreaDate = new Date(localTime);
		return searchedAreaDate;
	}

	function searchedDateParameter(offset, utcTime) {
		const searchedDate = convertToSearchedAreaDate(offset, utcTime);
		const pmAm = searchedDate.getUTCHours() >= 12 ? 'pm' : 'am';
		const hours = searchedDate.getUTCHours() % 12 || 12;
		const minutes = searchedDate.getUTCMinutes();

		return { hours, minutes, pmAm };
	}

	if (status === 'error') return <p>{error.message}</p>;
	if (status === 'loading' || status === 'idle')
		return <p>Please wait getting Data </p>;

	const sunrise = searchedDateParameter(wather.sys.sunrise, wather.timezone);
	const sunset = searchedDateParameter(wather.sys.sunset, wather.timezone);
	return (
		<div className="wather-body">
			{status === 'success' ? (
				<>
					<ul className="weather-info-main list">
						<li>
							<span className="info-title">Tempreture</span>
							<span>
								<b>{wather?.main?.temp}</b> &deg;C
							</span>
						</li>
						<li>
							<span className="info-title">Wind</span>
							<span>
								<b>{wather?.wind?.speed}</b> km/h
							</span>
						</li>
						<li>
							<span className="info-title">Humidity</span>
							<span>
								<b>{wather?.main?.humidity}</b> %
							</span>
						</li>
						<li>
							<span className="info-title">Cloud rate</span>
							<span>
								<b>{wather?.clouds?.all}</b> %
							</span>
						</li>
					</ul>

					<ul className="weather-info-sub list">
						<li>
							<span className="info-title">Country</span>
							<span>
								<b>{wather.sys.country}</b>
							</span>
						</li>

						<li>
							<span className="info-title">Sunrise</span>
							<span>
								<b>
									{sunrise.hours}:{sunrise.minutes}
								</b>
								{sunrise.pmAm}
							</span>
						</li>

						<li>
							<span className="info-title">Sunset</span>
							<span>
								<b>
									{sunset.hours}:{sunset.minutes}
								</b>
								{sunset.pmAm}
							</span>
						</li>
					</ul>
				</>
			) : (
				''
			)}
		</div>
	);
}
