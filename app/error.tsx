"use client";
import React from "react";
interface Props {
  error: Error;
  //   reset: () => void; only use this when needed to prevent from logging the massive error in error log.
}

const ErrorPage = ({ error }: Props) => {
  console.log("Error:", error);
  return (
    <>
      <div>The unexpected error has occured.</div>
      {/* <button className="btn" onClick={() => reset()}>
        Retry
      </button> */}
    </>
  );
};

export default ErrorPage;
