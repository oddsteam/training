export default async function ClassDetail() {
  const classDetail = await getClassDetail()
  console.log(classDetail);
  const classRemaing = await getClassRemaing()
  console.log(classRemaing);

return <div className="h-max">
  <div>
  <div>
      <h1>[Class name]</h1>
      <h2>Class detail</h2>
      <p>some thing some thing some thing some thing</p>
      <p>
        <span>เปิดรับ:</span>
        <span>20 คน</span>
        <span>category name</span>
      </p>
      <p>
        <span>วันที่เรียน: วันจันทร์ ที่ 1 มกราคม 2564 - วันศุกร์ ที่ 31 ธันวาคม 2564</span>
        <span> </span>
        <span>สถานที่เรียน: </span>
        <a href="www.google.com" >link</a>
      </p>
    </div>
    <div>
      <h2>สิ่งที่ต้องเตรียม</h2>
      <p>some thing some thing some thing some thing </p>
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