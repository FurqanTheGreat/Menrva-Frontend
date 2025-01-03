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
    <nav className={` flex no-underline mt-4 m-auto bg-black w-[76%] xl:w-2/3 backdrop-blur-sm h-fit rounded-[10px] text-white font-sm justify-between items-center py-1 text-md border border-[#454545] px-2 fixed z-20 overflow-x-hidden `}>
      <div className=" hidden sm:flex text-sm justify-center w-1/2 lg:w-[10%] "><img src="/Colorful_Brain_Digital_World_Technology_Logo__3_-removebg-preview.png" alt="Microsoft Icon" width={40} height={40} /></div>
      <ul className="hidden lg:flex space-x-10 text-white bg-transparent max-w-fit w-[70%] text-sm justify-center items-center space-x-10 px-[75px] inset-x-0">
        {props.items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`hover:text-orange-500 transition-all ${item.className}`}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className={`hover:text-orange-500 transition-all`}>Contact</a>
        </li>
      </ul>
      <div className=" flex space-x-5 w-full sm:w-1/2 lg:w-fit  justify-end ">
      <Link href={"/account/signup"}>
          <button className={`bg-[#C87500] bg-opacity-70 hover:bg-[#ad7527] text-sm transition-all w-fit text-white py-2 px-4 rounded-[10px]`}>
            Sign up
          </button>
          </Link>
          <Link href={"/account/login"}>
          <button className={`bg-black bg-opacity-70 border-4 border-[#C87500] text-sm hover:bg-[#ad7527] transition-all w-fit text-white py-1 px-4 rounded-[10px]`}>
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