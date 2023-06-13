export interface NavbarLink {

  navbarLinks: {
    id: number;
    link: string;
    name: string;
  }[];
}

export const navbarLinks = [
  {
    id: 1,
    link: "/",
    name: "Home",
  },
  {
    id: 2,
    link: "/about-us",
    name: "About us",
  },
  {
    id: 3,
    link: "/contact",
    name: "Contact",
  },
  {
    id: 4,
    link: "/blogs",
    name: "Blogs",
  },
];
