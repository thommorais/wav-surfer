import React from 'react'

import Input from './Input'
import Label from './Label'

function Field({type, id, placeholder = '', label}){
    return (
        <div className="relative w-full">
            <Label value={label} bond={id} />
            <Input type={type} id={id} placeholder={placeholder} />
        </div>
    )

}

export default Field