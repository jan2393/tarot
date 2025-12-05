document.addEventListener("DOMContentLoaded", () => {

  // 카드 선택 후 뒤집기
  const tarotCards = document.querySelectorAll('.tarot-card-btn');

  tarotCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      const flipCard = document.getElementById("tarot-flip-card");
      flipCard.classList.toggle("is-flipped"); // 카드 뒤집기

      const cards = pickThreeTarotCards();
      renderTarotResult(cards); // 뽑힌 카드 결과 렌더링
    });
  });

  
  // ✅ 1) 오늘의 운세 (홈 + today.html)
  const dateSeed = getDateSeed();
  const todayFortune = getFortuneBySeed(dateSeed);

  renderTodayPage(todayFortune);
  renderHomePage(todayFortune);

  // ✅ 2) 오늘의 운세 개인화 (이름 + 생년월일)
  const btn = document.getElementById("personalize-btn");
  if (btn) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      const nameInput = document.getElementById("personal-name");
      const birthInput = document.getElementById("personal-birth");
      const name = nameInput ? nameInput.value : "";
      const birth = birthInput ? birthInput.value : "";

      const personalSeed = getPersonalSeed(name, birth);
      const personalFortune = getFortuneBySeed(personalSeed);

      renderTodayPage(personalFortune);
    });
  }

  // ✅ 3) 타로 카드 페이지 초기화 (3장 스프레드)
  const tarotButtons = document.querySelectorAll(".tarot-pick");
  const tarotRedrawBtn = document.getElementById("tarot-redraw");

  const handleDraw = (event) => {
    event.preventDefault();
    const cards = pickThreeTarotCards();  // 3장 카드 뽑기
    const clickedBtn =
      event.currentTarget && event.currentTarget.classList.contains("tarot-pick")
        ? event.currentTarget
        : null;
    renderTarotResult(cards, clickedBtn);
  };

  if (tarotButtons.length > 0) {
    tarotButtons.forEach((btn) => {
      btn.addEventListener("click", handleDraw);
    });
  } else {
    console.error("타로 카드 버튼이 없습니다.");
  }

  if (tarotRedrawBtn) {
    tarotRedrawBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const cards = pickThreeTarotCards();
      renderTarotResult(cards, null); // 다시 뽑기는 버튼 하이라이트 변경 없음
    });
  } else {
    console.error("다시 뽑기 버튼이 없습니다.");
  }
});

// 카드 클릭 연결 (app.js에 있는 함수들 자동 연결)
  document.addEventListener("DOMContentLoaded", function() {
    const deck = document.getElementById('deck');
    if (!deck) return;

    // 기존 카드들 클릭 이벤트 연결
    deck.querySelectorAll('.card').forEach((cardEl, index) => {
      cardEl.onclick = () => {
        if (cardEl.classList.contains('flipped') || selectedCards.length >= 3) return;
        flipCard(cardEl, tarotDeck[index % tarotDeck.length]); // 안전하게 카드 전달
      };
    });

    // 새로고침해도 카드 다시 생성 (필수!)
    createDeck();
  });


