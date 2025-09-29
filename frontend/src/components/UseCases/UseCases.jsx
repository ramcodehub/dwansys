import { useState } from 'react';
import UseCasesData from '../../config/UseCasesData.js';

const UseCases = () => {
  return (
    <div className="use-cases">
      {UseCasesData.sections.map((section, index) => (
        <div key={index} className="use-case-section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UseCases;
