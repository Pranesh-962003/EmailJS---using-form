import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto mt-6">
      <div className="text-center">
        <h1 className="font-bold text-green-500 text-3xl">Pricing</h1>
        <p className="text-2xl">
          Offers Multiple Packages for Monthly and Yearly Subscriptions
        </p>
        <p className="text-2xl">Featured Plans are Here</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-300 py-2 px-2 w-80 rounded-2xl hover:shadow-2xl text-center">
          <h1 className="font-bold text-5xl">$99</h1>
          <h2 className="text-green-500 mb-3">Basic</h2>
          <p>All the Basic features</p>
          <ul>
            <li className="flex items-center mt-4">
                <div>
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-500"
                    >
                        <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z"
                        fill="currentColor"
                        />
                    </svg>
                </div>
                <div>
                    Core Business System
                </div>
            </li>
            <li className="flex items-center mt-4">
                <div>
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-500"
                    >
                        <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z"
                        fill="currentColor"
                        />
                    </svg>
                </div>
                <div>
                    Core Business System
                </div>
            </li>
            <li className="flex items-center mt-4">
                <div>
                    <svg
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-500"
                    >
                        <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM17.8 8.6C18.1314 8.15817 18.0418 7.53137 17.6 7.2C17.1582 6.86863 16.5314 6.95817 16.2 7.4L10.8918 14.4776L8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L10.2929 16.7071C10.4979 16.9121 10.7817 17.018 11.0709 16.9975C11.3601 16.9769 11.6261 16.8319 11.8 16.6L17.8 8.6Z"
                        fill="currentColor"
                        />
                    </svg>
                </div>
                <div>
                    coustemised features
                </div>
            </li>
          </ul>
        </div>
        <div className="bg-gray-300 h-40 w-80 rounded-2xl hover:shadow-2xl"></div>
        <div className="bg-gray-300 h-40 w-80 rounded-2xl hover:shadow-2xl "></div>
      </div>
    </div>
  );
};

export default Pricing;