// 1. 운세 데이터 여러 개 (계속 추가 가능)
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
  },  
  {
    summary: "오늘은 에너지가 차오르는 날입니다. 몸과 마음이 동시에 움직이고 싶어하는 기분 좋은 하루예요.",
    flow: "평소보다 몸이 가벼워지고, 하고 싶은 일이 눈에 들어옵니다. 작은 것이라도 시작하면 금세 흐름을 탈 수 있어요.",
    emotion: "기분 좋은 긴장감과 설렘이 공존합니다. 오랜만에 ‘할 수 있다’는 자신감이 느껴지는 날입니다.",
    external: "주변 사람들도 당신의 밝은 에너지를 알아보고 다가올 가능성이 높습니다. 자연스럽게 좋은 대화가 이어질 수 있어요.",
    advice: "하고 싶었던 일, 말하고 싶었던 말, 지금이 바로 그 타이밍입니다. 망설이지 말고 한 발짝 내딛어 보세요.",
    keywords: ["에너지 충전", "즉흥적인 행동", "자신감"],
    luckyNumbers: [1, 8, 19],
    luckyColors: ["골드", "오렌지"],
    oneLine: "오늘의 당신은 빛납니다. 그 빛을 숨기지 마세요."
  },
  {
    summary: "조용히 자신을 돌아보기 좋은 하루입니다. 바쁜 일상 속에서 잠시 멈춰 서도 괜찮은 날이에요.",
    flow: "혼자만의 시간이 필요하거나, 조용한 카페에서 생각을 정리하고 싶어지는 분위기입니다.",
    emotion: "감정이 깊어지며, 평소엔 지나쳤던 작은 것들이 눈에 들어옵니다. 따뜻한 감수성이 살아나는 날입니다.",
    external: "외부의 소음이 조금 거슬릴 수 있으니, 이어폰이나 조용한 장소를 찾아보는 것이 좋습니다.",
    advice: "혼자 있는 시간이 부담스럽게 느껴지지 않도록, 좋아하는 음악이나 차 한 잔을 준비해 보세요.",
    keywords: ["혼자만의 시간", "감수성", "재충전"],
    luckyNumbers: [6, 15, 27],
    luckyColors: ["모카", "연그레이"],
    oneLine: "조용한 오늘 속에서 당신은 더 선명해집니다."
  },
  {
    summary: "오늘은 관계가 한층 깊어지는 날입니다. 진심이 통하고, 서로에게 힘이 되는 대화가 오갈 수 있어요.",
    flow: "오랜만에 연락하고 싶던 사람, 마음에 걸리던 사람에게 먼저 다가가면 좋은 반응이 돌아옵니다.",
    emotion: "서로에게 따뜻한 말 한마디가 큰 위로가 되는 감성적인 하루입니다.",
    external: "새로운 만남보다는 기존 관계가 더 단단해지는 흐름입니다.",
    advice: "‘고맙다’, ‘미안하다’, ‘보고 싶었다’ 같은 말, 오늘은 꼭 전해보세요.",
    keywords: ["진심 전달", "관계 회복", "따뜻한 대화"],
    luckyNumbers: [2, 11, 23],
    luckyColors: ["베이지", "소프트핑크"],
    oneLine: "오늘 전하는 한마디가 오래도록 남습니다."
  },
  {
    summary: "오늘은 재물운이 조용히 움직이는 날입니다. 눈에 보이지 않는 곳에서 좋은 기회가 준비되고 있어요.",
    flow: "지출보다는 수입, 소비보다는 저축이 유리한 날입니다. 작은 투자나 계획을 세우기에 좋습니다.",
    emotion: "미래를 생각하는 마음이 강해지며, 안정감이 커지는 하루입니다.",
    external: "누군가에게 돈 얘기를 꺼내기보다는, 스스로 조용히 정리하는 것이 좋습니다.",
    advice: "통장 잔고를 확인하고, 작은 목표를 세워보세요. 그 시작이 큰 변화를 만듭니다.",
    keywords: ["저축", "작은 투자", "미래 계획"],
    luckyNumbers: [5, 14, 28],
    luckyColors: ["다크그린", "골드"],
    oneLine: "오늘 심은 씨앗이 조용히 자라납니다."
  },
  {
    summary: "오늘은 당신의 매력이 자연스럽게 빛나는 날입니다. 주변에서 먼저 다가오는 사람이 많아질 거예요.",
    flow: "연애운, 인기운 모두 상승세. 솔로라면 새로운 만남, 연애 중이라면 더 가까워지는 기회가 생깁니다.",
    emotion: "자연스러운 자신감이 생기고, 웃음이 쉽게 나오는 하루입니다.",
    external: "SNS나 모임에서 당신이 화제가 될 가능성이 높습니다.",
    advice: "평소보다 조금 더 신경 써서 외출해 보세요. 오늘은 그 노력이 배로 돌아옵니다.",
    keywords: ["매력 발산", "새로운 만남", "인기 상승"],
    luckyNumbers: [9, 17, 33],
    luckyColors: ["로즈골드", "코럴"],
    oneLine: "오늘 당신을 보는 사람들의 눈빛이 다릅니다."
  },
  {
    summary: "예상치 못한 행운이 숨어 있는 하루입니다. 평범한 순간 속에 작은 기적이 있을 수 있어요.",
    flow: "길을 걷다, 카페에 앉아 있다, 우연히 만난 사람에게서 좋은 소식이 들릴 수 있습니다.",
    emotion: "기분 좋은 긴장감과 기대감이 하루를 채웁니다.",
    external: "흐름에 몸을 맡기면 자연스럽게 좋은 일이 따라옵니다.",
    advice: "계획에 없던 외출, 우연한 만남도 오늘은 모두 환영하세요.",
    keywords: ["우연한 행운", "작은 기적", "흐름 타기"],
    luckyNumbers: [3, 13, 29],
    luckyColors: ["옐로우", "스카이블루"],
    oneLine: "오늘은 우연이 필연이 되는 날입니다."
  },
  {
    summary: "오늘은 새로운 시작을 준비하기 좋은 날입니다. 아직 완벽하지 않아도 괜찮아요.",
    flow: "오래 고민했던 일, 미뤄왔던 도전을 시작할 타이밍이 다가왔습니다.",
    emotion: "두려움과 설렘이 반반 섞여 있지만, 그만큼 진지하게 준비된 하루입니다.",
    external: "주변에서 응원하거나 도와줄 사람이 나타날 수 있어요.",
    advice: "완벽한 준비보다, 오늘 한 걸음이 더 중요합니다.",
    keywords: ["새로운 시작", "첫걸음", "도전"],
    luckyNumbers: [1, 7, 22],
    luckyColors: ["레드", "화이트"],
    oneLine: "시작이 반이다, 오늘 당신은 이미 반을 넘었습니다."
  },
  {
    summary: "오늘은 마음이 편안해지는 날입니다. 그동안 쌓였던 무거운 감정이 서서히 내려앉아요.",
    flow: "혼자만의 시간을 가지거나, 좋아하는 사람과 소소한 대화를 나누기 좋은 날입니다.",
    emotion: "따뜻하고 포근한 감정이 하루를 감쌉니다.",
    external: "누군가에게 위로받거나, 당신이 누군가를 위로해 줄 수도 있어요.",
    advice: "지금 이 편안함을 충분히 느껴보세요. 이 순간이 당신을 치유합니다.",
    keywords: ["치유", "편안함", "위로"],
    luckyNumbers: [6, 11, 25],
    luckyColors: ["민트", "라이트그레이"],
    oneLine: "오늘은 마음이 따뜻한 이불 속에 있는 날이에요."
  },
  {
    summary: "오늘은 직관이 예리하게 빛나는 날입니다. 첫 느낌을 믿어도 좋은 하루예요.",
    flow: "결정해야 할 일이 있다면, 머리보다 마음이 먼저 말하는 쪽을 따라가 보세요.",
    emotion: "조용하지만 확신에 찬 기운이 감돕니다.",
    external: "다른 사람의 말보다 당신의 내면이 더 정확할 수 있어요.",
    advice: "망설일수록 답은 멀어집니다. 오늘은 직감에 맡겨보세요.",
    keywords: ["직관", "첫 느낌", "확신"],
    luckyNumbers: [5, 16, 31],
    luckyColors: ["인디고", "실버"],
    oneLine: "오늘 당신의 직감은 정답에 가장 가까이 있습니다."
  }
];

