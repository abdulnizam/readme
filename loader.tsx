// components/Loader.js
import React from 'react';
import { useLoader } from '../context/LoaderContext';

const Loader = () => {
    const { loading } = useLoader();

    if (!loading) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <div className="spinner"></div>
            {/* Add spinner styling or an image */}
        </div>
    );
};

export default Loader;