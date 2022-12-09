import React, { Component } from "react";
import { FaElementor, FaLock, FaMoneyBillAlt, FaFileInvoice } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "Email Verification",
    url: "/EmailVerification",
  },
  {
    id: 3,
    text: "Malware Analysis",
    url: "/PhishingAnalysis",
  },
  {
    id: 4,
    text: "Proxy Detection",
    url: "/ProxyDetection",
  },
  {
    id: 5,
    text: "Learning",
    url: "/Learning",
  },

];

export const data = [
  {
    id: 1,
    url: "/password",
    text: "password",
    icon: <FaLock />,
  },
  {
    id: 2,
    url: "/note",
    text: "notes",
    icon: <FaElementor />,
  },
  {
    id: 3,
    url: "/note",
    text: "Documents",
    icon: <FaFileInvoice />,
  },
 
];
