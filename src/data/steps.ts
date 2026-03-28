export type Step = {
    number: string;
    title: string;
    para: string;
};

const steps: Step[] = [
    {
        number: '01',
        title: 'Register',
        para: 'Create an account with us using Google or Facebook.',
    },
    {
        number: '02',
        title: 'Download',
        para: 'Browse and Download the template that you like from the marketplace.',
    },
    {
        number: '03',
        title: 'Run',
        para: 'Follow the instructions to setup and customize the template to your needs.',
    },
];

export default steps;