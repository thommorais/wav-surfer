import React from 'react'


function Input({ placeholder = '', type = 'text', id, onChange }) {

    if (type === 'file') {
        return (
            <div className="overflow-hidden relative" onClick={onChange}>
                <label htmlFor={id} className="text-logincolor hover:text-gray-500 py-3 px-4 w-full inline-flex items-center justify-center cursor-pointer">
                    <svg className="pointer-events-none fill-current" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                    </svg>
                    <span className="ml-2 pointer-events-none">{placeholder}</span>
                </label>
            </div>
        )
    }

    return (
            <input
                type={type}
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder={placeholder}
                id={id}
                name={id}
                onChange={onChange}
                style={{transition: "all 0.15s ease 0s"}}
            />
    )
}

export default Input