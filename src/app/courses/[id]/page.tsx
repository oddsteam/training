import Image from "next/image";
export default function CourseDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="flex justify-between p-24">
        <div className="flex flex-col w-2/3 bg-white">
          <div className="w-full flex">
            <div className="mb-4 w-1/2">
              <h1>Course Name</h1>
              <p> This is detail course xxxxxx.</p>
            </div>
            <div className="m-4 w-1/2 flex flex-wrap gap-2">
              <Image
                src="/odds-buly.jpeg"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Image
                src="/odds-buly.jpeg"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Image
                src="/odds-buly.jpeg"
                width={200}
                height={200}
                alt="Picture of the author"
              />
              <Image
                src="/odds-buly.jpeg"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="mb-4">
            <h1>Outline</h1>
            <p> This is course outline.</p>
          </div>
        </div>
        <div className="mb-4 w-1/3 bg-green-200">Trainner</div>
      </div>
    </>
  );
}
