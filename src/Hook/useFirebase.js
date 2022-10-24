import React from "react";

const useFirebase = () => {
  console.log(
    "Hello, I am a custom hook. I am used to share data between components."
  );
  const test1 = () => {
    console.log("test1");
  };
  const test2 = () => {
    console.log("test2");
  };
  return { test1, test2 };
};

export default useFirebase;
