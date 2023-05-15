import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  users: User[];
}

const AvatarCarousel = (props: Props) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {props.users.map((user) => (
        <div key={user.id}>
          <Image
            loading="eager"
            src={user.image}
            width={128}
            height={128}
            alt={user.name}
          />
          <p className="legend text-sm">{user.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default AvatarCarousel;
