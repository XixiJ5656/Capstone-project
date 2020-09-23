import React from "react";

const VideoSecRight = (props) => {
  return (
    <div className="video-section">
      <div className="section-description">
        <h1>{props.style}</h1>
        <p>
          Hey hey hey! I decided to make my purchase recap posts a weekly
          installment. This week is all things I bought under $100 – I ordered a
          bunch of fall pieces from H&M and wanted to share a few of my
          favorites. Their fall pieces always sell out so fast (coats
          especially) so I wanted to share my buys ASAP before pieces sell out.
          I had these boots in my cart, fully stocked, and when I went to check
          out the next day they were completely sold out in the nude and now I’m
          kicking myself for not moving on them faster. So long story short –
          always check out ASAP on H&M haha.
        </p>
      </div>
      <div>
        <video autoPlay loop>
          <source src={props.video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoSecRight;
