import React, { useEffect, useState } from "react";
import shell from "../../assets/tabbedImages/shell.png";
import python from "../../assets/tabbedImages/python.png";
import js from "../../assets/tabbedImages/js.png";
import ruby from "../../assets/tabbedImages/ruby.png";

function UpdatedNavTabs() {
  const [tabbedImages] = useState([
    {
      id: 0,
      name: "Shell",
      src: shell,
    },
    { id: 1, name: "Python", src: python },
    { id: 2, name: "Ruby", src: ruby },
    { id: 3, name: "Js", src: js },
  ]);

  const [currentImageToShow, setCurrentImageToShow] = useState(0);

  const showImageOnFilter = (imageName) => {
    switch (imageName) {
      case "Python":
        setCurrentImageToShow(1);
        break;
      case "Ruby":
        setCurrentImageToShow(2);
        break;

      case "Js":
        setCurrentImageToShow(3);
        break;
      default:
        setCurrentImageToShow(0);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start gap-4">
        <p
          className="cursor-pointer text-2xl  hover:underline"
          onClick={() => showImageOnFilter("Shell")}
        >
          Shell
        </p>
        <p
          className="cursor-pointer text-2xl hover:underline"
          onClick={() => showImageOnFilter("Python")}
        >
          Python
        </p>
        <p
          className="cursor-pointer text-2xl  hover:underline"
          onClick={() => showImageOnFilter("Ruby")}
        >
          {"Ruby"}
        </p>
        <p
          className="cursor-pointer text-2xl hover:underline"
          onClick={() => showImageOnFilter("Js")}
        >
          {"Js"}
        </p>
      </div>
      <div>
        <img src={tabbedImages[currentImageToShow]["src"]} alt="" />
      </div>
    </div>
  );
}

function HomePageTab() {
  return (
    <div
      style={{
        // clipPath: "polygon(0 0, 100% 0, 100% 79%, 0% 100%)",
        position: "relative",
        top: "450px",
      }}
      className="bg-[]"
    >
      <div className="flex py-52 w-6/12 my-32 pt-52 pb-96 ml-56 gap-12">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-600">
            Build-in minutes, launch in weeks Designed by developers, for
            developers
          </h1>
          <p className="my-8">
            With modern APIs and webhooks, you can build financial features
            using our clear, instructive guides in all the languages you use and
            love, from Node to Shell to Python
          </p>
        </div>
        <div className="w-6/12">
          <UpdatedNavTabs />
        </div>
      </div>
    </div>
  );
}

export default UpdatedNavTabs;
