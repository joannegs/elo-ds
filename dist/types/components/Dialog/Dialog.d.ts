import React from 'react';
export type DialogProps = {
    title: string;
    description?: string;
    onClose: () => void;
    actions?: Array<{
        text: string;
        variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'success' | 'alert';
        onClick: () => void;
    }>;
    children?: React.ReactNode;
};
declare const Dialog: ({ title, description, onClose, actions, children, }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export default Dialog;
