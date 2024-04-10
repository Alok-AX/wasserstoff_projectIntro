"use client"
import React, { useState } from "react";
import Hero from "../containers/Hero/page";
import HeroTwo from "../containers/Hero/HeroTwo";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Events");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <section className="tab_main_section">
        <div className="details-details-tab-here">
          <div className={`details-tab ${activeTab === "Events" ? "active" : ""}`}>
            <Hero />
          </div>
          <div className={`details-tab ${activeTab === "Collections" ? "active" : ""}`}>
            <HeroTwo/>
          </div>
        </div>
        <div className="tab-btn">
          <button onClick={() => handleTabClick("Events")} className={activeTab === "Events" ? "active" : ""}>
            Events
          </button>
          <button onClick={() => handleTabClick("Collections")} className={activeTab === "Collections" ? "active" : ""}>
            Collections
          </button>
        </div>

      </section>
    </>
  );
};

export default Tab;
