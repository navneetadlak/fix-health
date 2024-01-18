import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TelephoneIcon from "../assets/phone-call.png";
import Gmail from "../assets/gmail.png";
import Web from "../assets/web.png";
import Time from "../assets/schedule.png";
import Support from "../assets/support.png";
import Nurse from "../assets/nurse.jpg";

const Navbar = () => {
  const [age, setAge] = useState("");
  const [hasPhysioExperience, setHasPhysioExperience] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const notify = () => toast("Response Submitted");

  useEffect(() => {
    handleFetchDoctors(); // Fetch doctors when the component mounts
  }, []);

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleFetchDoctors = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/navneetadlak/doctors-data/doctors"
      );
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Filter doctors based on the search term
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredDoctors(filtered);
  };

  return (
    <div className="container mx-auto mb-0 px-4 bg-gray-900 text-white h-full">
      <div className="">
        <section className="contact-info mb-0 flex inline justify-between p-2 h-10">
          <h3 className="text-xl font-bold mb-4">
            <img className="inline pr-1" src={Support} alt="Support Icon" />
            Customer support & sales
          </h3>
          <p className="mb-2">
            <img className="inline pr-1" src={Time} alt="Time Icon" />
            Mon - Sun: 09:00 - 18:00
          </p>
          <p className="mb-1 ">
            <a
              href="mailto:info@clevelandmedical.com"
              className="hover:underline"
            >
              <img className="inline pr-1" src={Gmail} alt="Gmail Icon" />
              info@fixhealth.com
            </a>
          </p>
          <p className="mb-2">
            <a
              href="https://www.clevelandmedical.com"
              className="hover:underline"
            >
              <img className="inline pr-1" src={Web} alt="Web Icon" />
              www.fixhealth.com
            </a>
          </p>
          <p>
            <a href="tel:123-456-0975" className="hover:underline">
              <img
                className="inline pr-1"
                src={TelephoneIcon}
                alt="Telephone Icon"
              />
              123-456-7890
            </a>
          </p>
        </section>
      </div>
      <hr />
      <header className="flex justify-between items-center mt-0 py-2 mb-3">
        <h1 className="text-4xl font-bold">Fix Health</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="" className="hover:underline">
                HOME
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                SERVICES
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                GALLERY
              </a>
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
      <main className="flex">
        {/* form section */}
        <section className="quote-form bg-gray-800 p-7 mt-0 flex rounded-lg w-1/2 ">
          <h4 className="text-2xl font-bold mb-6">Book Consultation</h4>
          <form>
            <label htmlFor="service" className="block mb-1 mt-5">
              Service
            </label>
            <select
              id="service"
              name="service"
              className="w-full py-1 px-3 border border-gray-700 rounded-md mb-2 bg-gray-700 text-white"
            >
              <option value="home-care">Home Care</option>
              <option value="physical-therapy">Physical Therapy</option>
              <option value="geriatric-care">Geriatric Care</option>
            </select>
            {/* name input field */}
            <label htmlFor="name" className="inline-block mb-1 mr-2">
              Name:
            </label>
            <input
              type="text"
              required
              id="name"
              name="name"
              className="w-48 py-1 px-3 border border-gray-700 rounded-md mb-2 bg-gray-700 text-white mr-3"
            />
            {/* phone number */}
            <label htmlFor="contact" className="inline-block mb-1 mr-2">
              Contact No.
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              required
              className="w-44 py-1 px-3 border border-gray-700 rounded-md mb-2 bg-gray-700 text-white"
            />
            {/* age */}
            <label htmlFor="age" className="inline-block mb-1 mr-2">
              Age:
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={age}
              onChange={handleAgeChange}
              required
              className="w-20 py-1 px-3 border border-gray-700 rounded-md mb-2 mr-3 bg-gray-700 text-white"
            />
            {/* city */}
            <label htmlFor="age" className="inline-block mb-1 mr-2">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-28 py-1 px-3 border border-gray-700 rounded-md mb-2 mr-3 bg-gray-700 text-white"
            />
            {/* company */}
            <label htmlFor="age" className="inline-block mb-1 mr-2">
              Company:
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-40 py-1 px-3 border border-gray-700 rounded-md mb-2 bg-gray-700 text-white"
            />
            {/*Chief complaints */}
            <label htmlFor="complaints" className="block mb-1">
              Chief complaints:
            </label>
            <textarea
              type="text"
              id="complaints"
              name="complaints"
              rows="3"
              required
              className="w-full py-1 px-3 border border-gray-700 rounded-md mb-2 bg-gray-700 text-white"
            ></textarea>
            {/* Previous Experience With Physiotherapy */}
            {parseInt(age, 10) < 40 && (
              <div>
                <input
                  type="checkbox"
                  id="experience"
                  name="experience"
                  required
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  // className="w-full py-1 px-3 border border-gray-700 rounded-md mb-6 inline-block bg-gray-700 text-white checked:bg-blue-500"
                  checked={hasPhysioExperience}
                  onChange={() => setHasPhysioExperience(!hasPhysioExperience)}
                />
                <label
                  htmlFor="experience"
                  className="mb-1 hover:underline inline-block ml-2"
                >
                  Previous Experience With Physiotherapy
                </label>
              </div>
            )}
            {/* doctor search  */}
            <div>
              <label htmlFor="doctor" className="mb-1 mr-2 inline-block">
                Search Doctors:
              </label>
              <input
                type="text"
                id="doctor"
                name="doctor"
                required
                value={searchTerm}
                className="w-28 py-1 px-3 border inline-block border-gray-700 rounded-md mb-2 mr-3 bg-gray-700 text-white"
                onChange={handleSearchChange}
              />

              <div className="relative">
                {filteredDoctors.length > 0 && (
                  <ul className="absolute bg-zinc-950 mt-2 ml-36 w-44">
                    {filteredDoctors.map((doctor) => (
                      <li
                        key={doctor.id}
                        className="cursor-pointer py-1 px-3 ml-10 hover:bg-gray-900 text-white"
                        onClick={() => setSearchTerm(doctor.name)}
                      >
                        {doctor.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* form button */}
            <div>
              <button
                type="submit"
                onClick={notify}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit Details
              </button>
              <ToastContainer />
            </div>
          </form>
        </section>
        {/* image section */}
        <section
          className="flex bg-cover items-left"
          style={{ backgroundImage: `url(${Nurse})` }}
        >
          ___________________________________________________________________________________________________________
        </section>
      </main>
    </div>
  );
};

export default Navbar;
