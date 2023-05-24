import imageOne from "../src/images/tour-1.jpeg";
import imageTwo from "../src/images/tour-2.jpeg";
import imageThree from "../src/images/tour-3.jpeg";
import imageFour from "../src/images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com/", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
];

export const tours = [
  {
    id: 1,
    image: imageOne,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime " +
      "  reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "china",
    period: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: imageTwo,
    date: "october 1th, 2020",
    title: "best of java",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime " +
      "  reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "indonesia",
    period: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    image: imageThree,
    date: "september 15th, 2020",
    title: "explore hong kong",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime " +
      "  reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "hong kong",
    period: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    image: imageFour,
    date: "december 5th, 2019",
    title: "kenya highlights",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime " +
      "  reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "kenya",
    period: "20 days",
    price: "from $3300",
  },
];
