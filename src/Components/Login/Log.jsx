import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Log = () => {
    const [un,setUn]=useState('');
    const [pwd,setPas]=useState('');
    const[error,SetError] = useState(false);
    const navigate=useNavigate();

    const readusername = (event) =>{
        setUn(event.target.value);
        
    }
 
    const readpassword= (event) =>{
        setPas(event.target.value);
        
    }
const readalldata= (event) =>{
    event.preventDefault();
    if(un.trim ()===''|| pwd.trim ()==='')
    {
        SetError(true);
        return;
    }
    else{
        SetError(false);
        navigate('/Home')
        return;
    }

}
  return (
    <div>
    <h1 className='aa'>SIGN-IN</h1>
    <form className='bb'>
    username<input type='text' onChange={readusername}/><br/><br/>
    password<input type='password' onChange={readpassword}/><br/><br/>
    <button type='submit' onClick={readalldata}>submit</button>
    {Error && 'error occures'}
    </form>
    </div>
  )
}

export default Log