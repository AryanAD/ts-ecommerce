import { Link } from "react-router-dom";
import React from "react";

interface BookCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, image, price }) => {
  return (
    <div className="border p-4 flex-grow hover:bg-gray-100 rounded-md">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover mb-2"
        />

        <h2 className="font-bold">{title}</h2>
        <p className="text-gray-600">${price}</p>
      </Link>
    </div>
  );
};

export default BookCard;
