import axios from 'axios'
import React, { useState } from 'react'

const TestApi = () => {
    const [name,setName] = useState()
    const [phone,setPhone] = useState()
    const [address,setAddress] = useState()

    const [severResult,setServerResult] = useState()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(name,phone,address);
        try {
            
            const result = await axios.post('http://localhost:3000/api/msg',{
                name,
                phone,
                address
            })
            console.log(result?.data);
            setServerResult(result?.data?.msg)
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <>
        <form action="">
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} />
            <input type="text" placeholder='Address' onChange={(e)=>setAddress(e.target.value)} />
            <h1>{name}</h1>
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
        {severResult && <p>Message from Server is {severResult}</p>}
    </>
  )
}

export default TestApi