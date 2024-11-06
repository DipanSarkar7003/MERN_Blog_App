import { useState } from "react";

function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newBlog = {
    //   title,
    //   content,
    //   author,
    //   image,
    // };
    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    formData.append("image", image); // Append the selected file

    try {
      console.log(formData)
      const response = await fetch("http://localhost:3000/v1/api/blogs/", {
        method: "POST",
        body: formData,
        headers: {
          // "Content-Type": "application/json", (i commented this line coz right now i am not sending data as JSON but  formData)
        },
      });
      console.log(response);
      if (response.ok) {
        console.log("Success response");
      } else {
        console.log("Failed response");
      }
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <>
      <form
        className="max-w-sm mx-auto bg-green-300 p-[2rem] rounded-xl mt-[3rem]"
        encType="multipart/form-data"
      >
        <h1 className="text-3xl text-center mb-4 uppercase bolder">
          Create new blog
        </h1>
        <div className="mb-5">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Blog Content
          </label>

          <input
            onChange={(e) => setContent(e.target.value)}
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author
          </label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <input
          className="mt-3"
          type="file"
          name="cover-image"
          id="cover_image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div className="text-center mt-3">
          <button
            className="border bg-green-800 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
            type="submit"
          >
            Create Blog
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateBlogPage;
