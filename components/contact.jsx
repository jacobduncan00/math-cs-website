import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [buttonContent, setButtonContent] = useState("SEND");

  const updateName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const updateEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const updateMessage = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  const sendInfo = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/sendemail", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    if (res.status === 200) {
      setButtonContent("MESSAGE SENT");
      setTimeout(() => {
        setButtonContent("SEND");
      }, 3000);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Message failed to send");
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-1/2 mx-auto leading-relaxed text-base">
            If you ever need help or would like to chat about the club or any
            other activities in Henson, fill out the form below and we will get
            back to you.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative" data-children-count="1">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  data-kwimpalastatus="alive"
                  data-kwimpalaid="1634140594076-6"
                  value={name}
                  onChange={updateName}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative" data-children-count="1">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  data-kwimpalastatus="alive"
                  data-kwimpalaid="1634140594076-7"
                  value={email}
                  onChange={updateEmail}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative" data-children-count="1">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  value={message}
                  onChange={updateMessage}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={sendInfo}
              >
                {buttonContent}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
