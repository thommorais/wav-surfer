import React from 'react'

function Button({ label, onClick, type = 'button' }) {

    const classes = `flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-lg text-gray-900 hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 mr-2 ${label === 'iniciar' ? 'bg-green-500 text-white' : 'bg-white'} ${label === 'iniciar' ? 'hover:bg-green-700' : 'bg-gray-700'}`

    return (
        <>
            <button
                className={classes}
                type={type}
                onClick={onClick}
            >
                {label === 'iniciar' && (
                    <svg className="-ml-1 mr-1 h-5 w-5 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                )}
                <span className={`${label === 'iniciar' ? 'text-white' : 'text-gray-300'}`}>{label}</span>
            </button>
        </>

    )
}


export default Button