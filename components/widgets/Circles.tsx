interface CirclesProps {
  children?: React.ReactNode
}
const Circles = (props: CirclesProps) => {
  return (
    <>
      <div className="border border-[--dcircle-color] rounded-full w-[500px] h-[500px] z-50 absolute bg-transparent"></div>
      <div className="border border-[--dcircle-color] rounded-full w-[500px] h-[500px] z-20 absolute translate-y-60 translate-x-52">
      {props.children}

      </div>
    </>
  );
};

export default Circles;
