import React from "react";
import Button from "./Button";

const Dialog = () => {
  return (
    <div>
      <style>{`
        dialog {
          animation: fade-out 0.7s ease-out;
        }

        dialog[open] {
          animation: fade-in 0.7s ease-out;
        }

        dialog[open]::backdrop {
          animation: backdrop-fade-in 0.7s ease-out forwards;
        }

        /* Animation keyframes */

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scaleY(0);
            display: none;
          }

          100% {
            opacity: 1;
            transform: scaleY(1);
            display: block;
          }
        }

        @keyframes fade-out {
          0% {
            opacity: 1;
            transform: scaleY(1);
            display: block;
          }

          100% {
            opacity: 0;
            transform: scaleY(0);
            display: none;
          }
        }

        @keyframes backdrop-fade-in {
          0% {
            background-color: rgb(0 0 0 / 0%);
          }

          100% {
            background-color: rgb(0 0 0 / 25%);
          }
        }

        body,
        button {
          font-family: system-ui;
        }
      `}</style>
      <dialog id="dialog">
        Content here
        <Button className="close">close</Button>
      </dialog>
      <button
        className={`bg-main-dark text-white m-5 p-2 rounded-lg hover:bg-main-light`}
      >
        Show Modal
      </button>
      <script>
        {`
          const dialogElem = document.getElementById("dialog");
          const showBtn = document.querySelector(".show");
          const closeBtn = document.querySelector(".close");

          showBtn.addEventListener("click", () => {
            dialogElem.showModal();
          });

          closeBtn.addEventListener("click", () => {
            dialogElem.close();
          });
        `}
      </script>
    </div>
  );
};

export default Dialog;
