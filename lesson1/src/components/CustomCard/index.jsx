import React from 'react';
import './card.scss';
import { RxAvatar } from "react-icons/rx";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { LuLampCeiling } from "react-icons/lu";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";

const customCards = [
  {
    title: "Service Premises",
    description: "Our complex has office space and convenience stores on the ground floor. There's lot of hate out there for a text",
    icon:<RxAvatar />
  },
  {
    title: "Safety and Security",
    description: "Reliable round-the-clock surveillance by a security system using modern technologies. The villagers are out there with",
    icon:<BsFillEmojiHeartEyesFill />

  },
  {
    title: "Environmental Solutions",
    description: "We care about the environment, which is why we use LED lighting and have a charging station for electric vehicles clients",
    icon:<GiWorld />
  },
  {
    title: "Ease of Management",
    description: "You just buy an apartment, and a professional hotel operator will do the rest for you. That amounts to little more than garbled words",
    icon:<LuLampCeiling />
  },
  {
    title: "Guaranteed Income",
    description: "Guaranteed monthly income is prescribed in advance in the contract. True enough, but that's not all that it takes to get things",
    icon:<FaMoneyBill1Wave />
  },
  {
    title: "Great Location",
    description: "A pledge of a secure rental of your apartment. A client that's unhappy for a reason is a problem, a client that's unhappy",
    icon:<FaBuilding />
  }
];

const CustomCard = () => {
  return (
    <div className="cards">
      {customCards.map((card, index) => (
        <div key={index} className="card1">
          <div className="card-icon">{card.icon}</div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomCard;
