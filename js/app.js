// js/app.js

// 1. 운세 데이터 여러 개 만들어두기
const fortunes = [
  {
    summary: "당신의 마음은 오늘, 조용하지만 강한 힘을 품고 있습니다. 미묘한 설렘과 불안이 공존하지만, 결국 좋은 선택으로 이어지는 하루입니다.",
    flow: "당신은 지금 안정과 균형을 찾으려는 과정에 있습니다. 혼자 정리하고 싶은 마음과, 누군가와 나누고 싶은 마음이 함께 움직입니다.",
    emotion: "작은 걱정이 머릿속을 맴돌지만, 그만큼 오늘의 당신은 신중합니다. 감정에 휘둘리기보다는, 한 번 더 생각한 뒤 움직이게 되는 날입니다.",
    external: "예상하지 못했던 제안이나 연락이 들어올 수 있습니다. 가볍게 거절하기보다는, 한 번쯤은 들어보고 판단해도 괜찮습니다.",
    advice: "너무 많은 것을 한 번에 해결하려 하지 않아도 됩니다. 얽힌 실타래처럼 보이는 일도, 하나씩 잡아당기면 천천히 풀려갑니다.",
    keywords: ["정리", "작은 용기", "보류된 일 마무리"],
    luckyNumbers: [7, 12, 24],
    luckyColors: ["버건디", "네이비"],
    oneLine: "당신이 내딛는 작은 걸음은, 생각보다 멀리 데려다 줄 거예요."
  },
  {
    summary: "오늘의 당신은 평소보다 직관이 밝게 빛나는 날입니다. 머리로 계산하기보다, 첫 느낌을 믿어도 좋은 하루예요.",
    flow: "새로운 아이디어나 계획이 떠오르기 쉬운 날입니다. 떠오르는 생각들을 흘려보내지 말고, 메모로 남겨두면 도움이 됩니다.",
    emotion: "가벼운 설렘과 기대감이 섞여 있습니다. 다만, 조급한 마음이 들어오지 않도록 호흡을 한 번 고르면 좋아요.",
    external: "주변 사람들로부터 도움의 손길이나 협력 제안이 들어올 수 있습니다. 혼자 해결하려 하기보다, 함께하는 선택을 고려해 보세요.",
    advice: "완벽한 그림이 그려질 때까지 기다리기보다, 대략적인 스케치를 먼저 시작해보세요. 흐름을 시작하는 사람이 결국 방향을 잡게 됩니다.",
    keywords: ["아이디어 메모", "협력", "가벼운 시작"],
    luckyNumbers: [3, 9, 21],
    luckyColors: ["딥블루", "라벤더"],
    oneLine: "오늘 떠오른 생각 하나가, 앞으로의 당신을 크게 바꿀 수도 있어요."
  },
  {
    summary: "정리와 마무리에 집중하기 좋은 하루입니다. 쌓여 있던 것들을 하나씩 비워내며 마음의 공간을 만들어 보세요.",
    flow: "그동안 미뤄두었던 일이나 관계를 다시 정리할 기회가 들어옵니다. 부담스럽게 느껴졌던 것들도 막상 시작하면 생각보다 수월하게 흘러갈 수 있습니다.",
    emotion: "피곤함이 살짝 쌓였을 수 있지만, 정리 후의 개운함을 떠올리면 움직일 힘이 생깁니다.",
    external: "주변에서 도움을 요청하는 사람, 또는 오랜만에 연락 오는 사람이 있을 수 있습니다. 관계 정리에 있어서도 작은 전환점이 될 수 있는 날입니다.",
    advice: "‘오늘은 여기까지’라는 선을 스스로에게 허용해 주세요. 다 하지 못하더라도, 시작했다는 사실만으로 충분히 큰 진전입니다.",
    keywords: ["정리정돈", "관계 정비", "작은 진전"],
    luckyNumbers: [4, 10, 18],
    luckyColors: ["카키", "화이트"],
    oneLine: "다 치우지 못해도 괜찮아요. 한 걸음 나아간 오늘의 당신이면 충분합니다."
  }
];

