import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";

const LandingPage = () => {
  let desc =
    "Generate short, memorable links with ease using UrlShortner’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with UrlShortner. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using UrlShortner’s intuitive interface. Share URLs effortlessly across platforms.";

  const navigate = useNavigate();
  const dashBoardnavigateHandler = () => {};
  const { token } = useStoreContext();
  console.log("token from landing page: " + token);

  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Easy, Secure & Simple Url Shortner
          </motion.h1>

          <p className="text-slate-700 ">
            UrlShortner streamlines the process of URL shortening, making
            sharing links effortless and efficient. With its user-friendly
            interface, UrlShortner allows you to generate concise, easy-to-share
            URLs in seconds. Simplify your sharing experience with UrlShortner
          </p>

          <div className="items-center gap-3">
            <motion.button
              onClick={() => {
                navigate("/dashboard");
              }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              //   onClick={dashBoardNavigateHandler}
              className="m-2 bg-blue-500 border-black text-amber-50 border w-40 rounded-sm py-2 hover:bg-blue-700 transition"
            >
              Manage Links
            </motion.button>
            <motion.button
              onClick={() => {
                navigate("/dashboard");
              }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              //   onClick={dashBoardNavigateHandler}

              className="m-2 border w-40 rounded-sm py-2 hover:bg-gray-300 transition"
            >
              Shorten Link
            </motion.button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400ox] object-cover rounded-md"
            src="/images/urlshortner-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm-w[80%] mx-auto text-3xl text-center"
        >
          Trusted by individuals and teams at the world's best companies
        </motion.p>
      </div>

      <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
        <Card
          title="Simple URL Shortening"
          desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
        />
        <Card
          title="Powerful Analytics"
          desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
        />
        <Card
          title="Enhanced Security"
          desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
        />
        <Card
          title="Fast and Reliable"
          desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
"
        />
      </div>
    </div>
  );
};
export default LandingPage;
