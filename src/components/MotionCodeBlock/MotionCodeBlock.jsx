import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "./MotionCodeBlock.css";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function MotionCodeBlock() {
  let firstCursor,
    firstNode,
    firstUrl,
    secondNode,
    thirdNode,
    secondCursor,
    forthNode,
    forthCursor,
    acceptNode,
    acceptCursor,
    contentType,
    contentCursor,
    endingBrace,
    endingBraceCursor,
    response,
    responseCursor,
    print,
    printCursor;

  useEffect(() => {
    secondCursor.style.visibility = "hidden";
    forthCursor.style.visibility = "hidden";
    acceptCursor.style.visibility = "hidden";
    contentCursor.style.visibility = "hidden";
    endingBraceCursor.style.visibility = "hidden";
    responseCursor.style.visibility = "hidden";
    printCursor.style.visibility = "hidden";

    const t1 = gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: ".codeblock",
        // start: "top 50%",
        // end: "bottom top",
        toggleActions: "play none none none",
      },
    });

    t1.to(firstNode, {
      text: "Import Requests",
      onComplete: () => {
        firstCursor.style.visibility = "hidden";
      },
    })
      .to(secondNode, {
        text: "url   ",
        onStart: () => (secondCursor.style.visibility = "visible"),
      })
      .to(thirdNode, {
        text: ' = "http://sandbox.pavelon.com/api/user/otp/send"',
        onStart: () => {},
        onComplete: () => {
          secondCursor.style.visibility = "hidden";
        },
      })
      .to(forthNode, {
        onStart: () => (forthCursor.style.visibility = "visible"),
        onComplete: () => (forthCursor.style.visibility = "hidden"),
        text: "headers = {",
      })
      .to(acceptNode, {
        text: '"Accept": "application/json"',
        onStart: () => {
          acceptCursor.style.visibility = "visible";
        },
        onComplete: () => (acceptCursor.style.visibility = "hidden"),
      })
      .to(contentType, {
        onStart: () => {
          contentCursor.style.visibility = "visible";
        },
        onComplete: () => {
          contentCursor.style.visibility = "hidden";
        },
        text: '"Content-Type": "application/json"',
      })
      .to(endingBrace, {
        text: "}",
        onStart: () => (endingBraceCursor.style.visibility = "visible"),
        onComplete: () => (endingBraceCursor.style.visibility = "hidden"),
      })
      .to(response, {
        onStart: () => (responseCursor.style.visibility = "visible"),
        onComplete: () => {
          responseCursor.style.visibility = "hidden";
        },
        text: "response = requests.post(url, headers=headers)",
      })
      .to(print, {
        text: "print(response.text)",
        onStart: () => {
          printCursor.style.visibility = "visible";
        },
        onComplete: () => {
          printCursor.classList.add("blink");
        },
      });
  }, []);
  return (
    <div className="flex flex-col justify-between codeblock bg-gray-800 text-gray-100 rounded-lg p-4">
      <div id="pavelonCodeBlock">
        <span class="block">Installation</span>
        <span class="text-green-600 text-sm bg-gray-500 my-1 block rounded">
          <span class="text-gray-100">$</span> python -m pip install requests
        </span>
        <hr />
        <div class="flex justify-between">
          <span>Request</span>
          <span className="flex gap-1 items-center">
            <i class="fa-solid fa-angle-down"></i> <span>Examples</span>
          </span>
        </div>
        <span ref={(node) => (firstNode = node)} class="importRequests"></span>
        <span
          ref={(cursorNode) => (firstCursor = cursorNode)}
          class="text-yellow-500 text-2xl"
        >
          |
        </span>
        <div class="flex items-center w-full min-w-fit">
          <div class="inline">
            <span
              ref={(node) => (secondNode = node)}
              class="url1 text-green-500"
            ></span>
            <span
              ref={(node) => (thirdNode = node)}
              style={{ color: "#cae697" }}
              class="url2"
            ></span>
          </div>
          <span
            ref={(node) => (secondCursor = node)}
            class="blinkingCursor text-yellow-500 text-2xl"
          >
            |
          </span>
          <br />
          <br />
        </div>
        <span
          style={{ color: " #cae697" }}
          ref={(node) => (forthNode = node)}
          class="inline-block"
        ></span>
        <span
          ref={(node) => (forthCursor = node)}
          class="text-yellow-500 text-2xl"
        >
          |
        </span>
        <div>
          <span
            ref={(node) => (acceptNode = node)}
            class="ml-8 inline-block"
          ></span>
          <span
            ref={(node) => (acceptCursor = node)}
            class="text-yellow-500 text-2xl"
          >
            |
          </span>
        </div>
        <div>
          <span
            ref={(node) => (contentType = node)}
            class="ml-8 inline-block"
          ></span>
          <span
            ref={(node) => (contentCursor = node)}
            class="text-yellow-500 text-2xl"
          >
            |
          </span>
        </div>
        <div>
          <span
            ref={(node) => (endingBrace = node)}
            class="inline-block"
          ></span>
          <span
            ref={(node) => (endingBraceCursor = node)}
            class="text-yellow-500 text-2xl"
          >
            |
          </span>
        </div>
        <br />

        <div>
          <span
            ref={(node) => (response = node)}
            class="text-red-500 inline-block"
          ></span>
          <span
            ref={(node) => (responseCursor = node)}
            class="text-yellow-500 text-2xl"
          >
            |
          </span>
        </div>
        <div>
          <span ref={(node) => (print = node)} class="inline-block"></span>
          <span
            ref={(node) => (printCursor = node)}
            class="text-yellow-500 text-2xl"
          >
            |
          </span>
        </div>
      </div>

      <div class="mt-2">
        <hr />
        <div class="flex justify-end">
          <button class="bg-primary hover:bg-blue-900 mt-2 text-white font-bold py-2 px-4 rounded">
            Try it
          </button>
        </div>
      </div>
    </div>
  );
}

export default MotionCodeBlock;
