import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../Button/Button';
const EloDialog = ({ title, description, onClose, actions = [], children, }) => {
    return (_jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-title bg-opacity-50", children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg w-96 p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx("h2", { className: "text-lg font-bold", children: title }), _jsx("button", { onClick: onClose, className: "text-gray-500", children: "\u00D7" })] }), description && _jsx("p", { className: "mb-4 text-sm text-subtitle", children: description }), children && _jsx("div", { className: "mb-4", children: children }), _jsx("div", { className: "space-y-2", children: actions.map((action, index) => (_jsx(Button, { variant: action.variant || 'primary', onClick: action.onClick, className: "w-full", children: action.text }, index))) })] }) }));
};
export default EloDialog;
