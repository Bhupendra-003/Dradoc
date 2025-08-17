import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

function Card() {

    return (
        <div className='bg-zinc-800 relative overflow-hidden p-5 text-white rounded-[40px] w-64 h-72'>
            <FaRegFileAlt className="mt-3" />
            <p className="pt-4 text-sm leading-type">A group of friends camping in the woods. One night, they hear strange noises outside their tentA group of friends camping in the woods. "</p>
            <div className="footer w-full absolute bottom-0  left-0">
                <div className="flex-between relative px-4 py-3">
                    <p className="text-sm">.4mb</p>
                    <span className="hover:text-zinc-300 group flex-center transition-all rounded-full w-6 h-6">
                        <HiOutlineDownload size={20} />
                        <span className="absolute group-hover:block bottom-10 hidden text-[0.6rem] bg-zinc-900 rounded-full px-2 py-1">Download</span>
                    </span>
                </div>
                <div className="bg-sky-300 w-full h-12"></div>
            </div>
        </div>
    )
}

export default Card
