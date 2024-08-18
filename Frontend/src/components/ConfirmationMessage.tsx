import React from 'react';

interface ConfirmationMessageProps {
    message: string;
    highlightText: string;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({message, highlightText }) => {
    return (
            <div className="text-center">
                <p className="text-gray-700">
                    {message} <span className="font-bold">{highlightText}</span>. It might take a few minutes to arrive.
                </p>
            </div>
    );
};

export default ConfirmationMessage;
