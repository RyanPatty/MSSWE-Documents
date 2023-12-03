import React from 'react';

const Option = ({ optionText, isCorrect }) => {
    return (
        <div>
            <p>{optionText}</p>
            {/* Depending on how you will implement checking of answers you might use isCorrect here */}
        </div>
    );
};

export default Option;
