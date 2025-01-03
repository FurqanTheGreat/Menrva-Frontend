"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const ActivationConfirmed = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  const message = status === 'success'
    ? "Your account has been successfully activated!"
    : "Something went wrong. Please try again.";

  return (
    <div className="max-w-[500px] flex flex-col justify-center w-full h-[80vh] mx-auto rounded-none md:rounded-[10px] backdrop-blur-lg pt-8 px-8 pb-0 z-20 bg-white md:bg-[rgba(255,255,255,0.6)] shadow-input dark:bg-black">
      <h1 className="font-[600] text-center text-[36px] text-neutral-800">
        Activation Successful
      </h1>
      <h1 className="font-[400] text-center text-[22px] text-neutral-800">
        You can now {" "}
        <span>
          <Link href={"/account/login"} className=" text-[#0000EE] hover:underline ">
            Sign in.
          </Link>
        </span>
      </h1>
    </div>
  );
};

export default ActivationConfirmed;