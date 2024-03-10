const Feedback = () => {
  return (
    <div className="flex flex-col gap-4 pt-32 px-2 sm:px-12 lg:px-32">
      <span className="text-3xl sm:text-4xl font-medium">Our Students Feedback</span>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
        <span className="text-md sm:text-lg font-normal text-[#707070]">
          At Learning Exp. We Are Committed To Providing You With A Superior
          Learning Experience That Empowers You To Achieve Your Goals. Join Us
          Today And Embark On A Journey Of Discovery, Growth, And Success.
        </span>
        <button className="bg-[#F3F3F3] w-[300px] justify-center h-10 rounded-lg flex items-center">
          <span className="text-base">Read More</span>
          <img
            src="./assets/arrow-right.svg"
            alt="arrow-right"
            className="w-10 h-10"
          />
        </button>
      </div>

      <div className="flex flex-col items-center sm:flex-row gap-10 md:gap-40 bg-[#EFEFFE] mt-10 pb-5 sm:pb-0 sm:mt-2 pt-6 sm:pt-0">
        <img src="./assets/student.png" alt="student" className="w-72 h-80" />
        <div className="flex flex-col gap-1 items-center sm:items-start justify-center xl:pr-44">
          <div className="flex items-center gap-4 mb-4">
            <img src="./assets/star.svg" alt="star" className="w-8 h-8" />
            <img src="./assets/star.svg" alt="star" className="w-8 h-8" />
            <img src="./assets/star.svg" alt="star" className="w-8 h-8" />
            <img src="./assets/star.svg" alt="star" className="w-8 h-8" />
            <img src="./assets/star.svg" alt="star" className="w-8 h-8" />
          </div>
          <p className="text-lg font-normal mb-8 text-center sm:text-left">
            &quot;Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
            Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
            Quae Ab Illo Modi Tem.&quot;
          </p>
          <span className="text-lg font-medium">Riad Isalm</span>
          <span className="text-sm font-normal">
            Product Manager. <span className="text-blue-800">@Learning.Com</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
