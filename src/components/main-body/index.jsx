import "./style.css";
import LoopItems from "./loop-items";
import cimg1 from "./content-images/img1.jpg";
import cimg2 from "./content-images/img2.jpg";
import cimg3 from "./content-images/img3.jpg";
import cimg4 from "./content-images/img4.jpg";
import cimg5 from "./content-images/img5.jpg";
import cimg6 from "./content-images/img6.jpg";
import cimg7 from "./content-images/img7.jpg";
import cimg8 from "./content-images/img8.png";
import cimg9 from "./content-images/img9.jpg";
import pimg1 from "./user-images/img1.jpg";
import pimg2 from "./user-images/img2.jpg";
import pimg3 from "./user-images/img3.jpg";
import pimg4 from "./user-images/img4.jpg";
import pimg5 from "./user-images/person1.jpg";
import pimg6 from "./user-images/person2.jpg";
import pimg7 from "./user-images/person3.jpg";

import React from "react";

const index = () => {
  const [info, setfirst] = useState([
    {
      contentimage: cimg1,
      userimage: pimg1,
      text: "Travel Influencers Be Like:",
      name: "Julie Nolke",
      views: "680K",
      time: "6 months",
    },
    {
      contentimage: cimg2,
      userimage: pimg2,
      text: "What $1800 Per Month Gets You In Vancuver VS Toronto",
      name: "Adam J Bell",
      views: "48K",
      time: "2 weeks",
    },
    {
      contentimage: cimg3,
      userimage: pimg3,
      text: "Ami Poehler and Tina Fey's Opening Monologue - 2021 Golden Globes",
      name: "NBC",
      views: "1.2M",
      time: "1 week",
    },
    {
      contentimage: cimg4,
      userimage: pimg4,
      text: "10 Things Dan Levy Can't Live Without | GQ",
      name: "GQ",
      views: "2.4M",
      time: "1 year",
    },
    {
      contentimage: cimg5,
      userimage: pimg5,
      text: 'The Pit Stop S13 E7 | Trixie Mattel & Bianca Del Rio Break Down "Bossy"...',
      name: "RuPaul's Drag Race",
      views: "1.1M",
      time: "1 months",
    },
    {
      contentimage: cimg6,
      userimage: pimg6,
      text: "2 A.M Study Session - [lofy hip-hop/chill beats]",
      name: "ChilledCow",
      views: "680K",
      time: "6 months",
    },
    {
      contentimage: cimg7,
      userimage: pimg7,
      text: "Travel Influencers Be Like:",
      name: "Julie Nolke",
      views: "9.8M",
      time: "11 months",
    },
    {
      contentimage: cimg8,
      userimage: pimg1,
      text: "Lin-Manuel Miranda, Donald Glover, Issa Rae & Damien Chazelle: Epic...",
      name: "The Hollywood Reporter",
      views: "1.7M",
      time: "4 years",
    },
    {
      contentimage: cimg9,
      userimage: pimg2,
      text: "Travel Influencers Be Like:",
      name: "Julie Nolke",
      views: "680K",
      time: "6 months",
    },
    {
      contentimage: cimg1,
      userimage: pimg3,
      text: "Doing LADY GAGA'S Makeup! | NikkieTutorials",
      name: "NikkieTutorials",
      views: "8.9M",
      time: "1 year",
    },
    {
      contentimage: cimg2,
      userimage: pimg4,
      text: "The Flash 6x18 Godspeed threatens Barry",
      name: "Legends Universe",
      views: "1.8M",
      time: "1 year",
    },
    {
      contentimage: cimg3,
      userimage: pimg5,
      text: "Song to sing in the car [vibe playlist]",
      name: "Love Life Music",
      views: "1.3M",
      time: "1 months",
    },
  ]);
  return (
    <div className="wrapper">
      {info.map(value => (
        <LoopItems
          contentimage={value.contentimage}
          userimage={value.userimage}
          text={value.text}
          name={value.name}
          views={value.views}
          time={value.time}
        />
      ))}
    </div>
  );
};

export default index;
