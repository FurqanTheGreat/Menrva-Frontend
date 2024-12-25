import Link from "next/link";

interface NavListItem {
  label: string;
  href: string;
  className?: string;
}

interface NavBarProps {
  items: NavListItem[];
}
const NavBar = (props: NavBarProps) => {
  return (
    <nav className={` flex no-underline bg-transparent w-full backdrop-blur-lg h-fit text-white text-transparent font-medium justify-between items-center px-[50px] py-4 text-md border-gray fixed z-20 overflow-x-hidden `}>
      <div className=" hidden sm:flex text-sm justify-center w-1/2 lg:w-1/3 "><img src="/Colorful_Brain_Digital_World_Technology_Logo__3_-removebg-preview.png" alt="Microsoft Icon" width={50} height={50} /></div>
      <ul className="hidden lg:flex space-x-10 text-white bg-transparent max-w-fit w-1/3 text-md justify-center items-center space-x-10 px-[75px] inset-x-0">
        {props.items.map((item, key) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`hover:text-orange-500 transition-all ${item.className}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className=" flex space-x-5 w-full sm:w-1/2 lg:w-1/3  justify-end ">
      <Link href={"/account/signup"}>
          <button className={`bg-[#C87500] bg-opacity-70 hover:bg-[#ad7527] p-[24px] transition-all w-fit text-white py-3 px-6 rounded-[10px]`}>
            Sign up
          </button>
          </Link>
          <Link href={"/account/login"}>
          <button className={`bg-black bg-opacity-70 border-4 border-[#C87500] hover:bg-[#ad7527] p-[20px] transition-all w-fit text-white py-2 px-6 rounded-[10px]`}>
            Login
          </button>
          </Link>
      </div>
    </nav>
  );
};

export default NavBar;


export type {
    NavListItem
}