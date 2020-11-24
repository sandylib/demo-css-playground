
import {APP_USER_ROLES} from '../constants/applicationConstants';

export const getUserProfile = (user) => {
    switch(user) {

        case 'sandy':
            return [ {
                type: 'input',
                id : '1',
                name : 'account',
                label : 'Account',
                value : '123445',
                permissions : ['readyOnly'],
                validationRules : {required: false},
            },
            {
                type: 'input',
                id : '2',
                name : 'name',
                label : 'Uer Name',
                value : 'sandy',
                permissions : ['writable'],
                validationRules : {required : true}
                
            }
         ]
       case 'peter' :
        return [ {
            type: 'input',
            id : '1',
            name : 'name',
            label : 'Name',
            value : 'peter',
            permissions : ['writable'],
            validationRules : {required: false},
        },
        {
            type: 'input',
            id : '2',
            name : 'name',
            label : 'Business Name',
            value : 'westpac',
            permissions : ['readyOnly'],
            validationRules : {required : true}
            
        }
     ]

    }
   
}

export const noRolesUser  = {isAuthenticated: true, token: null, permissions: [], expired: null};

export  const businessUser =  {isAuthenticated: true, token: null, permissions: [APP_USER_ROLES.BUSINESS], expired: null};

export default {isAuthenticated: true, token: null, permissions: [APP_USER_ROLES.INDIVIDUAL], expired: null};