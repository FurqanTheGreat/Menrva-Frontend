interface HrProps {
    className?: string;
  }

export default function Hr(props: HrProps) {
    return <div className={` bg-gradient-to-r from-transparent via-neutral-700 dark:via-neutral-200 to-transparent ${props.className} h-[1px] w-full `} />
}