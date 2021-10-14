export interface ProjectCard {
    key: number;
    title: string;
    personal: boolean;
    description: string;
    image?: URL;
    tags?: Tag[]
}

export interface ProjectDetails {
    key: number;
    title: string;
    personal: boolean;
    description: string;
    image?: URL;
    tags?: Tag[]
}

export interface Tag {
    color: string;
    description: string;
}

export const PROJECT_CARDS: Array<ProjectCard> = [
    {
        key: 1,
        title: 'Customer Relationship Management System',
        personal: true,
        description: 'A CRM system catered to the manufacturing & supply chain industy.',
        tags: [{ color: "blue", description: "React" }, { color: "green", description: "django" }]
    },
    {
        key: 2,
        title: 'Content Management System',
        personal: true,
        description: 'A responsive and dynamic CMS.',
        tags: [{ color: "blue", description: "React" }, { color: "green", description: "django" }]
    },
    {
        key: 3,
        title: 'Visual Feedback System',
        personal: true,
        description: 'An embedded Javscript tool to help startups collect feedback in a visual way.',
        tags: [{ color: "blue", description: "Vanilla.js" }, { color: "green", description: "FastAPI" }]
    },
    {
        key: 4,
        title: 'Crypto Currency',
        personal: true,
        description: 'Full-stack, innovative take on liquidity farming projects.',
        tags: [{ color: "blue", description: "React" }, { color: "green", description: "Solidity" }]
    },
    {
        key: 5,
        title: 'Thee-Dimensional Web Graphics',
        personal: true,
        description: 'The beautiful and interactive graphics as seen on this site',
        tags: [{ color: "blue", description: "Three.js" }]
    },
    {
        key: 6,
        title: 'ElderSafe',
        personal: false,
        description: 'An anti-scam mobile application',
        tags: [{ color: "blue", description: "React Native" }, { color: "green", description: "FastAPI" }]
    },
    {
        key: 7,
        title: 'Omni-Plus Systems',
        personal: false,
        description: 'A suite of custom-made business productivity software',
        tags: [{ color: "green", description: "Django" }]
    },
    {
        key: 8,
        title: 'Atlas',
        personal: false,
        description: 'An operating system for kitchens',
        tags: [{color:"blue",description:"React"},{ color: "green", description: "Ruby on rails" }]
    },
];


export const PROJECT_DETAILS: Array<ProjectDetails> = [
    {
        key: 1,
        title: 'Customer Relationship Management System',
        personal: true,
        description: 'A CRM system catered to the manufacturing & supply chain industy.',
        tags: [{ color: "blue", description: "React" }, { color: "green", description: "django" }]
    },
    {
        key: 2,
        title: 'Content Management System',
        personal: true,
        description: 'A responsive and dynamic CMS.',
        tags: [{ color: "blue", description: "React" }, { color: "green", description: "django" }]
    },
    {
        key: 3,
        title: 'Visual Feedback System',
        personal: true,
        description: 'An embedded Javscript tool to help startups collect feedback in a visual way.',
        tags: [{ color: "blue", description: "Vanilla.js" }, { color: "green", description: "FastAPI" }]
    },
    {
        key: 4,
        title: 'Crypto Currency',
        personal: true,
        description: 'Full-stack, innovative take on liquidity farming projects.',
        tags: [{ color: "blue", description: "React" }, { color: "green", description: "Solidity" }]
    },
    {
        key: 5,
        title: 'Thee-Dimensional Web Graphics',
        personal: true,
        description: 'The beautiful and interactive graphics as seen on this site',
        tags: [{ color: "blue", description: "Three.js" }]
    },
    {
        key: 6,
        title: 'ElderSafe',
        personal: false,
        description: 'An anti-scam mobile application',
        tags: [{ color: "blue", description: "React Native" }, { color: "green", description: "FastAPI" }]
    },
    {
        key: 7,
        title: 'Omni-Plus Systems',
        personal: false,
        description: 'A suite of custom-made business productivity software',
        tags: [{ color: "green", description: "Django" }]
    },
    {
        key: 8,
        title: 'Atlas',
        personal: false,
        description: 'An operating system for kitchens',
        tags: [{color:"blue",description:"React"},{ color: "green", description: "Ruby on rails" }]
    },
];