import Image from "next/image";

export type AvatarImageProps = {
  src: string;
  altDescription?: string | "";
};

const AvatarImage = ({ src, altDescription }: AvatarImageProps) => {
  return (
    <div className="overflow-hidden rounded-full size-full">
      <Image
        src={src}
        alt={altDescription || ""}
        className="rounded-full object-cover size-full"
        width={100}
        height={100}
      />
    </div>
  );
};

export default AvatarImage;