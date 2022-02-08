import GullCode from "../public/gullcode.png";
import Image from "next/image";

const Gull = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <div className="font-medium title-font mb-8 text-gray-900 text-left">
            <h1 className="text-6xl">Gull Code</h1>
            <hr className="mb-4 mt-4" />
            <span className="bg-gray-700 hover:bg-gray-800 text-xl rounded-full transition-colors text-white items-center px-3 pr-3 py-1">
              April 30, 2022
            </span>
            <span className="ml-2 bg-gray-700 hover:bg-gray-800 text-xl rounded-full transition-colors text-white items-center px-3 pr-3 py-1">
              HS143
            </span>
          </div>
          <Image src={GullCode} height={700} />
          <p className="leading-relaxed text-md text-left mt-8">
            Gull Code is an annual coding competition that the Math and Computer
            Science Club holds with the Math and Computer Science Department.
            Teams of three/four code in the language of their choice. They may
            use whatever resources they like except the internet. The top three
            teams receive a prize and door prizes are raffled out throughout the
            competition. Lunch and refreshments are provided during the
            competition. If you have a team, email Chloe the members of your
            team and your team name @ cvancory1@gulls.salisbury.edu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gull;
