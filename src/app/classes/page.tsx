"use client"

import { redirect } from "next/navigation"
import Link from "next/link"

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/classes`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Classes() {
  const data = await getData();
  const classes = data.data
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1>Hello, Classes List Page!</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-300 dark:text-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              Class Name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Trainers
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Participants
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">

            </th>
          </tr>
        </thead>
        <tbody>
          {
            
            classes.map((classData) => (
              ClassItem(
                classData.id,
                classData.className,
                classData.startDate,
                classData.intructure,
                classData.price,
                classData.participants,
                classData.maxParticipant,
                classData.location
              )
            ))
          }
        </tbody>
      </table>
    </div>
  )
}



function ClassItem(
  id: number,
  className: string,
  startDate: string,
  intructures: Array<{ name: string }>,
  price: number,
  participants: number,
  maxParticipant: number,
  location: string
) {
  return <>
    <tr className="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-blue-100 dark:hover:bg-blue-100 text-black" key={id}>

      <td className="px-6 py-4">
        {className}
      </td>
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {startDate}
      </th>
      <td className="px-6 py-4">
        {intructures?.map(instruction => (instruction?.name))}
      </td>
      <td className="px-6 py-4">
        {price}
      </td>
      <td className="px-6 py-4">
        {participants} / {maxParticipant}
      </td>
      <td className="px-6 py-4">
        {location}
      </td>
      <td className="px-6 py-4">
        <button onClick={() => {
          //TODO: navigate to register screen
          window.location.href = `classes/${id}/register`
        }} className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Register</button>
      </td>
    </tr>
  </>;
}
