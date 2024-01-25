export function Portfolio() {
  return (
    <section className="p-20">
      <h2 className="text-dark-green font-medium text-lg mb-3">OUR PORTFOLIO</h2>
      <p className="font-semibold text-3xl">We provide the Perfect Solution <br /> to your business growth</p>
      <div className="flex sm:flex-col md:flex-row sm:items-center md:items-start justify-between">
        <ul className="sm:w-full md:w-[47%] flex flex-col">
          <li className="my-20">
            <img className="w-full" src="/project1.svg" alt="" />
            <h3 className="text-2xl font-semibold mt-10 mb-4">Digital Marketing Agency Website</h3>
            <p className="text-justify">This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Accross all platforms. This is a website rebrand.</p>
          </li>
          <li>
            <img className="w-full" src="/project3.svg" alt="" />
            <h3 className="text-2xl font-semibold mt-10 mb-4">Art Collections Application</h3>
            <p className="text-justify">This is an app for a client who want to standout from the usual ways to show art, it is an app that sums art and digital applications into one incredible product.</p>
          </li>
        </ul>
        <ul className="sm:w-full md:w-[47%] flex flex-col">
          <li className="my-20">
            <img className="w-full" src="/project2.svg" alt="" />
            <h3 className="text-2xl font-semibold mt-10 mb-4">Task Manager Application</h3>
            <p className="text-justify">This is an application for a client who want to achieve their goals selling task productivity softwares. This is an application rebrand.</p>
          </li>
          <li>
            <img className="w-full" src="/project4.svg" alt="" />
            <h3 className="text-2xl font-semibold mt-10 mb-4">Digital Marketing Agency Landing Page</h3>
            <p className="text-justify">This is a website for a client who want get more clients by showing them more about their company and the work they do. It is a conversion landing page.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}