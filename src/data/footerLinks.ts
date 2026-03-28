export type FooterLink = {
	name: string;
	href?: string;
	status?: 'not-working';
};

export type FooterLinkColumn = {
	title: string;
	links: FooterLink[];
};

const footerLinks: FooterLinkColumn[] = [
	{
		title: 'Main',
		links: [
			{ name: 'Blog', status: 'not-working' },
			{ name: 'FAQs', status: 'not-working' },
			{ name: 'Support', status: 'not-working' },
			{ name: 'About Us', href: '#features' },
		],
	},
	{
		title: 'Product',
		links: [
			{ name: 'Log In', status: 'not-working' },
			{ name: 'Personal', href: '#pricing' },
			{ name: 'Business', href: '#pricing' },
			{ name: 'Team', href: '#pricing' },
		],
	},
	{
		title: 'Press',
		links: [
			{ name: 'Logos', status: 'not-working' },
			{ name: 'Events', status: 'not-working' },
			{ name: 'Stories', status: 'not-working' },
			{ name: 'Office', status: 'not-working' },
		],
	},
	{
		title: 'Team',
		links: [
			{ name: 'Career', status: 'not-working' },
			{ name: 'Founders', status: 'not-working' },
			{ name: 'Culture', status: 'not-working' },
			{ name: 'Onboarding', status: 'not-working' },
		],
	},
	{
		title: 'Legal',
		links: [
			{ name: 'GDPR', status: 'not-working' },
			{ name: 'Privacy Policy', status: 'not-working' },
			{ name: 'Terms of Service', status: 'not-working' },
			{ name: 'Disclaimer', status: 'not-working' },
		],
	},
];

export default footerLinks;