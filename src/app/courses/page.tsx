"use client";
import { useEffect, useState } from "react";

export default async function Courses() {
  const [courses, setCourse] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourse(data?.data || []);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="m-6">
        <div className="grid grid-cols-4 gap-4">
          {courses.length > 0
            ? courses.map((course) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
                  <img
                    className="w-full"
                    src="https://s3.amazonaws.com/static.scrum.org/web/Scrum+Values.png"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Scrum</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>
              ))
            : []}
        </div>
      </div>
    </>
  );
}
