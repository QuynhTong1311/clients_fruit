import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { React, useEffect } from "react";
//internal import
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import FooterTop from "@layout/footer/FooterTop";
import MobileFooter from "@layout/footer/MobileFooter";
import FeatureCard from "@component/feature-card/FeatureCard";
import NavBarTop from "./navbar/NavBarTop";

const Layout = ({ title, description, children }) => {
   useEffect(() => {
    const script1 = document.createElement('script');
    script1.innerHTML = `
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "107771938626773");
      chatbox.setAttribute("attribution", "biz_inbox");
    `;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    script2.async = true;
    script2.defer = true;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="font-sans">
        <Head>
          <title>
            {title
              ? `MernShop | ${title}`
              : "MernShop - Store e-commerce Template"}
          </title>
          {description && <meta name="description" content={description} />}
          <link ref="icon" href="/favicon.png" />
        </Head>
        <NavBarTop />
        <Navbar />
        <div className="bg-gray-50">{children}</div>
        <MobileFooter />
        <div className="w-full">
          <FooterTop />
          <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <FeatureCard />
          </div>
          <hr className="hr-line"></hr>
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
