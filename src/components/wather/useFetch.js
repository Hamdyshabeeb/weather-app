import { useEffect, useState } from 'react';

export default function useFetch(url) {
	const [data, setData] = useState();
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState(null);

	async function getData() {
		try {
			setStatus('loading');
			setError(null);
			setData(undefined);
			const res = await fetch(url);
			if (res?.ok) {
				const result = await res?.json();
				setStatus('success');
				setError(null);
				setData(result);
			} else {
				throw new Error(res?.statusText);
			}
		} catch (error) {
			setStatus('error');
			setError(error);
		}
	}

	useEffect(() => {
		getData();
	}, [url]);

	return { data, status, error };
}
