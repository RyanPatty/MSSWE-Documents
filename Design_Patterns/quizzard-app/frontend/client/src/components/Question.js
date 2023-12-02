import React from 'react';
import Option from './Option';

const Question = ({ questionText, options }) => {
    return (
        <div>
            <h1>{questionText}</h1>
            {options.map(option => 
                <Option key={option._id} optionText={option.text} isCorrect={option.isCorrect} />
            )}
        </div>
    );
};

export default Question;
