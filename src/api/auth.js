import defaultUser, {businessUser, noRolesUser} from '../utils/defaultUser';


export async function getUser(email, password) {
  try {
    //todo: Send request
    //temp code 
    switch(email) {
      case 'sandy':
        return {
          isOk: true,
          data: {...defaultUser, token: 'sandy'}
        }
       case 'peter':
         return {
          isOk: true,
          data: {...businessUser, token: 'peter'}
        }
      case 'lily': 
        return {
          isOk: true,
          data: {...noRolesUser, token: 'lily'}
        }
    }

  }
  catch {
    return {
      isOk: false
    };
  }
}


