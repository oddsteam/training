export default async function ClassDetail() {
  const classDetail = await getClassDetail()
  console.log(classDetail);
  const classRemaing = await getClassRemaing()
  console.log(classRemaing);

return <div className="h-max">
  <div>
  <div>
      <h1>[{classDetail.name}]</h1>
      <h2>Class detail</h2>
      <p>{classDetail.description}</p>
      <p>
        <span>เปิดรับ:</span>
        <span>{classDetail.maxParticipant} คน</span>
        <span>category name</span>
      </p>
      <p>
        <span>วันที่เรียน: {classDetail.startDate} - {classDetail.endDate}</span>
        <span>เวลาที่เรียน: {classDetail.startTime} - {classDetail.endTime}</span>
        <span> </span>
        <span>สถานที่เรียน: </span>
        <a href={classDetail.googleMapUrl} >link</a>
      </p>
    </div>
    <div>
      <h2>สิ่งที่ต้องเตรียม</h2>
      <p>{classDetail.prerequisite}</p>
    </div>
  </div>
<div>
  <h2>Instructor</h2>
  <div>
      <div>
        <img src="https://via.placeholder.com/150" alt="instructor name" />
        <div>
          <h3>[Instructor name]</h3>
          <p>some thing some thing some thing some thing</p>
          <h3>
            <p>experience</p>
            <p>some thing some thing</p>
          </h3>
        </div>
      </div>
  </div>
</div>
  </div>
}

async function getClassDetail() {
  const res = await fetch('http://localhost:3001/classes/1')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getClassRemaing() {
  const res = await fetch('http://localhost:3001/classes/1/remaing')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}