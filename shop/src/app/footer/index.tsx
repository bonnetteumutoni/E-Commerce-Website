import { FaTelegramPlane } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="flex justify-around items-center p-1">
                <div className="">
                    <h1 className="text-xl font-bold mb-3">Exclusive</h1>
                    <p className="mb-1">Subscribe</p>
                    <p className="mb-4 text-sm text-gray-300">Get 10% off youe first order</p>
                    <form className="relative w-50">
                        <input
                            type="email"
                            className=" outline w-full py-2 pl-4 pr-12 rounded "
                            placeholder="Enter your email"
                        />
                        <FaTelegramPlane
                            size={20}
                            className=" absolute right-4 top-1/2 -translate-y-1/2 cursor-poiner"
                        />
                    </form>
                </div>
                <div className="flex-col">
                    <h1 className="text-xl font-bold mb-3">Support</h1>
                    <p className="text-gray-300 text-sm"> 111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className="text-gray-300 text-sm">Exclusive@gmail.com</p>
                    <p className="text-gray-300 text-sm">+88015-88888-9999</p>
                </div>
                <div className="flex-col">
                    <h1 className="text-xl font-bold mb-3">Account</h1>
                    <ul className="space-y-1 text-sm">
                    <li><Link href={'/'} className="hover:underline">My Account</Link></li>
                    <li><Link href={'/'} className="hover:underline">Login/Register </Link></li>
                    <li><Link href={'/'} className="hover:underline">Cart </Link></li>
                    <li> <Link href={'/'} className="hover:underline">Wishlist </Link></li>
                    <li><Link href={'/'} className="hover:underline">Shop </Link></li>
                    </ul>
                </div>
                <div className="flex-col">
                    <h1 className="text-xl font-bold mb-3">Quich Lick</h1>
                    <ul className="space-y-1 text-sm">
                    <li><Link href={'/'} className="hover:underline">Privacy Policy </Link></li>
                    <li><Link href={'/'} className="hover:underline">Terms Of Use </Link></li>
                    <li> <Link href={'/'} className="hover:underline">FAQ </Link></li>
                    <li> <Link href={'/'} className="hover:underline">Contact </Link></li>
                    </ul>
                </div>
                <div >
                    <h1 className="text-xl font-bold py-3">Download App</h1>
                    <p className="text-sm text-gray-300 mb-3">save $3 with App New User Only</p>
                    <div className="flex gap-3">
                        <div>
                            <Image src={'/images/qrcode.svg'}
                                alt="QR code"
                                width={100}
                                height={100}
                                className="rounded-1g bg-white " />
                        </div>
                        <div className="w-40 h-12 ">
                            <div className=" border rounded flex gap-2">
                                <Image
                                    src={'/images/google.png'}
                                    alt="Play Store"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="inline-block w-7 h-7 my-2" />
                                <div >
                                    <span className="text-[7px] ">GET IT ON</span>
                                    <p className="text-[10px]"> Google Play</p>
                                </div>
                            </div>
                            <div className="flex gap-2 border rounded mt-3">
                                <Image
                                    src={'/images/apple.svg'}
                                    alt="Play Store"
                                    width={45}
                                    height={40}
                                className="inline-block w-7 h-7 my-2 fill-white" />
                                <div >
                                    <span  className="text-[10px]">DOWNLOAD ON THE</span>
                                    <p className="text-[15px]"> App Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                          <div className="flex gap-10 p-5">
                        <FaFacebookF size={20}/>
                        <FaTwitter size={20}/>
                        <FaInstagram size={20}/>
                        <FaLinkedin size={20}/>
                    </div>
                </div>
            </div>
            <hr className="mb-7"></hr>
            <div>
                <h2 className="text-center text-gray-600 pb-7 text-[20px]">&copy; Copyright Rimel 2022. All right reserved</h2>
            </div>
        </footer>
    )
}
export default Footer;














