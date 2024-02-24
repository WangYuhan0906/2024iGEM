import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Project",
      icon: "diagram-project",
      link: "guide/",
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
      icon: "flask-vial",
      link: "wet-lab/",
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

    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    
  ],
});
