import React from "react";

interface ModalProps {
  title: string;
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  title,
  show,
  onClose,
  children,
  footer,
}) => {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          // backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "700px",
          maxHeight: "calc(100vh - 40px)", // adjust the height to your liking
          overflowY: "auto",
          WebkitOverflowScrolling: "touch", // optional, for smooth scrolling on mobile devices
          scrollbarWidth: "none", // optional, for Firefox
          // "&::-webkit-scrollbar": {
          //   width: 0,
          //   height: 0,
          // },
          // "&::-webkit-scrollbar-thumb": {
          //   background: "transparent",
          // },
          // "&::-webkit-scrollbar-track": {
          //   background: "transparent",
          // },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid #ddd",
            fontSize: "1.25rem", // equivalent to text-4xl
            fontWeight: "bold",
            color: "#9E4E37", // equivalent to text-amber-950
            textAlign: "left",
          }}
        >
          <h2 style={{ margin: 0 }}>{title}</h2>
          {/* <button
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
              fontSize: "24px",
            }}
            onClick={onClose}
          >
            ×
          </button> */}
        </div>
        <div style={{ padding: "20px" }}>{children}</div>
        {footer && (
          <div
            style={{
              borderTop: "1px solid #ddd",
              display: "flex",
              justifyContent: "flex-end", // updated to flex-end
              alignItems: "center", // added to center the footer vertically
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
