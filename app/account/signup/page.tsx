import SignupForm from "./signup-form"
import { playfairDisplay } from '@/config/fonts';

export default function Home() {
    return (
        <div id='div' className={` ${playfairDisplay.className} flex justify-end items-end max-w-[500px] w-full `}>
            <SignupForm />
        </div>
    )
}