// 2. 공통: 시드(seed) 기반으로 운세 하나 고르는 함수
function getFortuneBySeed(seed) {
  const safeSeed = Math.abs(seed || 0);
  const index = safeSeed % fortunes.length;
  return fortunes[index];
}

// ---- TAROT CARD DATA (메이저 아르카나 22장) ----
const tarotDeck = [
  {
    name: "0. 광대 (The Fool)",
    subtitle: "새로운 시작 · 자유 · 모험",
    keywords: ["새 출발", "용기", "자유로운 선택"],
    story: "광대 카드는 낯선 길 위에 선 당신을 비춥니다. 아직 모든 것이 정해지지 않았기에, 실수도 가능하지만 그만큼 새로운 가능성도 열려 있습니다. 주변에서는 무모하다고 말할지 몰라도, 당신의 마음은 이미 다음 장으로 넘어갈 준비를 하고 있습니다.",
    advice: "지금의 나는 완벽한 계획보다 한 걸음의 움직임이 더 필요할 수 있습니다. 너무 많은 가능성을 한 번에 붙잡으려 하지 말고, 오늘 딱 하나의 선택에만 집중해 보세요.",
    oneLine: "가벼운 발걸음 하나가, 생각보다 멀리 당신을 데려다 줄 수 있습니다.",
    image: "https://gi.esmplus.com/vovs123/app/tarot/fool.png"
  },
  {
    name: "1. 마법사 (The Magician)",
    subtitle: "의지 · 실행력 · 표현",
    keywords: ["실행", "집중", "능력 발휘"],
    story: "마법사는 이미 손 안에 필요한 도구들을 쥐고 있는 사람입니다. 당신에게는 이미 충분한 경험과 재능이 있지만, 스스로 그 사실을 잊고 있었을지도 모릅니다. 지금은 ‘할 수 있을까?’가 아니라 ‘어떻게 해볼까?’를 묻는 시점입니다.",
    advice: "머릿속에서만 맴돌던 생각을 지금 눈앞의 행동으로 옮겨보세요. 완벽한 준비가 아니어도 괜찮습니다. 시작한 사람만이 다음 단계를 볼 수 있습니다.",
    oneLine: "당신은 이미 준비되어 있습니다. 이제 필요한 건, 첫 번째 주문을 외우는 용기뿐입니다.",
    image: "https://gi.esmplus.com/vovs123/app/tarot/magician.png"
  },
  {
    name: "2. 여사제 (The High Priestess)",
    subtitle: "직관 · 내면의 목소리 · 비밀",
    keywords: ["직감", "관찰", "침묵 속 통찰"],
    story: "여사제 카드는 조용히 앉아 있지만, 누구보다 많은 것을 보고 느끼는 사람을 상징합니다. 지금의 당신은 이미 답을 알고 있지만, 스스로에게 아직 그 답을 허락하지 못하고 있을 수도 있습니다.",
    advice: "조언을 더 구하기 전에, 내 마음이 처음부터 무엇을 말하고 있었는지 돌아보세요. 조용한 시간을 짧게라도 내어, 나에게 솔직한 대답을 해주는 것이 중요합니다.",
    oneLine: "당신의 직감은 우연이 아니라, 그동안의 삶이 모여 만든 조용한 지혜입니다.",
    image: "https://gi.esmplus.com/vovs123/app/tarot/high-priestess.png"
  },
  // ... 추가 카드들도 같은 형식으로 이미지 경로 수정
  {
    name: "21. 세계 (The World)",
    subtitle: "완성 · 통합 · 하나의 사이클",
    keywords: ["완성", "성취", "마무리와 출발"],
    story: "세계 카드는 하나의 큰 여정이 완성되는 순간을 상징합니다. 지금의 당신은 어떤 사이클을 마무리하고, 다음 단계로 나아갈 준비를 하고 있을 수 있습니다.",
    advice: "여기까지 온 나 자신을 충분히 축하해 주세요. 끝은 곧 새로운 시작의 문턱입니다. 다음 여정에서 무엇을 가져가고, 무엇을 내려놓을지 정해보는 시간도 필요합니다.",
    oneLine: "당신의 한 챕터가 끝났습니다. 그리고 새로운 이야기가 조용히 문을 두드리고 있습니다.",
    image: "https://gi.esmplus.com/vovs123/app/tarot/world.png"
  }
];

