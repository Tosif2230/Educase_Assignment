import React from "react";

function Layout({ children }) {
  return (
    <div
      className="h-screen w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto shadow-xl p-4 sm:p-6 md:p-8 bg-gray-100">
      {children}
    </div>
  );
}

export default Layout;
