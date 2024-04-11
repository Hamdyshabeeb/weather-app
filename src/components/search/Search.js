import { useState } from 'react';

export default function Search({ handelSearch }) {
	const [search, setSearch] = useState('');
	return (
		<div className="search">
			<input
				type="text"
				value={search}
				placeholder="Enter City Name"
				onChange={(e) => setSearch(e.target.value)}
			/>

			<button
				onClick={() => handelSearch(search)}
				disabled={!(search && search.length > 2)}
			>
				{' '}
				Search
			</button>
		</div>
	);
}
