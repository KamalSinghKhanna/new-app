const Contact = () => {
  return (
    <div className="bg-[#333697] flex flex-col sm:flex-row items-center gap-4 mt-24 px-3 sm:px-6 lg:px-10 py-9 mx-5 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-64 rounded-2xl">
      <div className="flex flex-col items-center sm:items-start gap-4">
        <span className="text-white text-3xl">Contact Us!</span>
        <p className="text-white text-base text-center sm:text-left font-normal">
          There are many variations of passages of Lorem Ipsum but the majority
          have suffered alteration.
        </p>
      </div>
      <div className="flex items-center justify-between bg-white rounded-3xl w-72 md:w-96 px-3 py-2">
        <input type="text" placeholder="email here" className="outline-none w-32"/>
        <button className="bg-[#FFEC05] px-7 py-2 rounded-3xl flex items-center justify-center">
          send
        </button>
      </div>
    </div>
  );
}

export default Contact