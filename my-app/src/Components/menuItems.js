import { useState } from "react";


export const menuItems = [
    {
        name: 'About',
        url: '/about',
        children: [
            {
                name: 'About',
                url: '',
            }
        ],

    },
    {
        name: 'Events',
        url: '/events',
        children: [
            {
                name: 'Events',
                url: '',
            }
        ],
    },
    {
        name: 'Tools',
        url: '/tools',
        children: [
            {
                name: 'DOB Ticket Look-up Tool',
                url: '/DOBTickets',
            },
            {
                name: 'Nonconsensual Recording Report',
                url: '/NonConsensualVidReport',
            }
        ],
    },
    {
        name: 'Maps',
        url: '/maps',
        children: [
            // {
            //     name: 'DOB Violation Map',
            //     url: '/DOBViolationMap',
            // },
            {
                name: 'NYC Arrests Maps',
                url: '/NYCArrestMap',
            }
        ],
    },
    {
        name: 'Resources',
        url: '/resources',
        children: [
            {
                name: 'Resources',
                url: '',
            }
        ],
    },
];


export default menuItems;