// 타로 카드 페이지 초기화
  initTarotPage();
});

function initTarotPage() {
  const tarotButtons = document.querySelectorAll(".tarot-pick");
  const redrawBtn = document.getElementById("tarot-redraw");

  const handleDraw = () => {
    const cards = pickThreeTarotCards();
    renderTarotResult(cards);
    flipAllCards(); // 카드 뒤집기 애니메이션 실행
  };

// 카드 뒤집기 애니메이션 실행
function flipAllCards() {
  document.querySelectorAll(".tarot-card").forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("flipped");
    }, i * 600);
  });
}
  
  tarotButtons.forEach(btn => btn.addEventListener("click", handleDraw));
  if (redrawBtn) redrawBtn.addEventListener("click", handleDraw);

  // 카드 자체 클릭도 가능하게 (중요!)
  document.querySelectorAll(".tarot-card").forEach((card, index) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

 // 카드 뽑기 함수
  function pickThreeTarotCards() {
    const shuffledDeck = [...tarotDeck].sort(() => Math.random() - 0.5);  // 덱 섞기
    return shuffledDeck.slice(0, 3);  // 첫 3장 반환
  }
  
  const indices = [];
  while (indices.length < 3) {
    const idx = Math.floor(Math.random() * tarotDeck.length);
    if (!indices.includes(idx)) {
      indices.push(idx);
    }
  }
  return indices.map(i => tarotDeck[i]);
}


