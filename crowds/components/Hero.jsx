"use client";

import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      await createCampaign(campaign);
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto-compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt="Hero Background"
      />
      <div className="relative bg-opacity-75 backgroundMain px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
            Decentra Fund <br className="hidden md:block" /> Decentralized fundraising platform
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <a
              href="/"
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707 5.293a1 1 0 00-1.414 1.414L7.586 6 3.293 1.707a1 1 0 00-1.414 1.414l4.293 4.293-4.293 4.293a1 1 0 001.414 1.414L7.586 6l1.707 1.707a1 1 0 001.414-1.414L9.707 6z" />
              </svg>
            </a>
          </div>

          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">Create Campaign</h3>
              <form onSubmit={createNewCampaign}>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Title</label>
                  <input
                    type="text"
                    value={campaign.title}
                    onChange={(e) => setCampaign({ ...campaign, title: e.target.value })}
                    placeholder="Enter campaign title"
                    required
                    className="w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">Description</label>
                  <input
                    type="text"
                    value={campaign.description}
                    onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
                    placeholder="Enter campaign description"
                    required
                    className="w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">Target Amount</label>
                  <input
                    type="number"
                    value={campaign.amount}
                    onChange={(e) => setCampaign({ ...campaign, amount: e.target.value })}
                    placeholder="Enter target amount"
                    required
                    className="w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">Deadline</label>
                  <input
                    type="date"
                    value={campaign.deadline}
                    onChange={(e) => setCampaign({ ...campaign, deadline: e.target.value })}
                    required
                    className="w-full h-12 px-4 mb-2 bg-white border border-gray-300 rounded shadow-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 px-6 font-medium tracking-wide text-white bg-purple-600 rounded shadow-md hover:bg-purple-800 focus:outline-none focus:shadow-outline"
                >
                  Create Campaign
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
