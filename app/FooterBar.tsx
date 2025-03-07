import React from "react";

const FooterBar = () => {
  return (
    <div className="p-3 bg-slate-200 mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} All Rights Reserved. </p>
    </div>
  );
};

export default FooterBar;
