
import {APP_USER_ROLES} from '../constants/applicationConstants';

export const getTasks = (user) => {
   
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);


    switch(user) {

        case 'sandy':
            return [
            {
                type: 'card',
                theme :'red', 
                actionText :'Do it now',
                title : 'Overdue payments',
                content :'You have two overdue payments,Would you like to pay those now?',
                expired: false,
                actions: [
                    {
                        displayText: 'Pay now',
                        permissions: ['readyOnly'],
                        actionType: 'payNow'
                    },
                    {
                        displayText: 'Request extention',
                        permissions: ['wriable'],
                        actionType: 'requestExtendion'
                    }
                ],
            },
            {
                type: 'card',
                theme :'orange', 
                actionText : 'Do it now',
                title :'Overdue payments',
                content :'You have two overdue payments,Would you like to pay those now?',
                expired: false,
                actions: [
                    {
                        displayText: 'Pay now',
                        permissions: ['wriable']
                    },
                    {
                        displayText: 'Request extention',
                        permissions: ['wriable']
                    }
                ],
            },
            {
                type: 'card',
                theme :'blue', 
                actionText :'Do it now',
                title : 'Overdue payments',
                content :'You have two overdue payments,Would you like to pay those now?',
                expired: false,
                actions: [
                    {
                        displayText: 'Pay now',
                        permissions: ['wriable']
                    },
                    {
                        displayText: 'Remind me later',
                        permissions: ['wriable']
                    }
                ],
            },
            {
                type: 'card',
                theme :'blue', 
                actionText :'Do it now',
                title : 'Overdue payments',
                content :'You have two overdue payments,Would you like to pay those now?',
                expired: false,
                actions: [
                    {
                        displayText: 'Pay now',
                        permissions: ['wriable']
                    },
                    {
                        displayText: 'Remind me later',
                        permissions: ['wriable']
                    }
                ],
            },
            {
                type: 'card',
                theme :'blue', 
                actionText :'Do it now',
                title : 'Overdue payments',
                content :'You have two overdue payments,Would you like to pay those now?',
                expired: true,
                actions: [
                    {
                        displayText: 'Pay now',
                        permissions: ['wriable']
                    },
                    {
                        displayText: 'Remind me later',
                        permissions: ['wriable']
                    }
                ],
            },
         ]
       case 'peter' :
        return [ 
            {
                type: 'card',
                theme :'red', 
                actionText :'Do it now',
                title : 'Overdue payments',
                content :'You have two overdue payments,Would you like to pay those now?',
                expired: false,
                actions: [
                    {
                        displayText: 'Pay now',
                        permissions: ['readyOnly'],
                        actionType: 'payNow'
                    },
                    {
                        displayText: 'Request extention',
                        permissions: ['wriable'],
                        actionType: 'requestExtendion'
                    }
                ],
            },
            {
                type: 'card',
                theme :'orange', 
                actionText : 'Do it now',
                title :'Overdue payments',
                content :'You have two overdue payments,Would you like to pay those now?',
                expired: false,
                actions: [
                    {
                        displayText: 'Pay now',
                        permissions: ['wriable']
                    },
                    {
                        displayText: 'Request extention',
                        permissions: ['wriable']
                    }
                ],
            },
            {
                type: 'card',
                theme :'blue', 
                actionText :'Do it now',
                title : 'Overdue payments',
                content :'You have two overdue payments,Would you like to pay those now?',
                expired: false,
                actions: [
                    {
                        displayText: 'Pay now',
                        permissions: ['wriable']
                    },
                    {
                        displayText: 'Remind me later',
                        permissions: ['wriable']
                    }
                ],
            },
            
            
            
        {
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

export const getUserProfile = (user) => {
    switch(user) {

        case 'sandy':
            return [
            {
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