import React from 'react'

function AlertIcon({height, width}) {
    return <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={height} width={width}>
                <path fill="currentColor" d="M256 0C114.497 0 0 114.507 0 256c0 141.503 114.507 256 256 256 141.503 0 256-114.507 256-256C512 114.497 397.493 0 256 0zm0 472c-119.393 0-216-96.615-216-216 0-119.393 96.615-216 216-216 119.393 0 216 96.615 216 216 0 119.393-96.615 216-216 216z"/>
                <path fill="currentColor" d="M256 128.877c-11.046 0-20 8.954-20 20V277.67c0 11.046 8.954 20 20 20s20-8.954 20-20V148.877c0-11.046-8.954-20-20-20z" />
                <circle fill="currentColor" cx="256" cy="349.16" r="27" />
            </svg>
        </>
}

function Notification() {
    return null
    return (
            <div className="transition transform fixed bottom-0 inset-x-0 px-2 pb-10 sm:px-0 sm:pb-6">
                <div className="max-w-8xl mx-auto px-4 lg:px-6">
                    <div className="py-3 pl-6 pr-3 rounded-lg bg-gray-900 shadow-lg">
                        <div className="flex items-center justify-between flex-wrap">
                        <div className="w-full flex-1 md:flex items-center sm:w-0">
                            <div className="text-gray-200 flex items-center">
                                <AlertIcon height={20} width={20} />
                                <p className="pl-2 truncate flex-grow">
                                    for every component, expertly crafted by the creators of Tailwind CSS
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="rounded-md shadow-sm">
                                <a href="/pricing" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                                    Get early access →
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Notification