import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://news-wide-server.vercel.app/news-categories`)
      .then(res => res.json())
      .then(data => {
        setCategories(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div className="">
        <h4>Total categories: {categories.length} </h4>
        <div className="">
          {categories
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(category => (
              <p key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
