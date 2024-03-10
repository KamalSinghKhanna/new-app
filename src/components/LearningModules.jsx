
const LearningModules = () => {
  return (
    <div className="flex flex-col pt-20 sm:pt-20 gap-24 px-2 sm:px-24">
      <div className="flex flex-col  lg:px-32 xl:px-44 gap-6">
        <span className="text-3xl sm:text-4xl font-medium text-center px-6 sm:px-12">
          We provide various kind of learning modules for you
        </span>
        <p className="text-lg sm:text-xl font-normal text-[#707070] text-center">
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-10">
        <div className="flex flex-col items-center justify-center gap-2 w-80">
          <img
            src="./assets/smartphone.svg"
            alt="smartphone"
            className="w-52 h-48"
          />
          <span className="text-2xl font-medium">Learn Anything</span>
          <p className="text-lg text-[#6B6969] font-normal text-center">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-80">
          <img
            src="./assets/Dashboard.svg"
            alt="Dashboard"
            className="w-52 h-48"
          />
          <span className="text-2xl font-medium">Flexible Learning</span>
          <p className="text-lg text-[#6B6969] font-normal text-center">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-80">
          <img src="./assets/layout.svg" alt="layout" className="w-52 h-48" />
          <span className="text-2xl font-medium">Expert Connect</span>
          <p className="text-lg text-[#6B6969] font-normal text-center">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable
          </p>
        </div>
      </div>
    </div>
  );
}

export default LearningModules