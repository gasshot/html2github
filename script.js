let count = 0;

const countSpan = document.getElementById("count");
const cheerBtn = document.getElementById("cheerBtn");

cheerBtn.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;

  cheerBtn.textContent = "응원 완료 🎉";
  setTimeout(() => {
    cheerBtn.textContent = "응원하기 🚀";
  }, 500);
});
