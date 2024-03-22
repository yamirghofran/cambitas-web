import React from 'react'
import { ArrowLeft, Circle } from 'lucide-react'
import { Link } from 'react-router-dom'

function AddInventoryItemComponent() {
    return (
      <div className="w-full mx-auto bg-white rounded-md border p-2">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Select category</h2>
          <div className="grid grid-cols-4 gap-4">
            <button className="flex flex-col items-center space-y-2">
              <PenToolIcon className="text-gray-500 bg-gray-200 p-4 rounded-full" />
              <span className="text-sm">Tools</span>
            </button>
            <button className="flex flex-col items-center space-y-2">
              <HardDriveIcon className="text-gray-500 bg-gray-200 p-4 rounded-full" />
              <span className="text-sm">Hardware</span>
            </button>
            <button className="flex flex-col items-center space-y-2">
              <ComponentIcon className="text-gray-500 bg-gray-200 p-4 rounded-full" />
              <span className="text-sm">Materials</span>
            </button>
            <button className="flex flex-col items-center space-y-2">
              <ComputerIcon className="text-gray-500 bg-gray-200 p-4 rounded-full" />
              <span className="text-sm">Computer Stuff</span>
            </button>
            <button className="flex flex-col items-center space-y-2">
              <LockIcon className="text-gray-500 bg-gray-200 p-4 rounded-full" />
              <span className="text-sm">Locksmith</span>
            </button>
            <button className="flex flex-col items-center space-y-2">
              <BiohazardIcon className="text-gray-500 bg-gray-200 p-4 rounded-full" />
              <span className="text-sm">Safety & Health</span>
            </button>
            <button className="flex flex-col items-center space-y-2">
              <PenToolIcon className="text-gray-500 bg-gray-200 p-4 rounded-full" />
              <span className="text-sm">Tools</span>
            </button>
            <button className="flex flex-col items-center space-y-2">
              <HardDriveIcon className="text-gray-500 bg-gray-200 p-4 rounded-full" />
              <span className="text-sm">Hardware</span>
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Choose a sub category</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Steel</span>
              <ChevronUpIcon className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Carbon Steel</span>
              <CheckIcon className="text-green-500" />
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Alloy Steel</span>
              <ChevronDownIcon className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Stainless Steel</span>
              <ChevronDownIcon className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Tool Steel</span>
              <ChevronDownIcon className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Joists, vaults and blocks</span>
              <ChevronDownIcon className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Pavements</span>
              <ChevronDownIcon className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Wood</span>
              <ChevronDownIcon className="text-gray-500" />
            </div>
            <div className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
              <span>Toilets</span>
              <ChevronDownIcon className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function BiohazardIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="11.9" r="2" />
        <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
        <path d="m8.9 10.1 1.4.8" />
        <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
        <path d="m15.1 10.1-1.4.8" />
        <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
        <path d="M12 13.9v1.6" />
        <path d="M13.5 5.4c-1-.2-2-.2-3 0" />
        <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
        <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
      </svg>
    )
  }
  
  
  function CheckIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }
  
  
  function ChevronDownIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }
  
  
  function ChevronUpIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    )
  }
  
  
  function ComponentIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
        <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
        <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
        <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
      </svg>
    )
  }
  
  
  function ComputerIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="8" x="5" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 18h2" />
        <path d="M12 18h6" />
      </svg>
    )
  }
  
  
  function HardDriveIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="22" x2="2" y1="12" y2="12" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        <line x1="6" x2="6.01" y1="16" y2="16" />
        <line x1="10" x2="10.01" y1="16" y2="16" />
      </svg>
    )
  }
  
  
  function LockIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  
  
  function PenToolIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    )
  }
  

function AddInventoryItem() {
  return (
    <div>
        <div className="border-b border-gray-200 py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/inventory" className="flex items-center">
            <ArrowLeft className="h-4 w-5 text-slate-600" />
            <p className="text-base text-slate-600">Back</p>
          </Link>
          <Circle fill="gray" strokeWidth={0} className="mx-2 h-1.5 w-1.5" />
          <h2>Add Item</h2>
        </div>
        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <button
            type="button"
            className="inline-flex items-center rounded bg-white px-3 py-1.5 text-sm text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded bg-green-800 text-white px-3 py-1.5 text-sm ring-1 ring-inset ring-gray-300 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            Save
          </button>
        </div>
      </div>
      <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_4fr_1fr] mx-auto p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold mb-4">Item Information</h2>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <AddInventoryItemComponent />
        </div>
      </div>

    </div>
  )
}

export default AddInventoryItem