// cards: [카드1, 카드2, 카드3], clickedButton: 사용자가 클릭한 버튼 (선택 하이라이트용)
function renderTarotResult(cards, clickedButton) {
  if (!cards || cards.length < 3) return;

  const card1 = cards[0]; // 현재의 나
  const card2 = cards[1]; // 오늘의 흐름 (메인 카드)
  const card3 = cards[2]; // 오늘의 조언

  const nameEl = document.getElementById("tarot-card-name");
  const subEl = document.getElementById("tarot-card-sub");
  const keywordsEl = document.getElementById("tarot-card-keywords");

  const card1TextEl = document.getElementById("tarot-card1-text");
  const card2TextEl = document.getElementById("tarot-card2-text");
  const card3TextEl = document.getElementById("tarot-card3-text");

  const flipCardEl = document.getElementById("tarot-flip-card");
  const backNameEl = document.getElementById("tarot-back-name");
  const backSubEl = document.getElementById("tarot-back-sub");
  const backThumbEl = document.getElementById("tarot-back-thumb");

  const pos1Thumb = document.getElementById("tarot-pos1-thumb");
  const pos2Thumb = document.getElementById("tarot-pos2-thumb");
  const pos3Thumb = document.getElementById("tarot-pos3-thumb");
  const pos1Name = document.getElementById("tarot-pos1-name");
  const pos2Name = document.getElementById("tarot-pos2-name");
  const pos3Name = document.getElementById("tarot-pos3-name");

  if (!nameEl || !subEl || !keywordsEl || !card1TextEl || !card2TextEl || !card3TextEl) {
    return; // 타로 페이지가 아닐 때
  }

  // 🔹 메인 카드(카드2)를 상단 제목으로 사용
  nameEl.textContent = card2.name;
  subEl.textContent = card2.subtitle || "";

// 카드 뽑기 버튼 클릭 이벤트
  document.getElementById("tarot-redraw").addEventListener("click", function () {
    const cards = pickThreeTarotCards();
    renderTarotResult(cards);
  });
  
  // 🔹 키워드는 카드2 기준
  keywordsEl.innerHTML = "";
  (card2.keywords || []).forEach((kw) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = kw;
    keywordsEl.appendChild(span);
  });

  // 🔹 텍스트 해석 구성
  card1TextEl.textContent = card1.story;       // 현재의 나
  card2TextEl.textContent = card2.story;       // 오늘의 흐름
  card3TextEl.textContent = card3.advice;      // 오늘의 조언

  // 🔹 플립 카드 뒷면에는 메인 카드(2번) 정보 + 썸네일
  if (backNameEl) backNameEl.textContent = card2.name;
  if (backSubEl) backSubEl.textContent = card2.subtitle || "";
  if (backThumbEl) {
    backThumbEl.src = card2.image || "https://gi.esmplus.com/vovs123/app/tarot/back.png";
    backThumbEl.alt = card2.name;
  }

  // 🔹 아래 3장 썸네일/이름 세팅
  if (pos1Thumb) pos1Thumb.src = card1.image || "https://gi.esmplus.com/vovs123/app/tarot/back.png";
  if (pos2Thumb) pos2Thumb.src = card2.image || "https://gi.esmplus.com/vovs123/app/tarot/back.png";
  if (pos3Thumb) pos3Thumb.src = card3.image || "https://gi.esmplus.com/vovs123/app/tarot/back.png";

  if (pos1Name) pos1Name.textContent = card1.name;
  if (pos2Name) pos2Name.textContent = card2.name;
  if (pos3Name) pos3Name.textContent = card3.name;

  // 🔹 선택한 버튼 하이라이트
  const allButtons = document.querySelectorAll(".tarot-card-btn");
  allButtons.forEach((b) => b.classList.remove("selected"));
  if (clickedButton) {
    clickedButton.classList.add("selected");
  }

  // 🔹 플립 애니메이션
  if (flipCardEl) {
    flipCardEl.classList.remove("is-flipped");
    void flipCardEl.offsetWidth; // 리셋 트릭
    setTimeout(() => {
      flipCardEl.classList.add("is-flipped");
    }, 30);
  }
}
