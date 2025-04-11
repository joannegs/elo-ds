import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ColorBox = ({ name, hex, rgb }) => {
    return (_jsxs("div", { className: "flex flex-col items-start gap-2 w-full p-4 rounded-lg shadow-sm border border-gray-200 bg-white", children: [_jsx("div", { className: "w-full h-14 rounded-md border", style: { backgroundColor: hex } }), _jsx("div", { className: "text-sm font-semibold text-gray-800 mt-2", children: name }), _jsx("div", { className: "text-xs text-gray-500", children: hex }), _jsx("div", { className: "text-xs text-gray-500", children: rgb })] }));
};
export const ColorGroup = ({ title, colors }) => {
    return (_jsxs("div", { className: "mb-12", children: [_jsx("h3", { className: "text-2xl font-bold mb-6 text-gray-900", children: title }), _jsx("div", { className: "grid grid-cols-3 gap-5", children: colors.map((color, index) => (_jsx(ColorBox, Object.assign({}, color), index))) })] }));
};
