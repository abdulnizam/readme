import React from 'react';
import { useLoader } from '../context/LoaderContext';

const ExamplePage = () => {
    const { showLoader, hideLoader } = useLoader();

    const fetchData = async () => {
        showLoader();
        try {
            const response = await fetch('/api/some-endpoint');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            hideLoader();
        }
    };

    return (
        <div>
            <h1>Example Page</h1>
            <button onClick={fetchData}>Fetch Data</button>
        </div>
    );
};

export default ExamplePage;