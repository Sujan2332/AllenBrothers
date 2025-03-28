import React from "react";
import { footerData } from "../assets/data"; // Importing footerData
import logo from "../assets/Allen-Brothers-Logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="d-flex flex-row align-items-start justify-content-between gap-4">
        {/* Company Info Section */}
        <div className="w-25">
          <img src={logo} alt="" style={{ border: "2px solid red" }} width="300px" />
          <p className="mt-2 text-sm">{footerData.companyInfo.description}</p>
          <div className="mt-3 d-flex align-items-start gap-3 justify-content-start">
            {footerData.companyInfo.socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-600 hover:text-gray-900 text-muted">
                <i className={`fab fa-${link.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Sections */}
        {footerData.sections.map((section, index) => (
          <div key={index} className="d-flex flex-column">
            <h6 className="font-semibold text-lg">{section.title}</h6>
            <ul className="mt-2 list-unstyled d-flex gap-2 flex-column">
              {section.links.map((link, i) => (
                <li key={i} className="text-sm hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info */}
        <div className="d-flex flex-column gap-0">
          <div>
            <h6 className="font-semibold">{footerData.contactInfo.customerService.title}</h6>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.customerService.phone}</p>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.customerService.days}</p>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.customerService.hour}</p>
          </div>
          <div>
            <h6 className="font-semibold mt-4">{footerData.contactInfo.phoneOrders.title}</h6>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.phoneOrders.phone}</p>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.customerService.days}</p>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.phoneOrders.hour}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
