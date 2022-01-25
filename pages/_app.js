import Layout from "components/Layout";

import "styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Layout />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
