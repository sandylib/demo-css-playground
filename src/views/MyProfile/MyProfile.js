import React from 'react'
import Input from '../../components/Input/Input';
import  { getUserProfile }  from '../../utils/defaultUser';
import { useForm } from "react-hook-form";
import { CURRENT_USER } from '../../constants/applicationConstants'


const MyProfile = () => {
    const [fields, setFields] = React.useState();
    // const [validationErrors, setValidationErrors] = React.useState(null);
    const { register, handleSubmit, errors } = useForm();
    const [fetching, setFetching] = React.useState(true);

    React.useEffect( () => {

        const user = localStorage.getItem(CURRENT_USER);
        if(user) {
            const userObj = JSON.parse(user);
            const userProfile = getUserProfile(userObj.token);
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

    const onSubmit = (data) => {
        console.log(errors);
        console.log(data);
    }


    if(fetching) return <div>Loading...</div>

    return (
         <form onSubmit={handleSubmit(onSubmit)}>
            {
                fields.map( (field) => (
                    <Input 
                        key = {field.id} 
                        name={field.name}
                        value={field.value}   
                        disabled={field.permissions.find(p=> p !== 'writable')} 
                        ref={register({...field.validationRules})} 
                        error={errors[field.name]}
                        onChange={onHandleChange}
                        {...field}
                        />
                ))
            }
             <input type="submit" />
        </form>
    )
}

export default MyProfile
