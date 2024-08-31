import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
      <div>
      <div className ="card mt-3" style={{"width": "18rem", "maxHeight": "360px"}}>
        <img src="..." className ="card-img-top" alt="..."/>
        <div className ="card-body">
            <h5 className ="card-title">Card title</h5>
            <p className ="card-text">this is text.</p>
            <div className='container w-100'></div>
            <select className='m-2 h-100 bg-success rounded'>
                {Array.from(Array(6), (e,i) => {
                    return(
                        <option key= {i+1} value= {i+1}>{i+1}</option>
                    )
                })}
            </select>
            <select className='m-2 h-100 bg-success rounded'>
                <option value= 'half'>Half</option>
                <option value= 'full'>Full</option>
            </select>
            <div>Total Price</div>
        </div>
    </div>
      </div>
      <div><Footer/></div>
    </div>
  )
}
