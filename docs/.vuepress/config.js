module.exports = {
  base: "/skyz-gulu/",
  title: "Skyz-Gulu UI",
  description: "一个好用的UI框架",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "Github", link: "https://github.com/SkyZhou197/gulu-test-1" },
      { text: "交流", link: "https://google.com" }
    ],
    sidebar: [
      {
        title: "入门",
        children: ["/install/", "/get-started/"]
      },
      {
        title: "组件",
        children: [
          "/components/button",
          "/components/button-group",
          "/components/input",
          "/components/grid",
          "/components/layout",
          "/components/toast",
          "/components/popover",
          "/components/collapse"
        ]
      }
    ]
  }
};
