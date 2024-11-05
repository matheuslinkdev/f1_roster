import React from "react";

const Loading = () => {
  return (
    <article className="flex flex-col items-center justify-center">
      <h1 className="text-2xl">Loading...</h1>
      <iframe
        src="https://lottie.host/embed/1662f40b-7d2f-40f9-ae18-88395176c8eb/kZhzKFp8Ek.json"
        className="w-full h-64 bg-cover"
      ></iframe>
    </article>
  );
};

export default Loading;
