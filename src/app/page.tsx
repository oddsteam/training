import Image from "next/image";
import { ICourse } from "./courses/type";
import Course from "./courses/course";

async function getData() {
  const resCourses = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`);
  const courses = await resCourses.json();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!resCourses.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return { courses };
}

export default async function Home() {
  const data = await getData();
  const courses = data.courses.data as ICourse[];

  return (
    <main className="grid grid-cols-1 gap-6 justify-start py-6">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-xl">Courses</h1>
        <div className="m-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {courses.length > 0
              ? courses.map((course) => (
                  <Course
                    key={course._id}
                    course={{
                      id: course._id,
                      courseName: course.courseName,
                      outline: course.courseOutline,
                      images: course.images,
                    }}
                  />
                ))
              : []}
          </div>
        </div>
      </div>
    </main>
  );
}
