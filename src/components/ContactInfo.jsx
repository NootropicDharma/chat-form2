import React from 'react'
import { useState } from 'react'
import "./ContactInfo.css"

const ContactInfo = (props) => {
    
    const [email, setEmail] = useState("")
    const [cellphone, setCellPhone] = useState("")
    const { allInfo } = props

  return (
    
    <div className='central'>
    
      <div className='grayito2'>
        <h1>Contact's Info</h1>
        <form>
            <input placeholder='email' value={email}
              onChange = {(event)=> setEmail(event.target.value)}/>
        </form>
        <form>
            <input placeholder='cellphone' value={cellphone}
              onChange = {(event)=> setCellPhone(event.target.value)}/>
        </form>
          <button onClick={()=> allInfo()}></button>
      </div>

    <div className='info3'>{email} {cellphone}</div>

    </div>

  )
}

export default ContactInfo