import React, { useRef, useState } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const commentEle = useRef();
  const nameEle = useRef();
  const emailEle = useRef();
  const storeDataEle = useRef();

  const handleComment = () => {
    setError(false);
    const { value: comment } = commentEle.current;
    const { value: name } = nameEle.current;
    const { value: email } = emailEle.current;
    const { checked: storeData } = storeDataEle.current;

    if (!name || !comment || !email) {
      setError(error);
      return;
    }
    const commentObj = { name, email, comment, slug };
    if (storeData) {
      localStorage?.setItem("name", name);
      localStorage?.setItem("email", email);
    } else {
      localStorage?.removeItem("name", name);
      localStorage?.removeItem("email", email);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEle}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEle}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailEle}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEle}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            htmlFor="storeData"
            className="text-gray-500 cursor-pointer ml-2"
          >
            Save my name and email for next time i comment
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          onClick={handleComment}
          className="transition duration-500 animation-ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMsg && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment Subbmitted For Review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
