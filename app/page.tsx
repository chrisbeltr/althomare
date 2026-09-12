import Image from "next/image";
import Card from "./card";

export default function Page() {
  return (
    <>
      <div className="relative max-w-275 w-full">
        <Image
          src="/group.jpeg"
          alt="Group picture of Althomare company"
          width={2048}
          height={1536}
          loading="eager"
        />
        <h2 className="absolute right-0 top-0 md:top-5 p-5 sm:p-8 text-2xl sm:max-md:text-3xl md:text-5xl font-bold text-white">
          Where the magic happens.
        </h2>
      </div>
      <div className="relative w-full flex flex-col items-center bg-gray-300 text-gray-600">
        <div className="relative max-w-275 w-full p-5 flex flex-col md:flex-row justify-end">
          <div className="md:absolute md:left-5 md:h-[calc(100%-40px)] md:w-3/4 upnext-gradient md:flex md:flex-col md:justify-center">
            <h2 className="font-bold text-2xl">Coming up next...</h2>
            <p className="md:w-2/3 text-xl pb-5 md:p-0">
              Our next production will be Little Shop of Horrors! No, we will
              not have a giant carnivorous plant shipped to Althea's apartment.
              Or dentistry equipment. Sorry Pirelli. Make sure to fill out the
              Google Form if you haven't already! If you didn't submit your bio,
              get that to Sebastian as soon as possible!
              <br />
              <br />
              Additionally, we will be hosting our first ever Althonys award
              ceremony, so make sure to cast your votes in that same Google
              Form!
            </p>
          </div>
          <Image
            src="/littleshop.webp"
            alt="Little Shop of Horrors banner"
            width={1024}
            height={800}
            loading="eager"
            className="md:w-1/2"
          ></Image>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center text-gray-600">
        <div className="relative max-w-275 w-full p-5 flex flex-col gap-5">
          <h2 className="font-bold text-2xl self-end">
            Past productions include...
          </h2>
          <div className="w-full flex sm:flex-row-reverse sm:justify-center flex-wrap sm:flex-wrap gap-5">
            <Card title="Legally Blonde" date="August 2026" attendance={17} />
            <Card title="Newsies" date="June 2026" attendance={19} />
            <Card title="Into the Woods" date="April 2026" attendance={16} />
            <Card title="Sweeney Todd" date="January 2026" attendance={17} />
            <Card title="Wicked" date="October 2025" attendance={15} />
            <Card title="Les Miserables" date="August 2025" attendance={14} />
            <Card title="Hamilton" date="June 2025" attendance={13} />
          </div>
        </div>
      </div>
    </>
  );
}
