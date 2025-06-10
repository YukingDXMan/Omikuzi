const results = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "凶吉"];
const drawButton = document.querySelector("button");

const fortuneDetails = {
  "大吉": {
    恋愛: "すべてがうまくいく兆し！告白も吉！",
    学業: "集中力が高まり成績アップ！",
    仕事: "昇進・成功のチャンス到来！"
  },
  "吉": {
    恋愛: "誠実な気持ちが伝わります。",
    学業: "地道な努力が実を結ぶ。",
    仕事: "着実に進めば成果あり。"
  },
  "中吉": {
    恋愛: "少しずつ関係が深まる時期。",
    学業: "集中すれば良い結果に繋がる。",
    仕事: "新しい挑戦が吉と出る。"
  },
  "小吉": {
    恋愛: "焦らずじっくり進もう。",
    学業: "基礎を固めるのが大切。",
    仕事: "コツコツが成功のカギ。"
  },
  "末吉": {
    恋愛: "思わぬ助けが得られるかも。",
    学業: "ミスに注意して取り組もう。",
    仕事: "変化より安定を選ぶべき時。"
  },
  "凶": {
    恋愛: "慎重な行動が吉。",
    学業: "無理せず復習に集中。",
    仕事: "衝動的な決断は避けよう。"
  },
  "凶吉": {
    恋愛: "油断は禁物だが、転機の兆し。",
    学業: "山あり谷あり、継続が鍵。",
    仕事: "ピンチの中にチャンスあり。"
  }
};

function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}

function drawOmikuji() {
  const now = new Date();
  const lastDrawStr = localStorage.getItem("lastDraw");
  const lastDraw = lastDrawStr ? new Date(lastDrawStr) : null;

  if (lastDraw && isSameDay(now, lastDraw)) {
    alert("まだ次のおみくじが可能になっていません。\n明日の0:00以降にもう一度お試しください。");
    return;
  }

  const result = results[Math.floor(Math.random() * results.length)];
  const stick = document.getElementById("omikujiResult");
  const detail = document.getElementById("fortuneDetails");

  stick.classList.remove("show");
  setTimeout(() => {
    stick.textContent = result;
    stick.classList.add("show");
    localStorage.setItem("lastDraw", now.toISOString());

    const fortunes = fortuneDetails[result];
    detail.innerHTML = `
      <p><strong>恋愛：</strong>${fortunes.恋愛}</p>
      <p><strong>学業：</strong>${fortunes.学業}</p>
      <p><strong>仕事：</strong>${fortunes.仕事}</p>
    `;
  }, 50);
}

function switchTab(event, tabName) {
  document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabName).style.display = 'block';
  event.target.classList.add('active');
}

const tarotCards = [
  "愚者：新しい始まり、自由、無計画",
  "魔術師：可能性、創造、集中力",
  "女教皇：直感、神秘、秘密",
  "女帝：豊かさ、育成、愛情",
  "皇帝：支配、安定、責任",
  "恋人：選択、愛、調和",
  "戦車：勝利、行動、意志力"
];

function drawCard() {
  const now = new Date();
  const lastDrawStr = localStorage.getItem("lastTarotDraw");
  const lastDraw = lastDrawStr ? new Date(lastDrawStr) : null;

  if (lastDraw && isSameDay(now, lastDraw)) {
    alert("まだ次のタロット占いが可能になっていません。\n明日の0:00以降にもう一度お試しください。");
    return;
  }

  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>${tarotCards[randomIndex]}</p>`;
  localStorage.setItem("lastTarotDraw", now.toISOString());
}

window.addEventListener("DOMContentLoaded", () => {
  const now = new Date();

  const lastOmikujiDrawStr = localStorage.getItem("lastDraw");
  const lastOmikujiDraw = lastOmikujiDrawStr ? new Date(lastOmikujiDrawStr) : null;
  if (lastOmikujiDraw && isSameDay(now, lastOmikujiDraw)) {
    drawButton.disabled = true;
    drawButton.textContent = "今日はもう引けません";
  }

  const tarotButton = document.querySelector("#tarot button");
  const lastTarotDrawStr = localStorage.getItem("lastTarotDraw");
  const lastTarotDraw = lastTarotDrawStr ? new Date(lastTarotDrawStr) : null;
  if (lastTarotDraw && isSameDay(now, lastTarotDraw)) {
    tarotButton.disabled = true;
    tarotButton.textContent = "今日はもう引けません";
  }
});
