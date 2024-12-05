import Card from "./component/card";
import arrowIcon from "@/public/resources/arrow up right.svg";
import Image from "next/image";

export default function Home() {
  const team = [
    {
      name: "Liam Novak",
      pos: "Software Engineer",
      img: "/resources/person_1.png",
      bg: "purple",
    },
    {
      name: "Sophia Moretti",
      pos: "Business Development Manager",
      img: "/resources/person_2.png",
      bg: "pink",
    },
    {
      name: "Ethan Rossi",
      pos: "Business Development Manager",
      img: "/resources/person_3.png",
      bg: "blue",
    },
    {
      name: "Isabella Ricci",
      pos: "UX Designer",
      img: "/resources/person_4.png",
      bg: "yellow",
    },
    {
      name: "Noah Conti",
      pos: "Content Creator",
      img: "/resources/person_5.png",
      bg: "green",
    },
  ];
  return (
    <div
      className="grid grid-cols-1 grid-rows-7 sm:grid-cols-3 sm:grid-rows-3 
    xl:grid-cols-4 xl:grid-rows-2 rounded-r-2xl overflow-hidden"
    >
      <div className="p-8 sm:col-span-3 xl:col-span-2 flex flex-col gap-4 justify-center xl:justify-start xl:p-10">
        <div className="text-[#263FA9]">Our team</div>
        <div className="text-4xl font-medium">Meet the brain</div>
        <div className="text-[#394150] sm:w-[480px]">
          We are proud to have them as part of our community and look forward to
          continuing to push the boundaries of what&apos;s possible in the world of
          digital art.
        </div>
      </div>
      {team.map((member) => (
        <Card
          key={member.name}
          name={member.name}
          pos={member.pos}
          src={member.img}
          color={member.bg}
        />
      ))}
      <div
        className="p-8 sm:col-start-1 sm:row-start-3 xl:p-10 xl:col-start-1 xl:row-start-2 
      text-[#394150] font-semibold flex flex-row items-end"
      >
        <div className="flex items-center gap-1">
          <div>See all members</div>
          <div>
            <Image src={arrowIcon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
