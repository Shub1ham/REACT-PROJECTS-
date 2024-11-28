import { Children } from "react";

const menus=[
    {
        lable:'Home',
        to:'/',
    },
    {
        lable:'Profile',
        to:'/profile',
        children:[
            {
                lable:'Details',
                to:'details',
                children:[
                    {
                        lable:'Location',
                        to:'location'
                    },
                ],
            },
        ],
    },
    {
        lable:'Setting',
        to:'/setting',
        children:[
            {
                lable:'Account',
                to:'account'
            },
            {
                lable:'Security',
                to:'security',
                children:[
                    {
                        lable:'Login',
                        to:'login'
                    },
                    {
                        lable:'Register',
                        to:'register',
                    },
                ],
            },
        ],
    },
];

export default menus