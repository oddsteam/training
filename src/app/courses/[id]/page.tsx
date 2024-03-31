import Image from "next/image";
export default function CourseDetail({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="flex justify-between m-4 gap-2">
        <div className="flex flex-col w-2/3 bg-white rounded">
          <div className="w-full flex m-4">
            <div className="mb-4 w-1/2">
              <p className="font-bold">Course Name</p>
              <p className="font-medium"> This is detail course xxxxxx.</p>
            </div>
            <div className="m-4 w-1/2 flex flex-wrap gap-2">
              <Image
                src="/odds-buly.jpeg"
                width={200}
                height={200}
                className="block rounded-lg object-center"
                alt="Picture of the author"
              />
              <Image
                src="/odds-buly.jpeg"
                width={200}
                height={200}
                className="block rounded-lg object-center"
                alt="Picture of the author"
              />
              <Image
                src="/odds-buly.jpeg"
                width={200}
                height={200}
                className="block rounded-lg object-center"
                alt="Picture of the author"
              />
              <Image
                src="/odds-buly.jpeg"
                width={200}
                height={200}
                className="block rounded-lg object-center"
                alt="Picture of the author"
              />
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
