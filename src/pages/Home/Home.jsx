import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const allNewsData = useLoaderData();
  return (
    <div>
      <h2>news wide home: {allNewsData.length}</h2>

      <div className="">
        {allNewsData.map(news => (
          <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
