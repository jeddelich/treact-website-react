export type FooterLinkColumn = {
	title: string;
	links: string[];
};

const footerLinks: FooterLinkColumn[] = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About Us'],
	},
	{
		title: 'Product',
		links: ['Log In', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Team',
		links: ['Career', 'Founders', 'Culture', 'Onboarding'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];

export default footerLinks;