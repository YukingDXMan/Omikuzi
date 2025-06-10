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
  setTimeo
