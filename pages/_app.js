import { motion, useScroll, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import GoogleAdSense from "react-simple-adsense";
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            {/* <GoogleAdSense
                html={
                    '<ins class="adsbygoogle"\n' +
                    'style="display:inline-block;width:728px;height:90px"\n' +
                    'data-ad-client="YOUT_CLIENT_ID"\n' +
                    'data-ad-slot="YOUR_AD_SLOT"></ins>'
                }
            /> */}
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
