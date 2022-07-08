import React from 'react'
import { useState } from 'react'
import "./ContactInfo.css"

const ContactInfo = (props) => {
    
    const [email, setEmail] = useState("")
    const [cellphone, setCellPhone] = useState("")
    const { allInfo3 } = props

  return (
    
    <div className='central'>
    
      <div className='grayito2'>
        <h1>Contact's Info</h1>
        
            <div>
              <input placeholder='email' value={email}
                onChange = {(event)=> setEmail(event.target.value)}/>
            </div>
        
            <div>
              <input placeholder='cellphone' value={cellphone}
                onChange = {(event)=> setCellPhone(event.target.value)}/>
            </div>
        
          <button className='button3' onClick={()=> allInfo3({email,cellphone})}>Enviar</button>
      </div>

    <div className='info3'>{email} {cellphone}</div>

    </div>

  )
}

export default ContactInfo