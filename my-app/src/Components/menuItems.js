import { useState } from "react";


export const menuItems = [
    {
        name: 'About',
        url: '/about',
    },
    {
        name: 'Events',
        url: '/events',
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
                url: '/NonConVidReport',
            }
        ],
    },
    {
        name: 'Maps',
        url: '/maps',
        children: [
            {
                name: 'DOB Violation Map',
                url: '/DOBViolationMap',
            },
            {
                name: 'NYC Arrests Maps',
                url: '/NYCArrestMap',
            }
        ],
    },
    {
        name: 'Resources',
        url: '/resources',
    },
];


export default menuItems;

