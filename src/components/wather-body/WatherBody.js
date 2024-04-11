export default function WatherBody({ status, error, wather }) {
	if (status === 'error') return <p>{error.message}</p>;
	if (status === 'loading' || status === 'idle')
		return <p>Please wait getting Data </p>;

	return (
		<div className="wather-body">
			{status === 'success' ? (
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
			) : (
				''
			)}
		</div>
	);
}
