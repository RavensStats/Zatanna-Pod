import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
        icon: 'home',
        label: 'Home',
        dest: '/',
    },
    {
        icon: 'local_fire_department',
        label: 'Matchups',
        dest: '/matchups',
    },
    {
        icon: 'swap_horiz',
        label: 'Trades & Waivers',
        dest: '/transactions',
    },
    {
        icon: 'article',
        label: 'Blog',
        dest: '/blog',
    },
    {
        icon: 'view_comfy',
        label: 'League Info',
        nest: true,
        children: [
            {
                icon: 'storage',
                label: 'Rosters',
                dest: '/rosters',
            },
            {
                icon: 'groups',
                label: 'Managers',
                dest: '/managers',
            },
            {
                icon: 'leaderboard',
                label: 'Standings',
                dest: '/standings',
            },
            {
                icon: 'view_comfy',
                label: 'Drafts',
                dest: '/drafts',
            },
            {
                icon: 'emoji_events',
                label: 'Trophy Room',
                dest: '/awards',
            },
            {
                icon: 'military_tech',
                label: 'Records',
                dest: '/records',
            },
            {
                icon: 'history_edu',
                label: 'Constitution',
                dest: '/constitution',
            },
            {
                icon: 'sports_football',
                label: 'Go to Sleeper',
                dest: `https://sleeper.app/leagues/${leagueID}`,
            },
            {
                icon: 'sports_football',
                label: 'Poison Ivy Pod',
                dest: `https://poison-ivy--pod.vercel.app/`,
            },
                        {
                icon: 'sports_football',
                label: 'Bane Pod',
                dest: `https://bane-pod.vercel.app/`,
            },
            {
                icon: 'sports_football',
                label: 'Lex Luthor Pod',
                dest: `https://lex-luthor-pod.vercel.app/`,
            },
            {
                icon: 'sports_football',
                label: 'The Joker Pod',
                dest: `https://the-joker-pod.vercel.app/`,
            },
            {
                icon: 'sports_football',
                label: 'Batman Pod',
                dest: `https://batman-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Zatanna Pod',
                dest: `https://Zatanna-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Green Lantern Pod',
                dest: `https://green-lantern-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Green Arrow Pod',
                dest: `https://green-arrow-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Doctor Strange Pod',
                dest: `https://doctor-strange-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Rocket Raccoon Pod',
                dest: `https://rocket-raccoon-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Captain America Pod',
                dest: `https://captain-america-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Iron Man Pod',
                dest: `https://iron-man-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'The Joker Pod',
                dest: `https://the-joker-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Thanos Pod',
                dest: `https://thanos-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Magneto Pod',
                dest: `https://magneto-pod.vercel.app/`,
            },            {
                icon: 'sports_football',
                label: 'Loki Pod',
                dest: `https://loki-pod.vercel.app/`,
            },
                        {
                icon: 'sports_football',
                label: 'Dark Phoenix Pod',
                dest: `https://dark-phoenix-pod.vercel.app/`,
            },
        ]
    },
    {
        icon: 'lightbulb',
        label: 'Resources',
        dest: '/resources',
    },
];
