import './globals.css';

import { IChildrenProps } from '@/common/types/children.interface';

export default function RootLayout({ children }: IChildrenProps) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}
