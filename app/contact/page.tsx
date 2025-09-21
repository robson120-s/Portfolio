import React from 'react'

interface Data {
  id: number;
  name: string;
  email: string;
  
}

const Contactpage = async() => {
    const res = await fetch(' https://jsonplaceholder.typicode.com/comments')
    const data: Data[] = await res.json()
  return (
    <div><h2>Contact me</h2>
    <ul>
      {data.map(Data => <li key={Data.id}>{Data.name} - {Data.email}</li>)}
    </ul>
     
    </div>
  )
}

export default Contactpage