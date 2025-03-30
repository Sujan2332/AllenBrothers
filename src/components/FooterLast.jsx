import React from "react";

const FooterLast = () => {
  return (
    <div className="bg-primary w-100 main py-2 text-white d-flex flex-row align-items-center justify-content-between">
      
      {/* 🏷️ Copyright Notice */}
      <div>© 2024 Allen Brothers. All Rights Reserved.</div>

      {/* 🔗 Legal Links */}
      <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
        <p className="m-0 cursor-pointer">Privacy Policy</p>
        <p className="m-0 cursor-pointer">Terms of Service</p>
      </div>
      
    </div>
  );
};

export default FooterLast;
