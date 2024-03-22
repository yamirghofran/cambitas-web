import React from 'react'

function GreenButton({ children }) {
  return (
    <button
        type="button"
        className="block w-full rounded-md bg-green-800 px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
      >
        {children}
      </button>
  )
}

export default GreenButton