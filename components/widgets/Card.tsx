import Image from "next/image";

interface CardProps {
  text: string;
  className: string;
  imageSrc: string;
}
const Card = (props: CardProps) => {
  return (
    <div
      className={
        "bg-white/10 w-[300px] relative rounded-lg overflow-hidden shadow-md " +
        props.className
      } style={{
      borderRadius: "10px"
    }}
    >
      <Image
        alt={props.text}
        src={props.imageSrc}
        className={"w-full h-[500px] object-cover"}
        width={500}
        height={500}
      />
      <div className="p-4">
        <h3 className="text-lg text-center">{props.text}</h3>
      </div>
    </div>
  );
};

export default Card;
