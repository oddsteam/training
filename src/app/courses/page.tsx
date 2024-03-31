import Course from "./course";
import { ICourse } from "./type";

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

export default async function Page() {
  const data = await getData();
  const courses = data.data as ICourse[];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-4 gap-6">
        {courses.length > 0
          ? courses.map((course) => <Course course={course} />)
          : []}
      </div>
    </div>
  );
}
