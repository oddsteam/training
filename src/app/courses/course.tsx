import Image from "next/image";
import React from "react";

interface CourseProps {
  courseName: string;
  outline: string;
  images: string[];
}

const Course: React.FC<{ course: CourseProps }> = ({ course }) => {
  const image =
    course.images.length > 0 ? course.images[0] : "/thumbnail-placeholder.png";
  return (
    <div className="rounded overflow-hidden shadow-lg m-2">
      <Image
        src={image}
        width={1200}
        height={675}
        alt="Course Thumbnail"
        className="w-full aspect-video object-cover"
      />
      <div className="p-4 grid grid-cols-1 gap-y-4">
        <div className="grid grid-cols-1 gap-y-4">
          <div className="text-xl mb-2">{course.courseName}</div>
          <p className="text-[#333] text-base line-clamp-2">{course.outline}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-semibold text-[#333] bg-blue-100">
            #tech
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-semibold text-[#333] bg-orange-100">
            #design
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-semibold text-[#333] bg-red-100">
            #data
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-semibold text-[#333] bg-green-100">
            #business
          </span>
        </div>
      </div>
    </div>
  );
};

export default Course;
