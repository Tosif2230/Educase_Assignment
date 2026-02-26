import React from "react";

function Layout({ children }) {
  return (
    <div className="h-screen w-full lg:w-1/4 justify-center  bg-white rounded-2xl shadow-xl p-6 overflow-hidden">
      {children}
    </div>
  );
}

export default Layout;
