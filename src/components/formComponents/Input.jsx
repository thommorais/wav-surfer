import React from 'react'


function Input({placeholder = '', type = 'text', id}){
    return <input
                type={type}
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder={placeholder}
                id={id}
                name={id}
                style={{transition: "all 0.15s ease 0s"}}
            />
}

export default Input