"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type Instructors =  {
  name: string;
  image: string;
}

export type CourseDetail = {
  courseName: string;
  outline: string;
  images: string[];
  duration: string;
  instructors: Instructors[];
};

export default function CourseDetail({ params }: { params: { id: string } }) {
  const [data, setData] = useState<CourseDetail>();
  const [isLoading, setLoading] = useState(true);
  const courseId = params.id;

  const getCourse = async (courseId: string): Promise<CourseDetail | null> => {
    try {
      const response = await fetch(`http://localhost:3001/course/${courseId}`);
      const data = await response.json();
      return data;
    } catch (reason) {
      return null;
    }
  };

  useEffect(() => {
    getCourse(courseId).then((data: any) => {
      console.log("data is ", data);
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="flex w-full justify-between gap-2 bg-white">
        <div className="flex flex-col w-2/3 bg-white border-r-2 border-blue-300">
          <div className="w-full flex m-4">
            <div className="ms-2 mb-6 w-1/2">
              <div className="mb-6">
                <p className="font-xl font-bold">Course Name</p>
                <p className="font-base">{data?.courseName}</p>
              </div>
              <div className="mb-6">
                <h1 className="font-xl font-bold">Outline</h1>
                <p className="font-base"> This is course outline.</p>
              </div>
              <div className="mb-6">
                <h1 className="font-xl font-bold">Duration</h1>
                <p> This is course outline.</p>
              </div>
            </div>

            <div className="m-4 w-1/2 flex flex-wrap gap-2">
              {data?.images.map((image) => (
                <Image
                  key={image}
                  src={image}
                  width={200}
                  height={200}
                  className="block rounded-lg object-center object-fill"
                  alt="Picture of the author"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mb-4 w-1/3 rounded flex flex-col">
          {data?.instructors?.length > 0 ? data?.instructors.map((instructor) => (
            <div className="flex flex-col items-center border-solid border-b-4 m-4">
              <Image
                key={instructor.image}
                src={instructor.image}
                width={200}
                height={200}
                className="block rounded-lg object-center"
                alt="Picture of the author"
              />
              <h1 className="m-5">instructor.name</h1>
            </div>
          )) : []}
        </div>
      </div>
    </>
  );
}
