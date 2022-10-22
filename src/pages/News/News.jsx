import React from "react";
import { Button, Card, Image } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import {
  BsBookmark,
  BsFillShareFill,
  BsFillStarFill,
  BsEye
} from "react-icons/bs";

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    category_id,
    title,
    details,
    image_url,
    author,
    rating,
    total_view
  } = news;

  return (
    <div>
      <Card className="text-center mb-4">
        <Card.Header>
          <div className="row align-items-center">
            <div className="col-3">
              <Image
                fluid
                src={author.img}
                thumbnail
                roundedCircle
                width={106}
                height={106}
                className=""></Image>
            </div>
            <div className="col-6 text-start">
              <h4>{author.name}</h4>
              <time dateTime={author.published_date}>
                {author.published_date}
              </time>
            </div>
            <div className="col-3 text-end">
              <button type="button" aria-label="Bookmark" className="btn">
                <BsBookmark />
              </button>
              <button type="button" aria-label="Share" className="btn">
                <BsFillShareFill />
              </button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img
            variant="top"
            src={image_url}
            width={600}
            height={400}
            className=""
          />
          <Card.Text>{details}</Card.Text>
          <Button variant="info">
            <Link to={`/category/${category_id}`} className="text-white">
              all news category
            </Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="d-flex justify-content-between gap-4">
            <span>
              <BsFillStarFill /> {rating.number}
            </span>

            <span>
              <BsEye /> {total_view}
            </span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default News;
