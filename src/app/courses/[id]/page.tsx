"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CourseDetail = {
  courseName: string;
  images: string[];
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
      <div className="flex w-full justify-between p-4 gap-2 bg-white">
        <div className="flex flex-col w-2/3 bg-white rounded">
          <div className="w-full flex m-4">
            <div className="mb-4 w-1/2">
              <p className="font-bold">{data?.courseName}</p>
              <p className="font-medium"> This is detail course xxxxxx.</p>
            </div>
            <div className="m-4 w-1/2 flex flex-wrap gap-2">
              {data?.images.map((image) => (
                <Image
                  key={image}
                  src="/odds-buly.jpeg"
                  width={200}
                  height={200}
                  className="block rounded-lg object-center"
                  alt="Picture of the author"
                />
              ))}
            </div>
          </div>
          <div className="m-4">
            <h1>Outline</h1>
            <p> This is course outline.</p>
          </div>
          <div className="m-4">
            <h1>Outline</h1>
            <p> This is course outline.</p>
          </div>
        </div>
        <div className="mb-4 w-1/3 bg-green-200 rounded">Trainer</div>
      </div>
    </>
  );
}
