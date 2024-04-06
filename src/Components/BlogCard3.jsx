import Blog1 from "../assets/blog1.svg";
import Blog2 from "../assets/blog2.svg";
import Blog3 from "../assets/blog3.svg";
import Blog4 from "../assets/blog3.svg";
const BlogCard3 = () => {
  return (
    <div className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-5">
      <a href="/blog/web-devlopment">
        <div className="h-[320px] border-[1px] rounded-md shadow-sm hover:translate-y-[15px] cursor-pointer ease-linear">
          <div className="px-3">
            <div className="w-full h-[40%] px-2 py-4">
              <img src={Blog1} alt="Blog1" />
            </div>
          </div>
          <p className="px-4 hover:underline hover:text-[#896efd] font-semibold text-gray-500">
            Web devlopment
          </p>
          <p className="px-4 text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            natus.
          </p>
        </div>
      </a>
      <a href="/blog/web-devlopment">
        <div className="h-[320px] border-[1px] rounded-md shadow-sm hover:translate-y-[15px] cursor-pointer ease-linear">
          <div className="px-3">
            <div className="w-full h-[40%] px-2 py-4">
              <img src={Blog2} alt="Blog1" />
            </div>
          </div>
          <p className="px-4 hover:underline hover:text-[#896efd] font-semibold text-gray-500">
            Web devlopment
          </p>
          <p className="px-4 text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            natus.
          </p>
        </div>
      </a>
      <a href="/blog/web-devlopment">
        <div className="h-[320px] border-[1px] rounded-md shadow-sm hover:translate-y-[15px] cursor-pointer ease-linear">
          <div className="px-3">
            <div className="w-full h-[40%] px-2 py-4">
              <img src={Blog3} alt="Blog1" />
            </div>
          </div>
          <p className="px-4 hover:underline hover:text-[#896efd] font-semibold text-gray-500">
            Web devlopment
          </p>
          <p className="px-4 text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            natus.
          </p>
        </div>
      </a>
      <a href="/blog/web-devlopment">
        <div className="h-[330px] border-[1px] rounded-md shadow-sm hover:translate-y-[15px] cursor-pointer ease-linear">
          <div className="px-3">
            <div className="w-full h-[40%] px-2 py-4">
              <img src={Blog4} alt="Blog1" />
            </div>
          </div>
          <p className="px-4 hover:underline hover:text-[#896efd] font-semibold text-gray-500">
            Web devlopment
          </p>
          <p className="px-4 text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            natus.
          </p>
        </div>
      </a>
    </div>
  );
};

export default BlogCard3;
