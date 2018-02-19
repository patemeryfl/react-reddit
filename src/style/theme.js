import hex2rgba from 'hex2rgba';

const colors = {
	lighter: '#373940', // light blue
	dark: '#282c34', // dark blue
	darker: '#20232a', // really dark blue
	brand: '#61dafb', // electric blue
	brandLight: '#bbeffd',
	text: '#1a1a1a', // very dark grey / black substitute
	subtle: '#6d6d6d', // light grey for text
	subtleOnDark: '#999',
	divider: '#ececec', // very light grey
	note: '#ffe564', // yellow
	error: '#ff6464', // yellow
	white: '#ffffff',
	black: '#000000'
};

const SIZES = {
	xsmall: { min: 0, max: 599 },
	small: { min: 600, max: 779 },
	medium: { min: 780, max: 979 },
	large: { min: 980, max: 1279 },
	xlarge: { min: 1280, max: 1339 },
	xxlarge: { min: 1340, max: Infinity },

	// Sidebar/nav related tweakpoints
	largerSidebar: { min: 1100, max: 1339 },
	sidebarFixed: { min: 2000, max: Infinity }
};


const media = {
	between(smallKey, largeKey, excludeLarge = false) {
		if (excludeLarge) {
			return `@media (min-width: ${SIZES[smallKey].min}px) and 
					(max-width: ${SIZES[largeKey].min - 1}px)`;
		}
		if (SIZES[largeKey].max === Infinity) {
			return `@media (min-width: ${SIZES[smallKey].min}px)`;
		}
		return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].max}px)`;
	},
	greaterThan(key) {
		return `@media (min-width: ${SIZES[key].min}px)`;
	},

	lessThan(key) {
		return `@media (max-width: ${SIZES[key].min - 1}px)`;
	},

	size(key) {
		const size = SIZES[key];

		if (size.min === null) return media.lessThan(key);
		if (size.max === null) return media.greaterThan(key);
		return media.between(key, key);
	}
};

const fonts = {
	header: {
		fontSize: 60,
		lineHeight: '65px',
		fontWeight: 700,

		[media.lessThan('medium')]: {
			fontSize: 40,
			lineHeight: '45px'
		}
	},
	small: {
		fontSize: 14
	}
};

// Shared styles are generally better as components,
// Except when they must be used within nested CSS selectors.
// This is the case for eg markdown content.
const linkStyle = {
	backgroundColor: hex2rgba(colors.brandLight, 0.3),
	borderBottom: `1px solid ${hex2rgba(colors.black, 0.2)}`,
	color: colors.text,

	':hover': {
		backgroundColor: colors.brandLight,
		borderBottomColor: colors.text
	}
};
const sharedStyles = {
	link: linkStyle,

	articleLayout: {
		container: {
			display: 'flex',
			minHeight: 'calc(100vh - 60px)',
			[media.greaterThan('sidebarFixed')]: {
				maxWidth: 840,
				marginLeft: 'auto',
				marginRight: 'auto'
			}
		},
		content: {
			marginTop: 40,
			marginBottom: 120,

			[media.greaterThan('medium')]: {
				marginTop: 50
			}
		},
		sidebar: {
			display: 'flex',
			flexDirection: 'column',

			[media.between('small', 'sidebarFixed')]: {
				borderLeft: '1px solid #ececec',
				marginLeft: 80
			},

			[media.between('small', 'largerSidebar')]: {
				flex: '0 0 200px',
				marginLeft: 80
			},

			[media.between('small', 'medium')]: {
				marginLeft: 40
			},

			[media.greaterThan('largerSidebar')]: {
				flex: '0 0 300px'
			},

			[media.greaterThan('sidebarFixed')]: {
				position: 'fixed',
				right: 0,
				width: 300,
				zIndex: 2
			}
		},

		editLink: {
			color: colors.subtle,
			borderColor: colors.divider,
			transition: 'all 0.2s ease',
			transitionPropery: 'color, border-color',
			whiteSpace: 'nowrap',
			borderBottomWidth: 1,
			borderBottomStyle: 'solid',

			':hover': {
				color: colors.text,
				borderColor: colors.text
			}
		}
	}
};

export { colors, fonts, media, sharedStyles };
