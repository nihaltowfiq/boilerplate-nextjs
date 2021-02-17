import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../public/scss/app.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return <Component {...pageProps} />;
};

export default MyApp;
