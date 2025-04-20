import { Element } from "react-scroll";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogImg1 from "../../../assets/img/time-management.webp";
import blogImg2 from "../../../assets/img/What-Is-JavaScript-Used-For.avif";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Mastering Time Management as a Web Developer: A Guide to Boosting Productivity",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe facilis praesentium sint minus debitis. Reprehenderit, est libero? Deleniti libero id impedit error repudiandae distinctio nemo ad fugit, veniam quibusdam modi ullam eligendi officia alias perspiciatis ea veritatis accusantium minima sunt sed temporibus. Officia debitis beatae reiciendis quis deleniti fugit dolore architecto inventore voluptates eligendi.",
      img: blogImg1,
    },
    {
      id: 2,
      title: "Must-Read Blogs for Web Developers",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe facilis praesentium sint minus debitis. Reprehenderit, est libero? Deleniti libero id impedit error repudiandae distinctio nemo ad fugit, veniam quibusdam modi ullam eligendi officia alias perspiciatis ea veritatis accusantium minima sunt sed temporibus. Officia debitis beatae reiciendis quis deleniti fugit dolore architecto inventore voluptates eligendi.",
      img: blogImg2,
    },
    {
      id: 3,
      title: "How to learn Javascript faster",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe facilis praesentium sint minus debitis. Reprehenderit, est libero? Deleniti libero id impedit error repudiandae distinctio nemo ad fugit, veniam quibusdam modi ullam eligendi officia alias perspiciatis ea veritatis accusantium minima sunt sed temporibus. Officia debitis beatae reiciendis quis deleniti fugit dolore architecto inventore voluptates eligendi.",
      img: blogImg2,
    },
  ];
  return (
    <Element name="blogs" className="section">
      <section className="bg-bg2">
        <div className="max-w-screen-xl mx-auto px-8  py-16 flex flex-col md:items-center  md:flex-row min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)]">
          <div className="w-full">
            <SectionTitle title="Recent Blogs" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14 md:mt-20 ">
              {blogs.map((blog) => (
                <SingleBlog key={blog.id} blog={blog}></SingleBlog>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Blog;
