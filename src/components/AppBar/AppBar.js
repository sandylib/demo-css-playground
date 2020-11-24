import React from 'react'
import {compose} from 'redux';
import { useHistory} from 'react-router-dom';
import styles from './AppBar.module.css'
import {withAuth, Guard} from '../../components/Authentication/Authentication'
import {APP_USER_ROLES} from '../../constants/applicationConstants'

const AppBar = ({logout, isAuthenticated}) => {
    const history = useHistory();
    const [value, setValue] = React.useState('');

    const onChange = (e) => setValue(e.target.value);

    const handleLogout = async () => {

        const result = await logout();
        if(result) history.push('/login');

    }

    return (
        <div className={styles.container}>
            <a className={styles.active} href="#"><i className="fa fa-home"></i></a> 
            <a href="#"></a> 
            <a href="#" className={styles.searchWrap}>
                <Guard allowed={[APP_USER_ROLES.BUSINESS]}>
                    <input value={value} className={styles.searchInput} id="search" onChange={onChange} />
                    <i className="fa fa-search"></i>
                </Guard>
            </a> 
            <a href="#"></a>
            <a href="#">{isAuthenticated &&( <i className="fa fa-sign-out" onClick={handleLogout}></i>)}</a> 
      </div>
    )
}

export default compose(withAuth)(AppBar)
