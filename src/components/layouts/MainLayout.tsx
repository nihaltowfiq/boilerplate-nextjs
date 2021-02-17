import { Fragment } from 'react';

const MainLayout = (props: propsType): JSX.Element => {
	const { children } = props;

	return (
		<Fragment>
			<main>{children}</main>
		</Fragment>
	);
};

export default MainLayout;

interface propsType {
	children: JSX.Element | JSX.Element[];
}
