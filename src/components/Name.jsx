import React from 'react'
import { useState } from 'react'
import "./Name.css"

const Name = (props) => {
    const [name, setName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [lastName, setLastName] = useState("")
    const [maidenName, setMaidenName] = useState("")

    const {allInfo} = props

  return (
    <div className='central'>
            <div className='grayito'>
                <h1>What's your name?</h1>
                        
                <div>
                    <input  placeholder='name' value={name}
                         onChange = {(event)=> setName(event.target.value)}/>
                    
                </div>
                        
                <div>
                    <input  placeholder='Second Name' value={secondName}
                        onChange = {(event)=> setSecondName(event.target.value)}/>
                </div>
                       
                <div>
                    <input  placeholder='Last Name' value={lastName}
                        onChange = {(event)=> setLastName(event.target.value)}/>
                </div>
                        
                <div>
                    <input  placeholder='Maidens Name' value={maidenName}
                        onChange = {(event)=> setMaidenName(event.target.value)}/>
                </div>
                        
                  <button onClick={() => allInfo({name,secondName,lastName,maidenName})}>Enviar</button>
            </div>

            <div className='info'>{name} {secondName} {lastName} {maidenName}</div>
        <div></div>
    </div>
  )
}

export default Name