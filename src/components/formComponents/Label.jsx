import React from 'react'

function Label({bond, value }){
    return <label className="block uppercase text-gray-300 text-xs font-bold mb-2" htmlFor={bond}>{value}</label>
}

export default Label