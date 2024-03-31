export default function Classes() {
  
  const data = [
    {
      id: 1,
      name: 'DDD',
      description: 'Domain Driver Design',
      schedule: '2024-04-20',
      duration: 3,
      participants: 20,
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
      schedule: '2024-04-20',
      duration: 3,
      participants: 20,
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
      schedule: '2024-05-04',
      duration: 1,
      participants: 20,
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
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1>Hello, Classes List Page!</h1>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Schedule
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3">
                    Participants
                </th>
                <th scope="col" class="px-6 py-3">
                    Instructions
                </th>
                <th scope="col" class="px-6 py-3">
                    Location
                </th>
            </tr>
        </thead>
        <tbody>
      { 
        data.map((datas) => ( 
        // <div key={datas.id}>{datas.id} sdsa</div> 
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={datas.id}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  { datas.name }
                </th>
                <td class="px-6 py-4">
                  { datas.description }
                </td>
                <td class="px-6 py-4">
                  { datas.schedule }
                </td>
                <td class="px-6 py-4 text-right">
                  { datas.duration }
                </td>
                <td class="px-6 py-4 text-right">
                  { datas.participants }
                </td>
                <td class="px-6 py-4">
                  { datas.instructions?.map(instruction => (instruction?.name) ) }
                </td>
                <td class="px-6 py-4">
                  { datas.location }
                </td>
                {/* <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
            </tr>
        ))
      }
      </tbody>
      </table>
    </div>
  )
}
