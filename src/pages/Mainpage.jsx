import BlogCard from "../Components/BlogCard";
import BlogCard1 from "../Components/BlogCard1";
import BlogCard3 from "../Components/BlogCard3";
import Footer from "../Components/Footer";

const Mainpage = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="font-bold text-[22px] px-3 py-2  text-[#896efd]">
        New Blog
      </h1>
      <div className="mt-8 px-4">
        <BlogCard />
        <h1 className="font-bold px-3 py-2 text-[22px] text-[#896efd]  my-8">
          Technology
        </h1>
        <BlogCard1 />
        <h1 className="font-bold px-3 py-2 text-[22px] text-[#896efd]  my-8">
          Ai & ML
        </h1>
        <BlogCard3 />
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
