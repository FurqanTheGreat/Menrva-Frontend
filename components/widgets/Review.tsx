interface ReviewProps {
    children: string | string[]
    citation: string,
    nstars:number
}
const Review = (props: ReviewProps) => {
  return (
    <div className="bg-[#303030] p-6 shadow-lg border border-[#5A5A5A]" style={{
      borderRadius: "10px"
    }}>
      <p className="mb-4">
        {'"'}{props.children}{'"'}
      </p>
      <p className="font-semibold">— {props.citation}</p>
      <div className="flex mt-4">
        <span className="text-yellow-400">{"★".repeat(props.nstars > 5 ? 5 : props.nstars)}{'☆'.repeat(5-props.nstars)}</span>
      </div>
    </div>
  );
};

export default Review;
