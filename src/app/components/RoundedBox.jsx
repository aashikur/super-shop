import React from 'react';

const RoundedBox = ({children, className}) => {
    return (
        <div className={`${className} rounded-2xl mb-4 border border-gray-200 flex items-center justify-between px-4 py-2`}>
            {children}
        </div>
    );
};

export default RoundedBox;