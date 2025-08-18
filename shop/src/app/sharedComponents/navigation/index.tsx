import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navigation = () => {
    return (
        <div>
            <h3 className="pl-[35rem] bg-black pt-[15px] pb-[15px] text-white">Summer Sale For All Swim Suits and Express Delivery - OFF 50%! <a href="#" className="underline">Shop Now</a> <span className="ml-[250px]">English</span></h3>
            <div className="flex space-x-100 ml-[120px] mr-[120px] pt-[20px] pb-[20px]">
                <div><h1 className="font-black text-[20px]">Exclusive</h1></div>
                <div className="flex space-x-9">
                    <div><p><a href="#" className="underline">Home</a></p></div>
                    <div><p><a href="#">Contact</a></p></div>
                    <div><p><a href="#">About</a></p></div>
                    <div><p><a href="#">Sign Up</a></p></div>
                </div>
                <div className="flex">
                    <div>
                        <form>
                            <input type="search" placeholder="What are you looking for?" id="search" className="p-[5px] border-none focus:outline-none focus:ring-0 bg-blue-50 rounded-[10px]" /><span></span>
                        </form>
                    </div>
                    <div><a href="#search" className="mr-[50px]"><CiSearch /></a></div>
                    <div className="mr-[50px]"><a href="#"><CiHeart /></a></div>
                    <div><a href="#"><MdOutlineShoppingCart /></a></div>
                </div>
            </div>
        </div>


    )
}
export default Navigation;