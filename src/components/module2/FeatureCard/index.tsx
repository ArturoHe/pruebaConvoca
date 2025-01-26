import React from "react";
import { Container } from "react-bootstrap";

type Props = {
  image: string;
  altImage?: string;
  title: string;
  description: string;
};

function index({ image, altImage, title, description }: Props) {
  return (
    <Container fluid className="text-center">
      <img src={image} alt={altImage} />

      <div className="my-4">
        <h3>{title}</h3>
      </div>

      <p>{description}</p>
    </Container>
  );
}

export default index;
