import React from "react";

export function Button({ children, disabled, type = "button", onClick }) {
  return (
    <button
      type={type}
      {...onClick && { onClick }}
    >
      {children}
    </button>
  );
}
