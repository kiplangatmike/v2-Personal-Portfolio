import React, { useState, useEffect } from "react";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, [60000]);

  return (
    <div className="text-center">
      <h6 className="mb-3 font-bold">MIKE KIPLANGAT</h6>
      <p>@{currentYear}</p>
    </div>
  );
};
export default Footer;
