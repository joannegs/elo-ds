import React from 'react';
import Button from '../Button/Button';

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

const Dialog = ({
  title,
  description,
  onClose,
  actions = [],
  children,
}: DialogProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-title bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500">&times;</button>
        </div>
        {description && <p className="mb-4 text-sm text-subtitle">{description}</p>}
        {children && <div className="mb-4">{children}</div>}
        <div className="space-y-2">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || 'primary'}
              onClick={action.onClick}
              className="w-full"
            >
              {action.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialog;