import React from "react";

interface CourseProps {
  courseName: string;
  outline: string;
  agenda: string;
  afterSaleService: string;
  images: string[];
  // trainer: Trainer[];
}

const Course: React.FC<{ course: CourseProps }> = ({ course }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-2">
      <img
        className="w-full"
        src="https://s3.amazonaws.com/static.scrum.org/web/Scrum+Values.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{course.courseName}</div>
        <p className="text-[#333] text-base line-clamp-2">{course.outline}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#333] mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#333] mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#333] mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default Course;
