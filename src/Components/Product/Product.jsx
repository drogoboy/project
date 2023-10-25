import React,{useState} from 'react'

const Product = () => {
    const[pid,setpid] =useState('');
    const[pp,setpp] =useState('');
    const[pname,setpname] =useState('');
    const[pdes,setpdes] =useState('');

    const readpid = (event) =>{
        setpid(event.target.value);
        console.log(event.target.value)
    }
    const readprice = (event) =>{
        setpp(event.target.value);
        console.log(event.target.value)
    }
    const readpname = (event) =>{
        setpname(event.target.value);
        console.log(event.target.value)
    }
    const readpdes = (event) =>{
        setpdes(event.target.value);
        console.log(event.target.value)
    }
 

  return (
    <div>
        <h1>product list</h1>
        <form>
            product id:<input type='text' onChange={readpid}/>
            <br /><br />
            product price:<input type='text' onChange={readprice}/>
            <br /><br />
            product name:<input type='text' onChange={readpname}/>
            <br /><br />
            product describtion:<input type='text' onChange={readpdes}/>
            <br /><br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Product