import React, { useId } from 'react'
import Button from '../../components/button'
import TextField from '../../components/textfield'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/userSlice';

const AddUser = () => {
  const id = useId();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [values, setValues] = React.useState({
    name: '',
    email: '',
  })
  function handleAddUser () {
    setValues({ name: '', email: '' })
    dispatch(addUser({ 
      id: id, name: values.name, email: values.email }))
    navigate('/');
  }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <TextField label='Name' inputProps={{type: "text", placeholder: "john doe"}}  value={values.name} onChange={(e) => setValues({...values, name: e.target.value })}/>
      <br/>
      <TextField label='Quotes' inputProps={{type: "text", placeholder: "Quotes"}} onChange={(e) => setValues({...values, email: e.target.value })} value={values.email}/>
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  
  )
}

export default AddUser
