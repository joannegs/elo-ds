import { jsx as _jsx } from "react/jsx-runtime";
import Image from "next/image";
const AvatarImage = ({ src, altDescription }) => {
    return (_jsx("div", { className: "overflow-hidden rounded-full w-full h-full", children: _jsx(Image, { src: src, alt: altDescription || "", className: "rounded-full object-cover w-full h-full", width: 100, height: 100 }) }));
};
export default AvatarImage;
