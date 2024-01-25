export function Intro() {
  return (
    <main className="bg-light-green flex flex-col items-center w-screen max-w-full pt-16">
      <div className="flex items-center sm:px-10 md:px-14 lg:px-20 py-8">
        <div>
          <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold">Increase Your Customers Loyalty and Satisfaction</h1>
          <p className="font-medium md:text-sm lg:text-md mt-3 mb-8">We help businesses like yours earn more customers, standout from competitors, make more money.</p>
          <button className="bg-dark-green text-white sm:p-4 lg:p-6 rounded-2xl hover:animate-pulse">Get Started</button>
        </div>
        <img className="w-6/12 sm:hidden md:block" src="/intro_img.svg" alt="" />
      </div>
      <div className="bg-white flex justify-around w-full sm:mt-4 md:mt-0 sm:h-20 lg:h-24 mb-10">
          <img className="sm:w-16 lg:w-28" src="/brand_google.svg" alt="" />
          <img className="sm:w-16 lg:w-28" src="/brand_trello.svg" alt="" />
          <img className="sm:w-16 lg:w-28" src="/brand_monday.svg" alt="" />
          <img className="sm:w-16 lg:w-28" src="/brand_notion.svg" alt="" />
          <img className="sm:w-16 lg:w-28" src="/brand_slack.svg" alt="" />
      </div>
    </main>
  );
}