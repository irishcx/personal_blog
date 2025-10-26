document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const fadeStart = 0;      // 从顶部开始淡出
    const fadeEnd =600;      // 到 300px 完全淡出

    // 计算透明度比例（0~1）
    const progress = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);

    // 背景淡出：通过调整伪元素的遮罩不透明度
    body.style.setProperty("--home-fade-opacity", progress);
  });
});

var layouts = ["background", "hero", "profile", "page", "card"];

var currentLayout = 0;

function switchHomeLayout() {
  var old = currentLayout;
  currentLayout = currentLayout == layouts.length - 1 ? 0 : currentLayout + 1;

  var oldDiv = document.getElementById(layouts[old]);
  var currentDiv = document.getElementById(layouts[currentLayout]);
  const layoutCode = document.querySelectorAll("code[id=layout]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";
  layoutCode.forEach(function (el) {
    el.innerText = layouts[currentLayout];
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#switch-layout-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchHomeLayout();
    }),
  );
});

var list_config = ["CardViewProse", "CardViewScreenWidth", "NormalView"];

var titles = {
  CardViewProse: "card view with constrained width",
  CardViewScreenWidth: "card view with full width",
  NormalView: "standard list view",
};

var currentConfig = 0;

function switchList() {
  var old = currentConfig;
  currentConfig = currentConfig == list_config.length - 1 ? 0 : currentConfig + 1;

  var oldDiv = document.getElementById(list_config[old]);
  var currentDiv = document.getElementById(list_config[currentConfig]);
  const configCode = document.querySelectorAll("code[id=config]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";

  configCode.forEach(function (el) {
    el.innerText = titles[list_config[currentConfig]];
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#switch-config-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchList();
    }),
  );
});