import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Project",
    icon: "diagram-project",
    prefix: "/guide/",
    children: [
      {
        text: "Description",
        icon: "book",
        link: "bar/",
      },
      {
        text: "Design",
        icon: "vial-virus",
        link: "foo/",
      },
    ],
  },
  {
    text: "Wet Lab",
    icon:"flask-vial",
    prefix:"/wet-lab/",
    children:[
      {
        text: "Results",
        icon: "vial",
        link: "results/",
      },
      {
        text: "Proof",
        icon: "book-open",
        link: "proof/",
      },
      {
        text: "Part",
        icon: "play",
        link: "part/",
      },
    ]
  },
  "/demo/",
]);
