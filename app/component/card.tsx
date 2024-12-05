import Image from "next/image";

const Color: {
  purple: string;
  pink: string;
  blue: string;
  yellow: string;
  green: string;
} = {
  purple: "bg-[#C1B6F8]",
  pink: "bg-[#EDACD2]",
  blue: "bg-[#9DC4F8]",
  yellow: "bg-[#F8D8B0]",
  green: "bg-[#86E7D4]",
};

export default function Card({
  src,
  name,
  pos,
  color = "purple",
}: {
  src: string;
  name: string;
  pos: string;
  color?: string;
}) {
  const colorClass = Color[color as keyof typeof Color] || Color["purple"];
  return (
    <div
      className={`relative after:bg-[url("/resources/Gradient@2x.png")] 
      after:bg-no-repeat after:bg-cover after:w-full after:h-1/2 after:absolute 
      after:bottom-0 after:left-0 after:right-0 after:z-0`}
    >
      <Image
        src={src}
        width={1000}
        height={1000}
        alt="Person"
        className={` ${colorClass}`}
      />
      <div className="absolute bottom-0 m-5 z-10">
        <div className="text-[#F3F4F6] font-bold text-xl">{name}</div>
        <div className="text-[#F3F4F6] text-base">{pos}</div>
      </div>
    </div>
  );
}
