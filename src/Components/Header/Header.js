import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        <span>React</span> StickyNotes
      </h1>

      //toggling button
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        {" "}
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
