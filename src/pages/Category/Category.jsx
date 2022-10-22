import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      This category has <b>{categoryNews.length}</b> news
      <div className="">
        {categoryNews.map(news => (
          <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
