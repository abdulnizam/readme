// pages/_app.js
import { LoaderProvider } from '../context/LoaderContext';
import Loader from '../components/Loader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <LoaderProvider>
            <Loader />
            <Component {...pageProps} />
        </LoaderProvider>
    );
}

export default MyApp;