// 2. 오늘 날짜를 기반으로 "하루에 하나" 운세 선택
function pickTodayFortune() {
  const today = new Date();
  // 연+월+일 더해서 fortunes 길이로 나눈 나머지 → 날짜가 바뀌면 인덱스도 바뀜
  const seed = today.getFullYear() + (today.getMonth() + 1) + today.getDate();
  const index = seed % fortunes.length;
  return fortunes[index];
}

// 3. 오늘의 운세 페이지(today.html)에 렌더링
function renderTodayPage(f) {
  const summaryEl = document.getElementById("summary-text");
  if (!summaryEl) return; // 오늘의 운세 페이지가 아니면 스킵

  const flowEl = document.getElementById("flow-text");
  const emotionEl = document.getElementById("emotion-text");
  const externalEl = document.getElementById("external-text");
  const adviceEl = document.getElementById("advice-text");
  const keywordListEl = document.getElementById("keyword-list");
  const luckyInfoEl = document.getElementById("lucky-info");
  const oneLineEl = document.getElementById("one-line");

  summaryEl.textContent = f.summary;
  flowEl.textContent = f.flow;
  emotionEl.textContent = f.emotion;
  externalEl.textContent = f.external;
  adviceEl.textContent = f.advice;

  // 키워드 초기화 후 채우기
  keywordListEl.innerHTML = "";
  f.keywords.forEach(keyword => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = keyword;
    keywordListEl.appendChild(span);
  });

  luckyInfoEl.innerHTML =
    `숫자: <strong>${f.luckyNumbers.join(" · ")}</strong><br>` +
    `컬러: <strong>${f.luckyColors.join(" · ")}</strong>`;

  oneLineEl.textContent = f.oneLine;
}

// 4. 홈(index.html)에도 오늘의 한 줄/키워드 동기화
function renderHomePage(f) {
  const oneLineHome = document.getElementById("home-one-line");
  const keywordHome = document.getElementById("home-keywords");
  if (!oneLineHome && !keywordHome) return; // 홈이 아니면 스킵

  if (oneLineHome) {
    oneLineHome.innerHTML = f.oneLine.replace(/\\n/g, "<br>");
  }

  if (keywordHome) {
    keywordHome.innerHTML = "";
    f.keywords.forEach(keyword => {
      const span = document.createElement("span");
      span.className = "chip";
      span.textContent = keyword;
      keywordHome.appendChild(span);
    });
  }
}

// 5. DOM 로드 후 실행
document.addEventListener("DOMContentLoaded", () => {
  const todayFortune = pickTodayFortune();
  renderTodayPage(todayFortune);
  renderHomePage(todayFortune);
});


// 2. 랜덤으로 하나 뽑는 함수
function pickRandomFortune() {
  const index = Math.floor(Math.random() * fortunes.length);
  return fortunes[index];
}

// 3. DOM에 채워 넣기
function renderFortune() {
  const f = pickRandomFortune();

  const summaryEl = document.getElementById("summary-text");
  const flowEl = document.getElementById("flow-text");
  const emotionEl = document.getElementById("emotion-text");
  const externalEl = document.getElementById("external-text");
  const adviceEl = document.getElementById("advice-text");
  const keywordListEl = document.getElementById("keyword-list");
  const luckyInfoEl = document.getElementById("lucky-info");
  const oneLineEl = document.getElementById("one-line");

  if (!summaryEl) {
    // 오늘의 운세 페이지가 아닐 때는 그냥 종료
    return;
  }

  summaryEl.textContent = f.summary;
  flowEl.textContent = f.flow;
  emotionEl.textContent = f.emotion;
  externalEl.textContent = f.external;
  adviceEl.textContent = f.advice;

  // 키워드 chips 비우고 다시 채우기
  keywordListEl.innerHTML = "";
  f.keywords.forEach(keyword => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = keyword;
    keywordListEl.appendChild(span);
  });

  luckyInfoEl.innerHTML =
    `숫자: <strong>${f.luckyNumbers.join(" · ")}</strong><br>` +
    `컬러: <strong>${f.luckyColors.join(" · ")}</strong>`;

  oneLineEl.textContent = f.oneLine;
}

// 4. 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", renderFortune);
