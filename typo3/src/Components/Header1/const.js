// Using an array
export const menuItems = [
  {
    title: "Home",
    url: "/home",
  },
  {
    title: "About Us",
    url: "/about",
    links: [
      {
        label: "Company",
        href: "/behindUs",
      },
      {
        label: "People",
        href: "/behindUs",
      },
      {
        label: "Work With Us",
        href: "/behindUs",
      },
    ],
  },
  {
    title: "Our Services",
    url: "/services",
    links: [
      {
        label: "Consulting",
        href: "/services/details",
      },
      {
        label: "Design",
        href: "/services/details",
      },
      {
        label: "Digital",
        href: "/services/details",
      },
    ],
  },
  {
    title: "Our Work",
    url: "/work",
    links: [
      {
        label: "Work Gallery",
        href: "/work",
      },
    ],
  },
  {
    title: "Contact Us",
    url: "/contact",
    links: [],
  },
];

//   Using an object
export const menuItemsObj = {
  home: {
    title: "Home",
    links: [
      {
        label: "Home",
        href: "#",
      },
    ],
  },
  aboutUs: {
    title: "About Us",
    links: [
      {
        label: "Company",
        href: "#",
      },
      {
        label: "People",
        href: "#",
      },
      {
        label: "Work With Us",
        href: "#",
      },
    ],
  },
  ourServices: {
    title: "Our Services",
    links: [
      {
        label: "Consulting",
        href: "#",
      },
      {
        label: "Design",
        href: "#",
      },
      {
        label: "Digital & Tech",
        href: "#",
      },
    ],
  },
};
