import React from 'react'

function Button({label}){
    return (
        <button
            className="bg-gray-300 text-gray-700 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
            type="button"
        >
            {label}
        </button>
    )
}


export default Button