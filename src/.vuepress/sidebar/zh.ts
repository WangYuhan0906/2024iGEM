import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "项目",
      icon: "diagram-project",
      link: "guide/",
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
      icon: "flask-vial",
      link: "wet-lab/",
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
    {
      text: "主要功能与配置演示",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
  ],
});
