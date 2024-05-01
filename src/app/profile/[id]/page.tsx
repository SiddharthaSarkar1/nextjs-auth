import React from "react";

export default function page({ params }: any) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl">Profile details page</h1>
        <hr />
        <h2 className="m-2 p-3 bg-green-300 rounded text-black">{params.id}</h2>
      </div>
    </>
  );
}
