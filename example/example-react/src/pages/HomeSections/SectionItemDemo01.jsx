import React from 'react';
import Button from '../../components/Button';
function SectionItemDemo01() {
  return (
    <section className="l-home">
      <div className="l-home-header main-content">
        <h1>Page Title</h1>
        <p>Subheading that sets up context, shares more info about the website, or <br />generally gets people psyched to keep scrolling. </p>
        <Button />
      </div>
      <div className="l-home-content">
        <img src="https://placebear.com/1280/640" alt="" />
      </div>
    </section>
  )
}

export default SectionItemDemo01