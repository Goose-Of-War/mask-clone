import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'

import Layout from '@/components/Layout';

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (<Layout>
		<Component {...pageProps} />
		<Analytics />
	</Layout>);
}
