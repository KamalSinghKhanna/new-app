
const Hero = () => {
  return (
    <div className="flex flex-col px-2 sm:px-20 lg:px-0 lg:flex-row pt-24 gap-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl text-white font-medium">
          We Create Learning Experience With Excellent Technology.
        </h1>
        <p className="text-lg sm:text-xl font-normal text-[#FEFEFE]">
          Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And
          Job-Ready Certificate Programs— All Included In Your Subscription
        </p>
        <div className="flex items-center gap-6 pt-5">
          <button className="bg-[#FFEC05] px-3 sm:px-8 py-2.5 sm:py-3.5 rounded-3xl flex items-center justify-center">
            Book Demo Class
          </button>
          <button className="flex items-center gap-4">
            <span className="text-white text-xl font-medium">Explore more</span>
            <img src="./assets/arrow_right.svg" alt="right-arrow" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="h-80 w-full rounded-2xl bg-[#bfc4ca] p-3">
          <video
            className="rounded-xl"
            controls
            src="./assets/video.mp4"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Hero