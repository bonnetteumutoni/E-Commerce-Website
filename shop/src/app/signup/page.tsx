'use client';

import Navigation from "../sharedComponents/navigation";
import Image from "next/image";
import Footer from "../footer";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
    return (
        <div >
            <div>
                <Navigation />
            </div>
            <div className="mt-20 flex space-x-4 mb-30">
                <div className="bg-blue-100 w-250 p-20">
                    <Image src='/images/phone.svg' alt='phone' width={500} height={600} />
                </div>
                <div className="ml-50 mt-10 w-100">
                    <h1 className="text-[30px] font-black mb-4">Log in to Exclusive</h1>
                    <p className="mb-6">Enter your details below</p>
                    <form>
                        <input
                            type="text"
                            placeholder="Password"
                            className="w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
                        <input
                            type="email"
                            placeholder="Email Or Phone Number"
                            className=" w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
                        <input
                            type="text"
                            placeholder="Password"
                            className="w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
                            <div className=" w-60">
                                <button className="bg-red-500 p-4 text-white mt-5 w-100 rounded-[4px]">Create account</button>
                        </div>
                        
                    </form>
                    <div className="border flex p-3 rounded-[4px] space-x-4 mt-6 pl-25">
                        <div>
                            <FcGoogle />
                        </div>
                        <div><h1>Sign up with Google</h1></div>
                    </div>
                    <h1 className="mt-4 text-center">Already have account? <button className="underline">Log In</button></h1>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
export default SignUp