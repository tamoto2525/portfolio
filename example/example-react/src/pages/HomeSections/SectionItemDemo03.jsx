import React from 'react';
import Button from '../../components/Button';
function SectionItemDemo03() {
  return (
    <section className="l-home l-service">
      <div className="l-service-content">
        <div className="l-home-header">
          <h2>Section heading</h2>
        </div>
        <div className="l-service-inner">
          <div className="l-service-item">
            <h3>Subheading</h3>
            <p>Body text for whatever you’d like to expand on the main point.</p>
          </div>
          <div className="l-service-item">
            <h3>Subheading</h3>
            <p>Body text for whatever you’d like to expand on the main point.</p>
          </div>
          <div className="l-service-item">
            <h3>Subheading</h3>
            <p>Body text for whatever you’d like to add more to the main point. It provides details, explanations, and context.</p>
          </div>
        </div>

        <div className="l-service-buttons">
          <Button />
          <Button cancel={true} text="Secondary button" />
        </div>
      </div>
      <div className="l-service-image">
        <img src="https://placebear.com/705/705" alt="" />
      </div>
    </section>
  )
}

export default SectionItemDemo03