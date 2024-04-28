"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  href: string;
  name: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, href, name }) => {
  const router = useRouter();

  const onClick = () => {
    //add authentication before path
    router.push(href);
  };

  return (
    <button
      className="
        relative 
        flex
        group
        items-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-100/10
        hover:bg-neutral-100/20
        transition
        pr-4
    "
    >
      <div
        className="
            relative
            min-h-[64px]
            min-w-[64px]
        "
      >
        <Image className="object-cover" fill src={image} alt="Image" />
      </div>
      <p
        className="
            font-medium
            truncate
            py-5
        "
      >
        {name}
      </p>
      <div
        className="

        "
      >
        <FaPlay />
      </div>
    </button>
  );
};

export default ListItem;
