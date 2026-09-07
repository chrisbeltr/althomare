import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="relative max-w-275 w-full">
        {/* <div className="max-w-225"> */}
        <Image
          src="/group.jpeg"
          alt="Group picture of Althomare company"
          width={2048}
          height={1536}
          loading="eager"
        />
        {/* </div> */}
        <div className="absolute right-0 top-5 p-8 text-5xl font-bold text-white rounded-md">
          Where the magic happens.
        </div>
      </div>
    </>
  );
}
