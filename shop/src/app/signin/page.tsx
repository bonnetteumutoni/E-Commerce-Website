'use client';

import Navigation from "../sharedComponents/navigation";
import Image from "next/image";
import Button from "../sharedComponents/button";
import Footer from "../footer";
const SignIn = () => {
    return (
        <div >
            <div>
                <Navigation />
            </div>
            <div className="mt-20 flex space-x-4 mb-30">
                <div className="bg-blue-100 w-250 p-20">
                    <Image src='/images/phone.svg' alt='phone' width={600} height={600} />
                </div>
                <div className="ml-50 mt-40">
                    <h1 className="text-[30px] font-black mb-4">Log in to Exclusive</h1>
                    <p className="mb-6">Enter your details below</p>
                    <form>
                        <input
                            type="email"
                            placeholder="Email Or Phone Number"
                            className=" w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
                        <input
                            type="text"
                            placeholder="Password"
                            className="w-full py-5 bg-transparent border-b border-gray-400 focus:outline-none  placeholder-gray-500" />
                        <div className="flex py-6 justify-between">
                            <div className=" w-30">
                                <Button buttonText="Log In" variant="primary" onClickHandler={() => alert('Sign In successfully')} />
                            </div>
                            <button className="text-pink-500   ">
                                Forget Password?
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SignIn;