import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "项目",
    icon: "diagram-project",
    prefix: "/zh/guide/",
    children: [
      {
        text: "描述",
        icon: "book",
        link: "bar/",
      },
      {
        text: "设计",
        icon: "vial-virus",
        link: "foo/",
      },
    ],
  },
  {
    text: "湿实验",
    icon:"flask-vial",
    prefix:"/zh/wet-lab/",
    children:[
      {
        text: "结果",
        icon: "vial",
        link: "results/",
      },
      {
        text: "验证",
        icon: "book-open",
        link: "proof/",
      },
      {
        text: "元件",
        icon: "play",
        link: "part/",
      },
    ]
  },
  "/zh/demo/",
]);
