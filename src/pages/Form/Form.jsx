import { useState } from "react";
import transition from "../../transition";
import NavBar from "../Home/Sections/01/components/NavBar";
import { sendCustomEmail } from "../../email";

const Form = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    city: "",
    description: "",
  });

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = () => {
    sendCustomEmail(details);
  };

  return (
    <section className="bg-[url('/src/assets/Section01/Gradient.png')] bg-repeat w-[100%] h-[100%]">
      <NavBar />
      <main className="flex flex-col justify-center items-center gap-16 py-[3em]">
        <div>
          <p className="text-3xl desktop:text-5xl">Start a project with us</p>
        </div>
        <div className="w-full flex justify-start items-center px-[1em] desktop:px-[16em]">
          <form className="flex flex-col gap-10 border border-white w-full p-4 rounded-xl border-0.5">
            <div className="flex flex-col gap-3">
              <label className="text-2xl">Name</label>
              <input
                name="name"
                value={details.name}
                onChange={handleDetailsChange}
                type="text"
                placeholder="Adam smith"
                className="text-sm py-1 px-2 border border-0.5 bg-transparent border-white rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-2xl">Email</label>
              <input
                name="email"
                value={details.email}
                onChange={handleDetailsChange}
                type="email"
                placeholder="youremail@gmail.com"
                className="text-sm py-1 px-2 border border-0.5 bg-transparent border-white rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-2xl">Industry</label>
              <input
                name="city"
                value={details.city}
                onChange={handleDetailsChange}
                type="text"
                placeholder="Ecommerce, agency, etc."
                className="text-sm py-1 px-2 border border-0.5 bg-transparent border-white rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-2xl">Description</label>
              <textarea
                name="description"
                value={details.description}
                onChange={handleDetailsChange}
                type="text"
                placeholder="Description of your project."
                className="text-sm py-1 px-2 border border-0.5 bg-transparent border-white rounded-lg"
              />
            </div>
            <div>
              <button
                disabled={
                  !details.name || !details.email || !details.description
                }
                onClick={handleSendEmail}
                className="font-bold text-black bg-white py-3 px-12 tablet:px-12 laptop:px-12 desktop:px-16 rounded-full text-xl tablet:text-xl laptop:text-lg desktop:text-xl"
              >
                Send email
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};

export default transition(Form);
