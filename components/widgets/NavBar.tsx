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
    <nav className="flex bg-transparent max-w-fit text-sm mx-auto justify-center items-center space-x-10 px-[150px] inset-x-0 border border-[#656565] fixed top-10 backdrop-blur-md transition-colors rounded-full duration-300 z-20 py-3.5 font-sans">
      <div className="text-white text-sm">MenrvaAi</div>
      <ul className="flex space-x-8 text-white">
        {props.items.map((item, key) => (
          <li key={key}>
            <a
              href={item.href}
              className={`hover:text-orange-500 transition-all ${item.className}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;


export type {
    NavListItem
}