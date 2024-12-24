import { div } from 'framer-motion/client';
import SignupFormDemo from '@/app/login/login-form';
import { montserrat, playfairDisplay, inter, roboto, sourceSans3 } from '@/config/fonts';

export default function Home() {
    return (
        <div id='div' className={` ${sourceSans3.className} flex justify-end items-end max-w-[500px] w-full `}>
            <SignupFormDemo />
        </div>
    )
}