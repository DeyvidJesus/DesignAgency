export function Footer() {
  return (
    <footer className="flex sm:flex-col md:flex-row sm:items-center md:items-start bg-dark-green sm:p-14 md:p-20">
      <div className="flex flex-col sm:w-full md:w-1/3">
        <h3 className="text-4xl font-bold mb-6">WEB LOGO</h3>
        <p className="font-medium">Some footer text about the  Agency. <br /> Just a little description to help people understand you better.</p>
        <span className="flex sm:full lg:w-1/2 justify-between mt-6">
          <a className="hover:opacity-80" href="#"><img src="/social_facebook.svg" alt="Social facebook image" /></a>
          <a className="hover:opacity-80" href="#"><img src="/social_instagram.svg" alt="Social instagram image" /></a>
          <a className="hover:opacity-80" href="#"><img src="/social_linkedin.svg" alt="Social linkedin image" /></a>
          <a className="hover:opacity-80" href="#"><img src="/social_twitter.svg" alt="Social twitter image" /></a>
        </span>
      </div>
      <div className="sm:w-full md:w-1/3 flex flex-col md:items-center sm:mt-10 md:mt-0">
        <div>
          <h4 className="font-bold text-xl mb-4">Quick Links</h4>
          <nav className="flex flex-col font-medium justify-between h-40 text-lg">
            <a className="hover:underline" href="#">Services</a>
            <a className="hover:underline" href="#">Portfolio</a>
            <a className="hover:underline" href="#">About Us</a>
            <a className="hover:underline" href="#">Contact Us</a>
          </nav>
        </div>
      </div>
      <div className="sm:w-full md:w-1/3 flex flex-col md:items-center sm:mt-10 md:mt-0 ">
        <div>
          <h4 className="font-bold text-xl mb-4">Address</h4>
          <p className="font-medium">Design Agency Head Office. <br /> Airport Road <br /> United Arab Emirate</p>
        </div>
      </div>
    </footer>
  );
}