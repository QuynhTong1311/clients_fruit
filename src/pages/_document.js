import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta
            property="og:title"
            content="MernShop - React Store e-commerce Template"
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:description"
            content="React Store e-commerce Template"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
