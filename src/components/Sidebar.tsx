import React from "react";
import Sidebarinfo from "./sidebar/sidebar-first-s";
import "./style.css";
import Secondsidebarinfo from "./sidebar/sidebar-second-s";
import Thirdsidebarinfo from "./sidebar/sidebar-third-s";
import img1 from "./sidebar-third-s/image/img1.jpg";
import img2 from "./sidebar-third-s/image/img2.jpg";
import img3 from "./sidebar-third-s/image/img3.jpg";
import img4 from "./sidebar-third-s/image/img4.jpg";
import img5 from "./sidebar-third-s/image/person1.jpg";
import img6 from "./sidebar-third-s/image/person2.jpg";
import img7 from "./sidebar-third-s/image/person3.jpg";
import Fourthsidebarinfo from "./sidebar/sidebar-fourth-s";
import Fifthsidebarinfo from "./sidebar/sidebar-fifth-s";
import Footer from "./sidebar/footer";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBase: [
        {
          icon: "fas fa-home icon",
          text: "home",
        },
        {
          icon: "fas fa-fire fire-icon",
          text: "trending",
        },
        {
          icon: "fas fa-film icon3",
          text: "subscriptions",
        },
      ],
      dataBase2: [
        {
          icon: "fas fa-photo-video",
          text: "Library",
        },
        {
          icon: "fas fa-history",
          text: "History",
        },
        {
          icon: "far fa-play-circle",
          text: "Your videos",
        },
        {
          icon: "fas fa-clock",
          text: "Watch later",
        },
        {
          icon: "fas fa-thumbs-up",
          text: "Liked videos",
        },
      ],
      dataBase3: [
        {
          image: img1,
          text: "max mitchell money",
        },
        {
          image: img2,
          text: "hip bang",
        },
        {
          image: img3,
          text: "j.j. mcCullough",
        },
        {
          image: img4,
          text: "julie nolke",
        },
        {
          image: img5,
          text: "brunch comedy",
        },
        {
          image: img6,
          text: "retro grand prix",
        },
        {
          image: img7,
          text: "CBC comedy",
        },
      ],
      dataBase4: [
        {
          icon: "fas fa-gamepad",
          text: "Gaming",
        },
        {
          icon: "fas fa-broadcast-tower",
          text: "Live",
        },
        {
          icon: "fas fa-vest-patches",
          text: "Fashion & Beauty",
        },
        {
          icon: "fas fa-lightbulb",
          text: "Learning",
        },
        {
          icon: "fas fa-trophy",
          text: "Sports",
        },
      ],
      dataBase5: [
        {
          icon: "fas fa-cog",
          text: "Settings",
        },
        {
          icon: "fas fa-flag",
          text: "Report history",
        },
        {
          icon: "fas fa-question-circle",
          text: "Help",
        },
        {
          icon: "fas fa-exclamation-triangle",
          text: "Send feedback",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        {/* first section*/}

        <div className="first-section">
          {this.state.dataBase.map(value => {
            return <Sidebarinfo icon={value.icon} text={value.text} />;
          })}
        </div>

        {/* second section */}

        <div className="second-section">
          {this.state.dataBase2.map(value => {
            return <Secondsidebarinfo icon={value.icon} text={value.text} />;
          })}
        </div>

        {/* third section */}

        <div className="third-section">
          <p className="sub">subscriptions</p>
          {this.state.dataBase3.map(value => {
            return <Thirdsidebarinfo image={value.image} text={value.text} />;
          })}
          <div className="info">
            <i class="fas fa-angle-down"></i>
            <p className="showtext">Show 1 more</p>
          </div>
        </div>

        {/* fourth section */}

        <div className="fourth-section">
          <p className="sub">more from youtube</p>
          {this.state.dataBase4.map(value => {
            return <Fourthsidebarinfo icon={value.icon} text={value.text} />;
          })}
        </div>

        {/* fifth section */}

        <div className="fifth-section">
          {this.state.dataBase5.map(value => {
            return <Fifthsidebarinfo icon={value.icon} text={value.text} />;
          })}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Sidebar;
