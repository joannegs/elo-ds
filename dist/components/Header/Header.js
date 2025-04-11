import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Header = ({ logo, navigation, className, backgroundColor = '' }) => {
    return (_jsxs("header", { className: `bg-${backgroundColor} shadow-md py-4 px-10 flex justify-between items-center ${className}`, children: [_jsx("div", { className: "flex items-center gap-2", children: logo }), _jsx("nav", { className: "flex items-center gap-6", children: navigation })] }));
};
export default Header;
