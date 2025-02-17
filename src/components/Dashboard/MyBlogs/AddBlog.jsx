import React, { useState } from "react";
import SectionWraper from "../SectionWraper/SectionWraper";

const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [blogTexts, setBlogTexts] = useState([""]); // Array for multiple paragraphs
  const [blogs, setBlogs] = useState([]);

  const handleTitleChange = (e) => setBlogTitle(e.target.value);
  const handleImageChange = (e) => setBlogImage(e.target.files[0]);

  // Handle text paragraph change
  const handleTextChange = (index, value) => {
    const updatedTexts = [...blogTexts];
    updatedTexts[index] = value;
    setBlogTexts(updatedTexts);
  };

  // Add a new text paragraph
  const addParagraph = () => {
    setBlogTexts([...blogTexts, ""]);
  };

  // Remove a specific paragraph
  const removeParagraph = (index) => {
    const updatedTexts = blogTexts.filter((_, i) => i !== index);
    setBlogTexts(updatedTexts);
  };

  // Add Blog to UI Preview
  const addBlog = () => {
    if (blogTitle && blogTexts.some((text) => text.trim() !== "")) {
      const newBlog = {
        title: blogTitle,
        image: blogImage ? URL.createObjectURL(blogImage) : null,
        texts: blogTexts.filter((text) => text.trim() !== ""), // Remove empty texts
      };
      setBlogs([...blogs, newBlog]);
      setBlogTitle("");
      setBlogImage(null);
      setBlogTexts([""]); // Reset text fields
    } else {
      alert("You must have fill input fields");
    }
  };

  // Submit Blog to Database
  const handleSubmit = async () => {
    const blogData = { blogTitle, blogImage, blogTexts };
    console.log("Submitted Blog Data:", blogData);

    // Example API call
    // await fetch('/api/blogs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(blogData) });
  };

  return (
    <SectionWraper>
      <div className="bg-dbBg1 p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-5 text-brand3">
          📝 Add a New Blog
        </h2>

        <div className="">
          {/* Blog Title Input */}
          <input
            type="text"
            placeholder="Blog Title"
            value={blogTitle}
            onChange={handleTitleChange}
            className="w-full text-black bg-gray-200   p-3 mb-2 border border-gray-300 rounded-lg "
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 mb-2 border border-gray-300 rounded-lg  text-black bg-gray-200"
          />
        </div>

        {/* Blog Text Inputs */}
        <div>
          {blogTexts.map((text, index) => (
            <div key={index} className="relative">
              <textarea
                placeholder={`Paragraph ${index + 1}`}
                value={text}
                onChange={(e) => handleTextChange(index, e.target.value)}
                className="w-full h-28 p-3 mb-2 border border-gray-300 rounded-lg resize-none text-black bg-gray-200"
              ></textarea>
              {index > 0 && (
                <button
                  onClick={() => removeParagraph(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full hover:bg-red-600 transition"
                >
                  ✖
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add Paragraph Button */}
        <button
          onClick={addParagraph}
          className="w-full bg-gray-300 text-black p-2 rounded-lg mb-4 hover:bg-opacity-90 transition"
        >
          {" "}
          Add Another Paragraph
        </button>

        {/* Add Blog Button */}
        <button
          onClick={addBlog}
          className="w-full bg-brand3 text-white p-3 rounded-lg hover:bg-opacity-90 transition"
        >
          {" "}
          Add Blog
        </button>

        {/* Blog Preview */}
        {blogs.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white">📌 Preview</h3>
            {blogs.map((blog, index) => (
              <div key={index} className="mt-4 p-4 rounded-lg bg-gray-700">
                <h4 className="text-brand3 font-medium text-lg">
                  {blog.title}
                </h4>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt="Blog"
                    className="max-h-40 mt-2 rounded-lg shadow-md"
                  />
                )}
                {blog.texts.map((text, idx) => (
                  <p
                    key={idx}
                    className={`mt-2 text-gray-200 bg-slate-500 p-2 rounded`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white p-3 rounded-lg mt-4 hover:bg-green-600 transition"
        >
          ✅ Submit Blog
        </button>
      </div>
    </SectionWraper>
  );
};

export default AddBlog;
