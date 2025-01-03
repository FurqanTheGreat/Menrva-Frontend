import LoginForm from './login-form';
import { playfairDisplay, sourceSans3 } from '@/config/fonts';

export default function Home() {
    return (
        <div id='div' className={` ${sourceSans3.className} flex justify-end items-end max-w-[500px] w-full `}>
            <LoginForm />
        </div>
    )
}