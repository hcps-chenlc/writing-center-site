

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      panels.forEach(function (panel) {s
        panel.classList.remove("active");
      });

      const targetId = "tab-" + btn.dataset.tab;
      const targetPanel = document.getElementById(targetId);
      targetPanel.classList.add("active");
    });
  });
});
