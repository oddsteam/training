export default async function ClassDetail({ params }: { params: { id: string } }) {
  const classDetail = await getClassDetail(params.id)
  console.log(classDetail);
  return <div className="h-max max-w-full">
    <div className="p-16">
      <div className="flex flex-row gap-4">
        <div className="flow flow-col w-1/2 border-solid border-2 border-blue-600 rounded-lg">
          <p className="text-lg font-bold">{classDetail.name}</p>
          <p className="text-md font-bold">{classDetail.description}</p>
          <p> some thing some thing some thing some thing some thing some thing some thing some thing some thing some thing some thing some thing </p>
          <p>
            <span>เปิดรับ:</span>
            <span>{classDetail.maxParticipant} คน</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            category name
              </span>
          </p>
          <p>
          <span>วันที่เรียน: {classDetail.startDate} - {classDetail.endDate}</span>
        <span>เวลาที่เรียน: {classDetail.startTime} - {classDetail.endTime}</span>
            <span>สถานที่เรียน: </span>
            <a href="classDetail.googleMapUrl" >link</a>
          </p>
        </div>
        <div className="flex flex-col w-1/2 border-2 border-blue-600 rounded-lg">
          <p className="text-lg font-bold">สิ่งที่ต้องเตรียม</p>
          <p>{classDetail.prerequisite}</p>
        </div>
      </div>
      <div className="mt-4 border-solid border-2 border-blue-600 rounded-lg">
        <p className="font-bold">Instructor</p>
        <div className="flex flex-row gap-8 mt">
        <Instructor />
        <Instructor />
        </div>
      </div>
      <div className="w-full flex flex-row-reverse items-end">
        <button type="submit"className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  </div>
}

function Instructor() {
  return <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-80" src="https://via.placeholder.com/150" alt="Sunset in the mountains" />
    <div className="px-6 py-4"> 
      <div className="font-bold text-xl mb-2">Roof</div>
      <p className="text-gray-700 text-base text">
      Experience
      </p>
      <p className="text-gray-700 text-base">
      Experience
      </p>
    </div>
  </div>
}

async function getClassDetail(id: string) {
  const res = await fetch(`http://localhost:3001/classes/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getClassRemaing(id: string) {
  const res = await fetch(`http://localhost:3001/classes/${id}/remaing`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}