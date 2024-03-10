
const WhyUs = () => {
  return (
    <section className="pt-20 px-2 sm:px-24 flex flex-col gap-40">
      <div className="flex flex-col gap-14 ">
        <div className="flex flex-col  lg:px-32 xl:px-44 gap-6">
          <span className="text-3xl sm:text-4xl font-medium text-center px-6 sm:px-12">Why Us</span>
          <p className="text-lg sm:text-lg font-normal text-[#707070] text-center">
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="h-80 w-full rounded-lg bg-[#bfc4ca] p-3">
            <video
              className="rounded-lg"
              controls
              src="./assets/video.mp4"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            ></video>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-6 px-2 sm:px-0">
            <span className="text-2xl font-medium">
              Crafting Your Dream Career: Building a Path You Love with us
            </span>
            <p className="text-lg font-normal text-[#707070] text-left">
              At Learning Exp. We Are Committed To Providing You With A Superior
              Learning Experience That Empowers You To Achieve Your Goals. Join
              Us Today And Embark On A Journey Of Discovery, Growth, And
              Success.
            </p>
            <p className="text-lg font-normal text-[#707070] text-left">
              Our Platform Is Designed To Empower Learners Like You To Excel In
              Today’s Dynamic World.
            </p>
            <button className="bg-[#FFEC05] px-12 py-3 rounded-3xl flex items-center justify-center">
              Get More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-3xl sm:text-4xl font-medium text-center lg:px-32">
          We Completed 1200+ Certification Program Successfully & Counting
        </span>
        <p className="text-lg font-normal text-[#707070] text-center">
          At Learning Exp. We Are Committed To Providing You With A Superior
          Learning Experience That Empowers You To Achieve Your Goals. Join Us
          Today And Embark On A Journey Of Discovery, Growth, And Success.
        </p>
        <div className="flex flex-wrap sm:justify-evenly pt-6 gap-10">
          <div className="flex items-center">
            <img
              src="./assets/assignment.svg"
              alt="assignment"
              className="w-16 h-16"
            />
            <div className="flex flex-col">
              <span className="text-[#1453FF] text-xl font-medium">100+</span>
              <span className="text-[#1453FF] text-xl font-medium">
                Batch Complete
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="./assets/assignment.svg"
              alt="assignment"
              className="w-16 h-16"
            />
            <div className="flex flex-col">
              <span className="text-[#1453FF] text-xl font-medium">50+</span>
              <span className="text-xl font-medium">Active Batches</span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="./assets/user-circle.svg"
              alt="user-circle"
              className="w-16 h-16"
            />
            <div className="flex flex-col">
              <span className="text-[#1453FF] text-xl font-medium">
                10,000+
              </span>
              <span className="text-xl font-medium">Student Satisfied</span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="./assets/user-circle.svg"
              alt="user-circle"
              className="w-16 h-16"
            />
            <div className="flex flex-col">
              <span className="text-[#1453FF] text-xl font-medium">10+</span>
              <span className="text-xl font-medium">user-circle.svg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs