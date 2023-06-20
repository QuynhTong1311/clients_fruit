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
import { Helmet } from "react-helmet";
import { FacebookProvider, Like } from "react-facebook";

const Layout = ({ title, description, children }) => {
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
        {/* <Helmet>
          <script>{`
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "107771938626773");
          chatbox.setAttribute("attribution", "biz_inbox");
        `}</script>
          <script
            src="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js"
            async
            defer
          ></script>
        </Helmet> */}
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
        <FacebookProvider appId="107771938626773">
          <Like
            href="http://www.facebook.com"
            colorScheme="dark"
            showFaces
            share
          />
        </FacebookProvider>
      </div>
    </>
  );
};

export default Layout;
