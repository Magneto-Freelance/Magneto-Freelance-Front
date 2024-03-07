import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Magneto Freelance',
	icons: {
		icon: 'public\Magneto_freelance_logo.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body className={inter.className}>
				<Toaster />
				{children}
			</body>
		</html>
	);
}
