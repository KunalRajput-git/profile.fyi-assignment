"use client";

import Image from "next/image";
import { Plus } from "react-bootstrap-icons";
import QtySelector from "./QtySelector";

const ItemCard = ({ item }) => {
  return (
    <article className="border p-4 w-[180px] md:w-56 h-max rounded-md shadow-sm cursor-pointer">
      {/* Card container */}
      <figure className="flex justify-center h-28">
        <Image
          src={item.img}
          alt={item.name}
          width={105}
          height={105}
          className="object-contain rounded-md"
        />
        <figcaption className="sr-only">{item.name}</figcaption>
      </figure>
      <section className="text-xs md:text-sm font-bold text-blue-950">
        <h3 className="mt-3 line-clamp-1">{item.name}</h3>
        <div className="flex mt-3 items-center justify-between">
          <p className="truncate">₹{item.price}</p>
          {/* <QtySelector /> */}
          <Plus className="border rounded-md border-blue-950 text-xl" />
        </div>
      </section>
    </article>
  );
};

export default ItemCard;
