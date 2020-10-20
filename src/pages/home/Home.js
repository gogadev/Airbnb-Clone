import React from "react";

import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";

import "./home.style.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=1280"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=1280"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse in Central London"
          price="£350/night"
        />
        <Card
          src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=1280"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        />
      </div>
    </div>
  );
};

export default Home;
