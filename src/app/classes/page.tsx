"use client"

import { redirect } from "next/navigation"
import Link from "next/link"

export default function Classes() {

  const data = [
    {
      id: 1,
      name: 'DDD',
      description: 'Domain Driver Design',
      startDate: '6 April',
      endDate: '8 April',
      startTime: '9:00',
      endTime: '17:00',
      duration: 3,
      maxParticipant: 30,
      participants: 20,
      price: 2000,
      instructions: [
        {
          name: 'Roofimon',
        }
      ],
      teachingAssistant: [
        {
          name: 'Toptoppy'
        }
      ],
      location: 'Geeky Base All Star'
    },
    {
      id: 2,
      name: 'Hello World',
      description: 'Test Driver Design',
      startDate: '6 April',
      endDate: '8 April',
      startTime: '9:00',
      endTime: '17:00',
      duration: 3,
      maxParticipant: 30,
      participants: 15,
      price: 3000,
      instructions: [
        {
          name: 'Roofimon',
        }
      ],
      teachingAssistant: [
        {
          name: 'Toptoppy'
        }
      ],
      location: 'Geeky Base All Star'
    },
    {
      id: 3,
      name: 'Scrum Marster Compass',
      description: 'ตอนผู้สอนทั้ง 2 มาเป็น ScrumMaster ใหม่ ๆ เราพบช่วงเวลายากลำบากหลายครั้ง เราเคยสับสนว่า ScrumMaster ควรทำมากแค่ไหนจึงจะเพียงพอ หรือแค่ไหนที่เรียกว่าทำมากไปจนเป็นการริดรอนโอกาสเติบโตของทีม บางครั้งเราก็รู้สึกท้อแท้ เพราะปัญหาที่ทีมเผชิญมันหนักมากจนเราไม่รู้ว่าจะช่วยพวกเขาอย่างไร บางครั้งเราก็มองไม่เห็นว่าเราจะพาทีมที่เราดูแลไปไกลกว่านี้ได้อย่างไร ทำให้เราต้องหาหนังสือมาอ่าน ไปเรียน ไปแลกเปลี่ยนกับ ScumMaster ท่านอื่น จนก้าวผ่านช่วงเวลาเหล่านั้นมาได้ คอร์สนี้เราสองคนช่วยกันรวบรวมประสบการณ์ที่เราผ่านมาเพื่อมาแบ่งปันกับผู้เรียน ด้วยความหวังว่าจะช่วยให้มุมมองใหม่ ๆ ให้กำลังใจกับผู้ที่เป็น ScrumMaster, โค้ช หรือผู้นำท่านอื่น ๆ ที่สนใจเนื้อหาในคอร์สจะประกอบด้วยทั้งด้าน soft skills เช่น การสื่อสารเพื่อสานสัมพันธ์, การวางตัวเพื่อเปิดพื้นที่ให้ทีมได้เติบโต และด้าน hard skills เช่น เทคนิคการ facilitate meeting, การ facilitate decision making สำหรับคนหมู่มาก, การให้ feedback รวมถึงประสบการณ์ทั้งจาก internal coach และ external coach จากผู้สอนทั้งสอง การเรียนการสอนจะเน้นกิจกรรมเพื่อให้ผู้เข้าร่วมสัมผัสกับประสบการณ์ตรงว่าปัจจัยต่างๆมีผลการทบกับเราอย่างไร โดย 50% จะเป็น lecture และอีก 50% จะเป็น workshop',
      startDate: '6 April',
      endDate: '8 April',
      startTime: '9:00',
      endTime: '17:00',
      duration: 1,
      maxParticipant: 30,
      participants: 1,
      price: 4000,
      instructions: [
        {
          name: 'Roofimon',
        }
      ],
      teachingAssistant: [
        {
          name: 'Toptoppy'
        }
      ],
      location: 'Geeky Base All Star'
    },
    {
      id: 4,
      name: 'Hello World',
      description: 'Test Driver Design',
      startDate: '6 April',
      endDate: '8 April',
      startTime: '9:00',
      endTime: '17:00',
      duration: 3,
      maxParticipant: 30,
      participants: 30,
      price: 3000,
      instructions: [
        {
          name: 'Roofimon',
        }
      ],
      teachingAssistant: [
        {
          name: 'Toptoppy'
        }
      ],
      location: 'Geeky Base All Star'
    }
  ]

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1>Hello, Classes List Page!</h1>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-blue-300 dark:text-black">
          <tr>
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
            data.map((datas) => (
              ClassItem(
                datas.id,
                datas.startDate,
                datas.instructions,
                datas.price,
                datas.participants,
                datas.maxParticipant,
                datas.location
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
  startDate: string,
  instructions: Array<{ name: string }>,
  price: number,
  participants: number,
  maxParticipant: number,
  location: string
) {
  return <>
    <tr className="bg-white border-b dark:bg-white dark:border-gray-200 hover:bg-blue-100 dark:hover:bg-blue-100 text-black" key={id}>

      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {startDate}
      </th>
      <td className="px-6 py-4">
        {instructions?.map(instruction => (instruction?.name))}
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
