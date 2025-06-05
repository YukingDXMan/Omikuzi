const results = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "凶吉"];

function drawOmikuji() {
  const result = results[Math.floor(Math.random() * results.length)];
  const stick = document.getElementById("omikujiResult");

  // アニメーションを一度リセット
  stick.classList.remove("show");

  // 少し待ってから再表示（確実にアニメーションが再生されるようにする）
  setTimeout(() => {
    stick.textContent = result;
    stick.classList.add("show");
  }, 50); // 50ms 待機
}
