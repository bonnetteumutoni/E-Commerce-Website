import Navigation from "./sharedComponents/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import FlashSalesCountdown from "./timeCountdown";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoIosLaptop } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";
import Footer from "./footer";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
export default function Home() {

  return (
    <div>
      <Navigation />


      <hr className="border-gray-300"></hr>


      <div className="ml-[120px] mr-[120px]  flex">
        <div className="pt-[20px] w-100">
          <div className="flex space-x-4 pb-[7px]">
            <div><h2>Woman&apos;s Fashion</h2></div>
            <div className="pt-[4px]"><MdKeyboardArrowRight /></div>
          </div>
          <div className="flex space-x-10 pb-[7px]">
            <div><h2>Men&apos;s Fashion</h2></div>
            <div className="pt-[4px]"><MdKeyboardArrowRight /></div>
          </div>
          <h2 className="pb-[7px]">Electronics</h2>
          <h2 className="pb-[7px]">Home & Lifestyle</h2>
          <h2 className="pb-[7px]">Medicine</h2>
          <h2 className="pb-[7px]">Sports & Outdoor</h2>
          <h2 className="pb-[7px]">Baby&apos;s & Toys</h2>
          <h2 className="pb-[7px]">Groceries & Pets</h2>
          <h2 className="pb-[7px]">Health & Beauty</h2>
        </div>
        <div className="w-px bg-gray-300 h-86 mx-20"></div>
        <div className="flex bg-black w-500 justify-around">
          <div>
            <div className="flex mt-12 ml-12">
              <FaApple className="w-10 h-10 text-white" />
              <h1 className="text-white ml-2 text-[20px] pt-2">Iphone 14 Series</h1>
            </div>
            <h1 className="text-[45px] text-white font-black ml-12 mt-4">Up to 10% <br></br>off Voucher</h1>
            <div className="flex text-white ml-12 mt-7">
              <Link href={"/"} className="underline text-white" >Shop Now</Link>
              <FaArrowRightLong className="ml-2 mt-1" />
            </div>
          </div>

          <div>
            <Image src={'/images/homeimg.svg'} alt="landing image" width={600} height={600} className="pt-[10px]" />
          </div>
        </div>
      </div>


      <div className="flex g-0 ml-[120px] mr-[120px] space-x-4 pt-[120px] pb-[20px]">
        <div className="w-[30px] bg-red-500 h-16 rounded-[10px] p-none"></div>
        <div><h1 className="text-red-500 pt-[20px] font-black text-[25px]">Today&apos;s</h1></div>
      </div>


      <div>
        <FlashSalesCountdown />
      </div>


      <div className="flex ml-[120px] mr-[120px] pt-[50px] space-x-2">
        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">
              <p className="bg-red-500 text-white rounded-[3px] p-1">-40%</p>
              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/1.jpg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">HAVIT HV-G92 Gamepad</h4>
            <div>
              <span className="text-red-500">$120</span>
              <span className="text-gray-400 line-through ml-2">$160</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(88)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">
              <p className="bg-red-500 text-white rounded-[3px] p-1">-35%</p>
              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/keyboard.webp"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">AK-900 Wired Keyboard</h4>
            <div>
              <span className="text-red-500">$960</span>
              <span className="text-gray-400 line-through ml-2">$1160</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <MdOutlineStar className="text-gray-400 text-xl" />
            <span className="text-gray-500 ml-2">(75)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">
              <p className="bg-red-500 text-white rounded-[3px] p-1">-30%</p>
              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/380.png"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">IPS LCD Gaming Monitor</h4>
            <div>
              <span className="text-red-500">$370</span>
              <span className="text-gray-400 line-through ml-2">$400</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(88)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 h-90 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">
              <p className="bg-red-500 text-white rounded-[3px] p-1">-25%</p>
              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/chair.jpg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">S-Series Comfort Chair </h4>
            <div>
              <span className="text-red-500">$375</span>
              <span className="text-gray-400 line-through ml-2">$400</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(88)</span>
          </div>
        </div>
      </div>




      <div className="flex justify-center items-center h-40 mt-10">
        <button className="bg-red-500 text-white mt-10 p-6 w-90 rounded-[10px]">View All Products</button>
      </div>



      <hr className="border-gray-300 mt-20"></hr>


      <div className="flex g-0 ml-[120px] mr-[120px] space-x-4 pt-[30px] pb-[20px]">
        <div className="w-[30px] bg-red-500 h-16 rounded-[10px] p-none"></div>
        <div><h1 className="text-red-500 pt-[20px] font-black text-[25px]">Categories</h1></div>
      </div>


      <div className="flex ml-[120px] mr-[120px] space-x-250">
        <div>
          <h1 className="text-[30px] mt-10 font-black">Browse By Category</h1>
        </div>
        <div className="flex space-x-2 items-center mt-10">
          <HiMiniArrowSmallLeft className="w-10 h-10" />
          <HiMiniArrowSmallRight className="w-10 h-10" />
        </div>
      </div>



      <div className="flex space-x-12 ml-[120px] mr-[120px] mt-5">
        <div className="border w-50 h-40 rounded-[5px] pt-[50px] pl-[70px] hover:bg-red-500 hover:text-white">
          <SlScreenSmartphone className="w-10 h-10 pl-[9px]" />
          <h2>Phones</h2>
        </div>

        <div className="border w-50 h-40 rounded-[5px] pt-[50px] pl-[70px] hover:bg-red-500 hover:text-white">
          <IoIosLaptop className="w-10 h-10 pl-[15px]" />
          <h2>Computers</h2>
        </div>

        <div className="border w-50 h-40 rounded-[5px] pt-[50px] pl-[70px] hover:bg-red-500 hover:text-white">
          <BsSmartwatch className="w-11 h-11 pl-[25px]" />
          <h2>SmartWatch</h2>
        </div>

        <div className="border w-50 h-40 rounded-[5px] pt-[50px] pl-[70px] hover:bg-red-500 hover:text-white">
          <CiCamera className="w-10 h-10 pl-[9px]" />
          <h2>Camera</h2>
        </div>
        <div className="border w-50 h-40 rounded-[5px] pt-[50px] pl-[70px] hover:bg-red-500 hover:text-white">
          <CiHeadphones className="w-10 h-10 pl-[9px]" />
          <h2>HeadPhones</h2>
        </div>
        <div className="border w-50 h-40 rounded-[5px] pt-[50px] pl-[70px] hover:bg-red-500 hover:text-white">
          <TbDeviceGamepad className="w-10 h-10 pl-[9px]" />
          <h2>Gaming</h2>
        </div>
      </div>




      <hr className="border-gray-300 mt-20"></hr>


      <div className="flex g-0 ml-[120px] mr-[120px] space-x-4 pt-[30px] pb-[20px]">
        <div className="w-[30px] bg-red-500 h-16 rounded-[10px] p-none"></div>
        <div><h1 className="text-red-500 pt-[20px] font-black text-[25px]">This Month</h1></div>
      </div>



      <div className="flex ml-[120px] mr-[120px] space-x-250">
        <div>
          <h1 className="text-[30px] mt-10 font-black">Best Selling Products</h1>
        </div>
        <div className="">
          <button className="bg-red-500 text-white p-[20px] w-40 mt-[30px] rounded-[10px]">View All</button>
        </div>
      </div>


      <div className="flex ml-[120px] mr-[120px] pt-[50px] space-x-2">
        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">
              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/first.jpeg"
              alt="Product"
              className="w-full h-40 object-contain"
            />

          </div>
          <div className="mt-4">
            <h4 className="font-bold">The north coat</h4>
            <div>
              <span className="text-red-500">$260</span>
              <span className="text-gray-400 line-through ml-2">$360</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(65)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">

              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/two.jpg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Gucci duffle bag</h4>
            <div>
              <span className="text-red-500">$960</span>
              <span className="text-gray-400 line-through ml-2">$1160</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <MdOutlineStar className="text-gray-400 text-xl" />
            <span className="text-gray-500 ml-2">(65)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">

              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/third.jpeg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-bold">RGB liquid CPU Cooler</h4>
            <div>
              <span className="text-red-500">$160</span>
              <span className="text-gray-400 line-through ml-2">$170</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(65)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 h-90 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">
              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/last.jpeg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Small BookSelf </h4>
            <div>
              <span className="text-red-500">$360</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(88)</span>
          </div>
        </div>
      </div>

      <div className="flex ml-[120px] mr-[120px] mt-[30px] bg-black p-[20px]">
        <div className="mt-20 ml-30">
          <h3 className="text-green-600 font-black text-[20px]">Categories</h3>
          <h1 className="pt-[30px] text-[40px] text-white">ENHANCE YOUR <br></br>MUSIC EXPERIENCE</h1>
          <div className="flex mt-[20px] space-x-6">
            <div className="bg-white rounded-[60px] p-[15px]">
              <h1 className="font-black">23</h1>
              <h3>Hours</h3>
            </div>
            <div className="bg-white rounded-[60px] p-[15px]">
              <h1 className="font-black">05</h1>
              <h3>Days</h3>
            </div>
            <div className="bg-white rounded-[60px] p-[15px]">
              <h1 className="font-black">59</h1>
              <h3>Minutes</h3>
            </div>
            <div className="bg-white rounded-[60px] p-[15px]">
              <h1 className="font-black">35</h1>
              <h3>Seconds</h3>
            </div>
          </div>
          <button className="bg-green-400 text-white p-[15px] w-45 rounded-[5px] mt-25">Buy Now</button>
        </div>
        <div className="bg-gradient-to-r from-black to-white ml-100">
          <Image src={'/images/boom.svg'} alt="boom" width={1000} height={1000} className=" p-20 mr-120" />
        </div>
      </div>


      <div className="flex g-0 ml-[120px] mr-[120px] space-x-4 pt-[30px] pb-[20px]">
        <div className="w-[30px] bg-red-500 h-16 rounded-[10px] p-none"></div>
        <div><h1 className="text-red-500 pt-[20px] font-black text-[25px]">Our Products</h1></div>
      </div>


      <div className="flex ml-[120px] mr-[120px] space-x-250">
        <div>
          <h1 className="text-[30px] mt-10 font-black">Explore Our Products</h1>
        </div>
        <div className="flex space-x-2 items-center mt-10">
          <HiMiniArrowSmallLeft className="w-10 h-10" />
          <HiMiniArrowSmallRight className="w-10 h-10" />
        </div>
      </div>
      <div className="flex ml-[120px] mr-[120px] pt-[50px] space-x-2">
        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">

              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/cesar.webp"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Breed Dry Dog Food</h4>
            <div>
              <span className="text-red-500">$120</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(3)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <MdOutlineStar className="text-gray-400 text-xl" />
            <MdOutlineStar className="text-gray-400 text-xl" />
            <span className="text-gray-500 ml-2">(35)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">

              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/camera.jpeg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">CANON EOS DSLR Camera</h4>
            <div>
              <span className="text-red-500">$360</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <MdOutlineStar className="text-gray-400 text-xl" />
            <span className="text-gray-500 ml-2">(95)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">
              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/computer.webp"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">IASUS FHD Gaming Laptop</h4>
            <div>
              <span className="text-red-500">$320</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(325)</span>
          </div>
        </div>

        <div className="relative group bg-white rounded p-4 shadow w-100 h-90 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">

              <div>
                <CiHeart className="ml-85" />
                <FaRegEye className="ml-85" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/makeup.jpg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Curology Product Set  </h4>
            <div>
              <span className="text-red-500">$500</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(145)</span>
          </div>
        </div>
      </div>



      <div className="flex ml-[120px] mr-[120px] pt-[50px] space-x-2">

        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">

              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/car.jpg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Kids Electric Car</h4>
            <div>
              <span className="text-red-500">$960</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(3)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <MdOutlineStar className="text-gray-400 text-xl" />
            <MdOutlineStar className="text-gray-400 text-xl" />
            <span className="text-gray-500 ml-2">(35)</span>
          </div>
          <div className="flex space-x-1 mb-1 mt-2">
            <span className="w-4 h-4 rounded-full bg-red-500 border-2 border-black inline-block"></span>
            <span className="w-4 h-4 rounded-full bg-white border-2 border-black inline-block"></span>
          </div>
        </div>


        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">

              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/shoes.webp"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Jr. Zoom Soccer Cleats</h4>
            <div>
              <span className="text-red-500">$1160</span>
            </div>
          </div>

          <div className="flex items-center mt-2">
            {[...Array(4)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <MdOutlineStar className="text-gray-400 text-xl" />
            <span className="text-gray-500 ml-2">(95)</span>
          </div>

          <div className="flex space-x-1 mb-1 mt-2">
            <span className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-black inline-block"></span>
            <span className="w-4 h-4 rounded-full bg-pink-500 border-2 border-black inline-block"></span>
          </div>
        </div>


        <div className="relative group bg-white rounded p-4 shadow w-100 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">

              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/remote.jpeg"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">GP11 Shooter USB Gamepad</h4>
            <div>
              <span className="text-red-500">$660</span>
            </div>
          </div>

          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(325)</span>
          </div>
          <div className="flex space-x-1 mb-1 mt-2">
            <span className="w-4 h-4 rounded-full bg-black border-2 border-red-500 inline-block"></span>
            <span className="w-4 h-4 rounded-full bg-red-500 border-2 border-black inline-block"></span>
          </div>
        </div>


        <div className="relative group bg-white rounded p-4 shadow w-100 h-90 shadow-[rgba(0,0,0,0.4)]">
          <div className="relative">
            <div className="absolute overflow-visble flex justify-between">
              <div>
                <CiHeart className="ml-70" />
                <FaRegEye className="ml-70" />
              </div>
            </div>
            <Image
              width={400}
              height={400}
              src="/images/jacket.webp"
              alt="Product"
              className="w-full h-40 object-contain"
            />
            <button
              className="absolute inset-x-0 bottom-0 h-12 bg-black text-white font-semibold transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-b-[10px]"
            >
              Add To Cart
            </button>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Quilted Satin Jacket</h4>
            <div>
              <span className="text-red-500">$660</span>
            </div>
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, idx) => (
              <MdOutlineStar key={idx} className="text-yellow-400 text-xl" />
            ))}
            <span className="text-gray-500 ml-2">(145)</span>
          </div>
          <div className="flex space-x-1 mb-1 mt-2">
            <span className="w-4 h-4 rounded-full bg-teal-900 border-2 border-black inline-block"></span>
            <span className="w-4 h-4 rounded-full bg-pink-500 border-2 border-black inline-block"></span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-40 mt-10">
        <button className="bg-red-500 text-white mt-10 p-6 w-90 rounded-[10px]">View All Products</button>
      </div>



      <div className="flex g-0 ml-[120px] mr-[120px] space-x-4 pt-[30px] pb-[20px]">
        <div className="w-[30px] bg-red-500 h-16 rounded-[10px] p-none"></div>
        <div><h1 className="text-red-500 pt-[20px] font-black text-[25px]">Featured</h1></div>
      </div>
      <div>
        <h1 className="text-[40px] font-black mt-20px ml-[120px] mr-[120px] mb-[20px]">New Arrival</h1>
      </div>

      <div className="flex ml-[120px] mr-[120px] space-x-20 mb-20">
        <div className="bg-black">
          <div className="absolute overflow-visible text-white mt-160 ml-10">
            <h1 className="font-black text-[25px]">PlayStation 5</h1>
            <p className="text-[23px]">Black and White version of the PS5<br></br>coming out on sale.</p>
            <button className="underline font-black text-[20px] ">Shop Now</button>
          </div>

          <Image src='/images/spea.svg' alt="big speakers" width={700} height={700} />
        </div>
        <div>
          <div className="bg-black flex">
            <div>
              <div className=" text-white mt-16 ml-10 w-90">
                <h1 className="font-black text-[25px]">Women’s Collections</h1>
                <p className="text-[23px]">Featured woman collections that <br></br>give you another vibe.</p>
                <button className="underline font-black text-[20px] ">Shop Now</button>
              </div>
            </div>
            <Image src='/images/woman.svg' width={500} height={400} alt='woman image' />
          </div>
          <div className="flex mt-10 space-x-20">
            <div className="bg-black">
              <div className="absolute overflow-visible text-white mt-70 ml-5">
                <h1 className="font-black text-[25px]">Speakers</h1>
                <p className="text-[23px]">Amazon wireless speakers</p>
                <button className="underline font-black text-[20px] ">Shop Now</button>
              </div>
              <Image src='/images/speaker.svg' alt='speaker' width={400} height={400} />
            </div>
            <div className="bg-black">
              <div className="absolute overflow-visible text-white mt-70 ml-5">
                <h1 className="font-black text-[25px]">Perfume</h1>
                <p className="text-[23px]">GUCCI INTENSE OUD EDP</p>
                <button className="underline font-black text-[20px] ">Shop Now</button>
              </div>
              <Image src='/images/perfume.svg' alt='perfume Gucci' width={400} height={400} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-10 ml-[120px] mr-[120px] justify-around mb-20">
        <div>
          <div className="ml-15 mb-10">
            <Image src='/images/truck.svg' alt="truck icon" width={100} height={100} />
          </div>
          <h1 className="font-black"> FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div>
          <div className="ml-15 mb-10">
            <Image src='/images/headphones.svg' alt="truck icon" width={100} height={100} />
          </div>
          <h1 className="font-black"> 24/7 CUSTOMER SERVICE</h1>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div>
          <div className="ml-15 mb-10">
            <Image src='/images/verify.svg' alt="truck icon" width={100} height={100} />
          </div>
          <h1 className="font-black"> MONEY BACK GUARANTEE</h1>
          <p>We return money within 30 days</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
}
