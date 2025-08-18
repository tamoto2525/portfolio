import React from 'react';
import Button from '../../components/Button';
function SectionItemDemo06() {
  return (
    <section className="l-subSection">
      <div className="l-home l-subSection-content">
        <div className="l-home-header">
          <h2>Section heading</h2>
        </div>
        <div className="l-subSection-buttons">
          <Button />
          <Button cancel={true} text="Secondary button" />
        </div>
      </div>
    </section>
  )
}

export default SectionItemDemo06