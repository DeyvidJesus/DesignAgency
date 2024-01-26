export function WhatWeDo() {
  return (
    <section id="WhatWeDo" className="w-screen max-w-full mt-6">
      <div className="sm:px-10 md:px-20 md:py-14">
        <h2 className="text-dark-green font-medium text-lg mb-3">WHAT WE DO</h2>
        <p className="font-semibold sm:text-2xl md:text-3xl">We provide the Perfect Solution <br /> to your business growth</p>
        <ul className="flex sm:flex-col md:flex-row py-20 md:px-8 justify-between sm:items-center md:items-start">
          <li className="sm:full my-4 md:w-1/3 flex flex-col sm:items-center md:items-start">
            <img src="/whatWeDo_activity.svg" alt="" />
            <h3 className="sm:text-md md:text-xl font-semibold my-3">Grow Your Business</h3>
            <p className="text-sm sm:text-center md:text-left mb-8">We help identify the best ways to <br /> improve your business.</p>
            <a className="flex sm:text-sm md:text-md sm:ml-0 md:ml-5 hover:underline" href="#">Learn More <img className="ml-3 sm:w-4" src="/arrow_right.svg" alt="" /></a>
          </li>
          <li className="sm:full my-4 md:w-1/3 flex flex-col sm:items-center md:items-start md:mx-16">
            <img src="/whatWeDo_heart.svg" alt="" />
            <h3 className="sm:text-md md:text-xl font-semibold my-3">Improve Brand Loyalty</h3>
            <p className="text-sm sm:text-center md:text-left mb-8">We help identify the best ways to <br /> improve your business.</p>
            <a className="flex sm:ml-0 md:ml-5 sm:text-sm md:text-md hover:underline" href="#">Learn More <img className="ml-3 sm:w-4" src="/arrow_right.svg" alt="" /></a>
          </li>
          <li className="sm:full my-4 md:w-1/3 flex flex-col sm:items-center md:items-start">
            <img src="/whatWeDo_work.svg" alt="" />
            <h3 className="sm:text-md md:text-xl font-semibold my-3">Improve Your Business</h3>
            <p className="text-sm sm:text-center md:text-left mb-8">We help identify the best ways to <br /> improve your business.</p>
            <a className="flex sm:text-sm md:text-md sm:ml-0 md:ml-5 hover:underline" href="#">Learn More <img className="ml-3 sm:w-4" src="/arrow_right.svg" alt="" /></a>
          </li>
        </ul>
      </div>

      <ul className="sm:py-16 md:py-32 md:px-20 lg:px-40 flex sm:flex-col md:flex-row justify-between items-center bg-light-green bg-opacity-15">
        <li className="sm:w-1/2 md:w-1/4 sm:border-b-[2px] md:border-b-0 md:border-r-[2px] border-light-gray border-opacity-20 p-6 flex flex-col items-center">
          <img src="/info_project.svg" alt="" />
          <p className="mt-2 font-semibold">Completed Projects</p>
          <p className="text-dark-green text-3xl font-bold mt-2">100 +</p>
        </li>
        <li className="sm:w-1/2 md:w-1/4 sm:border-b-[2px] md:border-b-0 md:border-r-[2px] border-light-gray border-opacity-20 p-6 flex flex-col items-center">
          <img src="/info_rating.svg" alt="" />
          <p className="mt-2 font-semibold">Customer Satisfaction</p>
          <p className="text-dark-green text-3xl font-bold mt-2">20 %</p>
        </li>
        <li className="sm:w-1/2 md:w-1/4 sm:border-b-[2px] md:border-b-0 md:border-r-[2px] border-light-gray border-opacity-20 p-6 flex flex-col items-center">
          <img src="/info_raise.svg" alt="" />
          <p className="mt-2 font-semibold">Raised By Clients</p>
          <p className="text-dark-green text-3xl font-bold mt-2">$10M</p>
        </li>
        <li className="sm:w-1/2 md:w-1/4 p-6 flex flex-col items-center">
          <img src="/info_timeline.svg" alt="" />
          <p className="mt-2 font-semibold">Years in Business</p>
          <p className="text-dark-green text-3xl font-bold mt-2">2 yrs</p>
        </li>
      </ul>
    </section>
  );
}
