"use client"; // Ensure this is at the top

import React, { useEffect, useContext, useState } from "react";

// INTERNAL IMPORT
import { CrowdFundingContext } from "../../context/CrowdFunding"; // Corrected path
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import PopUp from "../../components/PopUp";

const Page = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  // State for campaigns
  const [allCampaign, setAllCampaign] = useState([]);
  const [userCampaign, setUserCampaign] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState(null);

  // Fetch campaigns on mount
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const allData = await getCampaigns();
        const userData = await getUserCampaigns();
        setAllCampaign(allData || []);
        setUserCampaign(userData || []);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      <Card
        title="All Listed Campaigns"
        allcampaign={allCampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      <Card
        title="Your Created Campaigns"
        allcampaign={userCampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donateCampaign={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Page;
