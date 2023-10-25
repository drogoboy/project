import React,{useState} from 'react'

const Book = () => {

  const[bid,setBid] =useState('');
    const[pr,setPr] =useState('');
    const[bname,setBname] =useState('');
    const[gnr,setGnr] =useState('');

    const readbookid = (event) =>{
        setBid(event.target.value);
        console.log(event.target.value)
    }

const readbookprice = (event) =>{
        setPr(event.target.value);
        console.log(event.target.value)
    }

const readbookname = (event) =>{
        setBname(event.target.value);
        console.log(event.target.value)
    }
    const readbookgenre = (event) =>{
        setGnr(event.target.value);
        console.log(event.target.value)
    }












  return (
    <div>
     <h1>book-list</h1>
        <form>
            Book id:<input type='text'onChange={readbookid} />
            <br /><br />
            Book price:<input type='text'onChange={readbookprice} />
            <br /><br />
            Book name:<input type='text'onChange={readbookname} />
            <br /><br />
            genre:<input type='text'onChange={readbookgenre} />
            <br /><br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Book