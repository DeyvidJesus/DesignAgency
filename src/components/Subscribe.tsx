export function Subscribe() {
  return (
    <section className="flex px-20 pb-40 pt-10 flex-col items-center">
      <h2 className="text-dark-green font-medium text-lg mb-3">SUBSCRIBE</h2>
      <p className="font-semibold sm:text-2xl md:text-3xl text-center">Subscribe To Get The Latest<br />News About Us</p>
      <small className="text-light-gray mt-2 mb-10 text-center">Please Drop Your Email Below To Get Daily Update About What We Do</small>
      <form className="border-[1px] border-black rounded-lg p-1 w-1/2 flex justify-between">
        <input type="email" name="email" id="email" placeholder="Enter Your Email Address" className="border-0 shadow-none outline-none w-full p-3 mr-2"/>
        <button className="px-4 bg-orange text-white rounded-xl hover:opacity-80">Subscribe</button>
      </form>
    </section>
  );
}