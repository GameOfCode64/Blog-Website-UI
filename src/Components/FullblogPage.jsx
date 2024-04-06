import Blog4 from "../assets/blog5.jpg";
import Footer from "./Footer";
const FullblogPage = () => {
  return (
    <div className="md:px-8 px-4 py-6">
      <div className="w-full md:h-[520px] h-auto">
        <img
          src={Blog4}
          alt="blog"
          className="w-full md:h-full h-full rounded-md"
        />
      </div>
      <div className="mt-8 px-4">
        <h1 className="text-[32px] font-bold text-[#896efd]">Web Devlopment</h1>
        <span className="mt-3 text-sm text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          neque vero impedit. Ipsa quibusdam dignissimos tempore sed assumenda,
          optio minus, impedit reprehenderit rem cumque voluptates quaerat nam
          fugiat nisi numquam nemo consequuntur.
        </span>
        <div className="mt-4">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            laboriosam sed, voluptas culpa nemo commodi, iste quidem tempore
            placeat pariatur dolorum dolores exercitationem dolor error cumque.
            In, vel cumque consequatur distinctio debitis quia voluptates
            consequuntur aliquid recusandae, dignissimos maiores non nulla alias
            earum facere et quasi cum accusantium! Sunt laborum sed voluptas
            quod reprehenderit tempora quo quae accusamus dicta soluta officia
            suscipit aliquid dignissimos doloremque libero quaerat optio,
            molestias, earum cumque ad. Reiciendis eveniet quasi nam omnis quo
            excepturi cum in, est ad voluptas dolore. Aut minima consequatur
            ullam magnam voluptate ex optio assumenda itaque quis error, id
            adipisci sunt repellat, expedita omnis distinctio doloribus ducimus
            consequuntur molestias qui et totam facilis! Consequatur modi
            doloremque provident laborum soluta dolorem incidunt, voluptas
            quaerat id laboriosam accusamus et. Neque quam fuga, nobis est
            obcaecati accusantium iste dolorum distinctio aspernatur
            voluptatibus quia laudantium et, quae deleniti repellat corporis
            earum. Dignissimos nisi fuga porro!
          </p>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            laboriosam sed, voluptas culpa nemo commodi, iste quidem tempore
            placeat pariatur dolorum dolores exercitationem dolor error cumque.
            In, vel cumque consequatur distinctio debitis quia voluptates
            consequuntur aliquid recusandae, dignissimos maiores non nulla alias
            earum facere et quasi cum accusantium! Sunt laborum sed voluptas
            quod reprehenderit tempora quo quae accusamus dicta soluta officia
            suscipit aliquid dignissimos doloremque libero quaerat optio,
            molestias, earum cumque ad. Reiciendis eveniet quasi nam omnis quo
            excepturi cum in, est ad voluptas dolore. Aut minima consequatur
            ullam magnam voluptate ex optio assumenda itaque quis error, id
            adipisci sunt repellat, expedita omnis distinctio doloribus ducimus
            consequuntur molestias qui et totam facilis! Consequatur modi
            doloremque provident laborum soluta dolorem incidunt, voluptas
            quaerat id laboriosam accusamus et. Neque quam fuga, nobis est
            obcaecati accusantium iste dolorum distinctio aspernatur
            voluptatibus quia laudantium et, quae deleniti repellat corporis
            earum. Dignissimos nisi fuga porro!
          </p>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            laboriosam sed, voluptas culpa nemo commodi, iste quidem tempore
            placeat pariatur dolorum dolores exercitationem dolor error cumque.
            In, vel cumque consequatur distinctio debitis quia voluptates
            consequuntur aliquid recusandae, dignissimos maiores non nulla alias
            earum facere et quasi cum accusantium! Sunt laborum sed voluptas
            quod reprehenderit tempora quo quae accusamus dicta soluta officia
            suscipit aliquid dignissimos doloremque libero quaerat optio,
            molestias, earum cumque ad. Reiciendis eveniet quasi nam omnis quo
            excepturi cum in, est ad voluptas dolore. Aut minima consequatur
            ullam magnam voluptate ex optio assumenda itaque quis error, id
            adipisci sunt repellat, expedita omnis distinctio doloribus ducimus
            consequuntur molestias qui et totam facilis! Consequatur modi
            doloremque provident laborum soluta dolorem incidunt, voluptas
            quaerat id laboriosam accusamus et. Neque quam fuga, nobis est
            obcaecati accusantium iste dolorum distinctio aspernatur
            voluptatibus quia laudantium et, quae deleniti repellat corporis
            earum. Dignissimos nisi fuga porro!
          </p>
        </div>
      </div>
      <div>
        <h1 className="mt-8 font-bold text-[22px] text-[#896efd]">Comment</h1>
        <textarea
          rows="5"
          className="w-full px-2 py-2 mt-2  focus:outline-[#896efd]"
          placeholder="Write Your Comment.........."
        ></textarea>
        <button className=" bg-[#896efd] text-white px-3 mt-3 py-2 rounded-md">
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default FullblogPage;
