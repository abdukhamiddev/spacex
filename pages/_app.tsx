import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import client from "../services/apollo-client";
import Header from "../src/components/Header";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ApolloProvider client={client}>
				<Header />
				<Component {...pageProps} />;
			</ApolloProvider>
		</>
	);
}

export default MyApp;
