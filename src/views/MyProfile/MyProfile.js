import React from 'react'
import Input from '../../components/Input/Input';
import  { getUserProfile, getTasks }  from '../../utils/defaultUser';
import { useForm } from "react-hook-form";
import { CURRENT_USER } from '../../constants/applicationConstants'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import styles from './MyProfile.module.css';
import Card from '../../components/Card/Card'
import PageTitle from '../../components/PageTitle/PageTitle';



const MyProfile = () => {
    const [fields, setFields] = React.useState();
    // const [validationErrors, setValidationErrors] = React.useState(null);
    const { register, handleSubmit, errors } = useForm();
    const [fetching, setFetching] = React.useState(true);

    React.useEffect( () => {

        const user = localStorage.getItem(CURRENT_USER);
        if(user) {
            const userObj = JSON.parse(user);
            const userProfile = getTasks(userObj.token);
            setFields(userProfile);
            setFetching(false);
        }

    }, [fetching]);

    
    const onHandleChange = (e) => {

        const idx = fields.findIndex(f=>f.id === e.target.id);
        const existing = fields[idx];
     
        const updated = {
            ...existing,
            value: e.target.value
        };
        const newList = Object.assign([...fields], {[idx]: updated})
        
        setFields(newList);

    }

    const onClick = (actionType) => (data) => {
        console.log(errors);
        console.log(data);
    }


    if(fetching) return <div>Loading...</div>

    return (
        <>
          <PageTitle size={'lg'} className={styles.header}>
           <h2>You have {fields.length} pending actions (over the next <a>30 days</a>)</h2> 
         </PageTitle>
         <AppWrapper size={'lg'}>
           
            <div className={styles.container}>
                {
                    fields.map( (input, key)=> {
                        switch(input.type) {
                            case 'card':

                            return <Card 
                                key={key}
                                theme={input.theme}
                                title={input.title}
                                expired={input.expired}
                                conten={input.content}
                                actionOneStatus={input.actions[0].permissions.some(p=>p=== 'readyOnly') ? 'disabled': ''}
                                actionOneText = {input.actions[0].displayText}
                                actionOneOnClick = {onClick(input.actions[0].actionType)}
                                actionTwoStatus = {input.actions[1].permissions.some(p=>p=== 'readyOnly') ? 'disabled': ''}
                                actionTwoText = {input.actions[1].displayText}
                                actionTwoOnClick = {onClick(input.actions[1].actionType)}
                                />

                            case 'input' : 

                                return <Input 
                                    key = {input.id} 
                                    name={input.name}
                                    value={input.value}   
                                    disabled={input.permissions.find(p=> p !== 'writable')} 
                                    ref={register({...input.validationRules})} 
                                    error={errors[input.name]}
                                    onChange={onHandleChange}
                                    {...input}
                                    />
                            

                        }
                        

                    })
                }
            </div>
        </AppWrapper>
        </>
    )
}

export default MyProfile
