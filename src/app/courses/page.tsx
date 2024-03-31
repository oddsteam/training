import Course from "./Course";

async function getData() {
  const res = await fetch("http://localhost:3001/courses");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface ICourse {
  courseName: string;
  outline: string;
  agenda: string;
  afterSaleService: string;
  images: string[];
  trainer: Trainer[];
}

interface Trainer {
  name: string;
  image: string;
  experience: string;
}

export default async function Page() {
  const data = await getData();
  const courses = data.data as ICourse[];
  return (
    <div className="m-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-6">
        {courses.length > 0
          ? courses.map((course) => <Course course={course} />)
          : []}
      </div>
    </div>
  );
}
