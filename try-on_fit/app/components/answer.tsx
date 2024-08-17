"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface Props {
  images?: string[];
  topic: string;
  description: string;
  content: React.ReactNode;
}

const Answer: React.FC<Props> = ({ images, topic, description, content }) => {
  return (
    <Card className="my-4 mx-4">
      <CardHeader className="text-xl font-bold mx-4 mt-4">{topic}</CardHeader>
      <CardBody>
        <p className="text-gray-600 mx-4">{description}</p>
        <div className="my-4 mx-4">{content}</div>
        {images && images.length > 0 && (
          <div className="my-4 mx-10">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${topic} image ${index + 1}`}
                className="w-full h-auto max-w-md float-left my-2 border border-gray-300 mr-8 mb-4"
              />
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default Answer;
