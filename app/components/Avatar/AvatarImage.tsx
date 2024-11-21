import Image from "next/image";

export type AvatarImageProps = {
  src: string;
  altDescription: string | "";
};

const AvatarImage = ({ src, altDescription }: AvatarImageProps) => {
  return (
    <div className="overflow-hidden rounded-full w-full h-full">
      <Image
        src={src}
        alt={altDescription}
        className="rounded-full object-cover w-full h-full"
        width={100}
        height={100}
      />
    </div>
  );
};

export default AvatarImage;