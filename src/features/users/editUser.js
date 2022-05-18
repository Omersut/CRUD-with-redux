import React from 'react'
import Button from '../../components/button'
import TextField from '../../components/textfield'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../redux/userSlice';

const EditUser = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const users = useSelector(store => store.users)
    const existingUser = users.filter(user => user.id === params.id)
    const navigate = useNavigate()
    const {name, email} = existingUser[0]
    const [values, setValues] = React.useState({
      name: name,
      email: email
    })

    function handleEditUser () {
      setValues({ name: '', email: '' })
        dispatch(editUser({ 
            id: params.id, name: values.name, email: values.email }))
      navigate('/');
    }
  
    return (
      <div className='mt-10 max-w-xl mx-auto'>
        <TextField label='Name' inputProps={{type: "text", placeholder: "john doe"}}  value={values.name} onChange={(e) => setValues({...values, name: e.target.value })}/>
        <br/>
        <TextField label='Email' inputProps={{type: "email", placeholder: "mail"}} onChange={(e) => setValues({...values, email: e.target.value })} value={values.email}/>
        <Button onClick={handleEditUser}>Edit</Button>
      </div>
    )
}

export default EditUser