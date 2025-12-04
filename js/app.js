// js/app.js

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
    story:
      "광대 카드는 낯선 길 위에 선 당신을 비춥니다. 아직 모든 것이 정해지지 않았기에, 실수도 가능하지만 그만큼 새로운 가능성도 열려 있습니다. 주변에서는 무모하다고 말할지 몰라도, 당신의 마음은 이미 다음 장으로 넘어갈 준비를 하고 있습니다.",
    advice:
      "지금의 나는 완벽한 계획보다 한 걸음의 움직임이 더 필요할 수 있습니다. 너무 많은 가능성을 한 번에 붙잡으려 하지 말고, 오늘 딱 하나의 선택에만 집중해 보세요.",
    oneLine:
      "가벼운 발걸음 하나가, 생각보다 멀리 당신을 데려다 줄 수 있습니다."
  },
  {
    name: "1. 마법사 (The Magician)",
    subtitle: "의지 · 실행력 · 표현",
    keywords: ["실행", "집중", "능력 발휘"],
    story:
      "마법사는 이미 손 안에 필요한 도구들을 쥐고 있는 사람입니다. 당신에게는 이미 충분한 경험과 재능이 있지만, 스스로 그 사실을 잊고 있었을지도 모릅니다. 지금은 ‘할 수 있을까?’가 아니라 ‘어떻게 해볼까?’를 묻는 시점입니다.",
    advice:
      "머릿속에서만 맴돌던 생각을 지금 눈앞의 행동으로 옮겨보세요. 완벽한 준비가 아니어도 괜찮습니다. 시작한 사람만이 다음 단계를 볼 수 있습니다.",
    oneLine:
      "당신은 이미 준비되어 있습니다. 이제 필요한 건, 첫 번째 주문을 외우는 용기뿐입니다."
  },
  {
    name: "2. 여사제 (The High Priestess)",
    subtitle: "직관 · 내면의 목소리 · 비밀",
    keywords: ["직감", "관찰", "침묵 속 통찰"],
    story:
      "여사제 카드는 조용히 앉아 있지만, 누구보다 많은 것을 보고 느끼는 사람을 상징합니다. 지금의 당신은 이미 답을 알고 있지만, 스스로에게 아직 그 답을 허락하지 못하고 있을 수도 있습니다.",
    advice:
      "조언을 더 구하기 전에, 내 마음이 처음부터 무엇을 말하고 있었는지 돌아보세요. 조용한 시간을 짧게라도 내어, 나에게 솔직한 대답을 해주는 것이 중요합니다.",
    oneLine:
      "당신의 직감은 우연이 아니라, 그동안의 삶이 모여 만든 조용한 지혜입니다."
  },
  {
    name: "3. 여황제 (The Empress)",
    subtitle: "풍요 · 돌봄 · 성장",
    keywords: ["풍요", "관계", "자기 돌봄"],
    story:
      "여황제 카드는 돌봄과 풍요의 에너지를 함께 품고 있습니다. 지금의 당신은 누군가를 돌보고 있거나, 반대로 돌봄을 필요로 하고 있을 수 있습니다. 관계와 사랑, 편안함이 중요한 주제로 떠오르는 시점입니다.",
    advice:
      "지금 내 마음과 몸이 충분히 쉬고 있는지 먼저 점검해 주세요. 나를 잘 돌보는 사람이, 다른 사람도 더 따뜻하게 안아줄 수 있습니다.",
    oneLine:
      "당신도 누군가에게 충분한 사랑을 줬다면, 이제는 그 사랑을 자신에게도 돌려줄 차례입니다."
  },
  {
    name: "4. 황제 (The Emperor)",
    subtitle: "구조 · 책임 · 리더십",
    keywords: ["책임", "결정", "권위"],
    story:
      "황제 카드는 어른의 결정을 상징합니다. 지금의 당신에게는 분명한 기준과 원칙을 세워야 할 일이 있을 수 있습니다. 누군가에게 기대기보다는, 내가 중심을 잡아야 하는 순간일지도 모릅니다.",
    advice:
      "모든 사람을 만족시키는 선택은 어렵습니다. 다만, 내가 책임질 수 있는 선택을 하는 것은 가능합니다. 기준을 세우고, 그 기준에 맞게 결정을 내려보세요.",
    oneLine:
      "당신이 세운 기준은, 앞으로의 삶을 지탱해 줄 든든한 기둥이 됩니다."
  },
  {
    name: "5. 교황 (The Hierophant)",
    subtitle: "전통 · 가치 · 배움",
    keywords: ["조언자", "기본기", "가치관"],
    story:
      "교황 카드는 전통과 배움을 상징합니다. 지금의 당신은 누군가의 조언이 필요하거나, 이미 신뢰하는 기준과 규칙에 기대고 싶어질 수 있습니다.",
    advice:
      "완전히 새로운 길만이 항상 정답은 아닙니다. 이미 검증된 방법과 경험 많은 사람의 조언이 도움이 될 수 있습니다. 다만, 그 안에서 나만의 해석을 잊지 마세요.",
    oneLine:
      "남의 지혜를 빌리되, 결국 삶을 살아가는 사람은 나 자신입니다."
  },
  {
    name: "6. 연인 (The Lovers)",
    subtitle: "관계 · 선택 · 진심",
    keywords: ["관계", "진실된 마음", "중요한 선택"],
    story:
      "연인 카드는 사랑뿐 아니라, ‘마음이 향하는 선택’을 상징합니다. 지금의 당신은 관계 혹은 중요한 선택의 기로에 서 있을 가능성이 큽니다.",
    advice:
      "타인의 기대보다, 내가 진짜 원하는 방향이 어디인지 솔직해져 보세요. 관계든 일이든, 진심이 담기지 않은 선택은 오래 버티기 어렵습니다.",
    oneLine:
      "당신의 마음이 향하는 곳이 결국 당신이 있어야 할 자리입니다."
  },
  {
    name: "7. 전차 (The Chariot)",
    subtitle: "전진 · 승리 · 추진력",
    keywords: ["집중", "돌파", "속도 조절"],
    story:
      "전차 카드는 앞으로 나아가려는 강한 의지를 보여줍니다. 지금의 당신은 멈추기보다 움직이고 싶고, 한 번 마음먹은 일은 끝까지 밀어붙이고 싶은 상태일 수 있습니다.",
    advice:
      "속도만 중요한 것은 아닙니다. 내가 어디로 가고 있는지, 방향을 점검하면서 달려야 합니다. 목표를 한 번 더 정리한 뒤, 그 방향으로 에너지를 모아보세요.",
    oneLine:
      "당신이 집중한 방향으로, 삶의 에너지 또한 함께 모이게 됩니다."
  },
  {
    name: "8. 힘 (Strength)",
    subtitle: "내적 강인함 · 인내 · 따뜻한 용기",
    keywords: ["인내", "부드러운 통제", "용기"],
    story:
      "힘 카드는 물리적인 힘보다, 자신과 상황을 다루는 부드러운 강인함을 상징합니다. 지금의 당신은 큰 소리를 내기보다, 묵묵히 버티며 상황을 조절하고 있을 수 있습니다.",
    advice:
      "억지로 밀어붙이기보다, 스스로를 다독이며 한 걸음씩 나아가 보세요. 진짜 힘은 소리보다 태도에서 드러납니다.",
    oneLine:
      "지금까지 버텨온 것만으로도, 이미 당신은 충분히 강한 사람입니다."
  },
  {
    name: "9. 은둔자 (The Hermit)",
    subtitle: "고독 · 성찰 · 깊이",
    keywords: ["혼자만의 시간", "정리", "깊은 생각"],
    story:
      "은둔자 카드는 일부러 거리를 두고, 스스로를 돌아보는 사람을 상징합니다. 지금의 당신은 잠시 시끄러운 것들에서 벗어나, 나만의 속도로 생각을 정리할 필요가 있습니다.",
    advice:
      "모두와 연결되어 있을 필요는 없습니다. 휴대폰을 잠시 멀리 두고, 조용한 산책이나 혼자만의 시간을 허락해 주세요. 그 안에서 중요한 통찰이 떠오를 수 있습니다.",
    oneLine:
      "조용히 멈춰 선 순간에도, 당신의 삶은 여전히 앞으로 나아가고 있습니다."
  },
  {
    name: "10. 운명의 바퀴 (Wheel of Fortune)",
    subtitle: "전환점 · 흐름 · 우연",
    keywords: ["변화", "기회", "순환"],
    story:
      "운명의 바퀴 카드는 예기치 못한 변화와 전환점을 암시합니다. 좋고 나쁨의 이분법보다는, ‘이제 새로운 국면으로 넘어간다’는 의미가 더 강합니다.",
    advice:
      "흐름이 바뀌는 시기에는, 과거 방식만 고집하기보다 변화에 몸을 조금 맡겨보는 것도 필요합니다. 놓아야 할 것은 놓고, 들어올 것은 받아들이는 유연함을 가져보세요.",
    oneLine:
      "지금의 변화는, 당신이 다음 장으로 넘어가기 위한 자연스러운 흐름일 수 있습니다."
  },
  {
    name: "11. 정의 (Justice)",
    subtitle: "균형 · 공정함 · 선택의 결과",
    keywords: ["균형", "공정한 판단", "원인과 결과"],
    story:
      "정의 카드는 저울과 검을 든 사람처럼, 공정한 시선과 냉정한 판단을 상징합니다. 지금의 선택은 이후에 분명한 결과로 돌아올 가능성이 큽니다.",
    advice:
      "감정에 치우치기보다, 사실과 책임을 기준으로 판단해 보세요. 나와 상대 모두에게 공정한 선택이 무엇인지 스스로에게 물어보는 것이 중요합니다.",
    oneLine:
      "오늘의 선택은, 언젠가 돌아올 내일의 결과로 이어집니다."
  },
  {
    name: "12. 매달린 사람 (The Hanged Man)",
    subtitle: "관점의 전환 · 일시 정지",
    keywords: ["멈춤", "다른 시각", "수용"],
    story:
      "매달린 사람 카드는 일부러 멈춰 선 상태를 의미합니다. 겉으로 보면 답답해 보이지만, 사실은 새로운 관점을 얻기 위한 ‘잠깐의 멈춤’일 수 있습니다.",
    advice:
      "지금 당장 해결되지 않는 일이라면, 애써 끌고 가기보다 한 발 물러서 보는 것도 방법입니다. 같은 문제도, 다른 각도에서 보면 전혀 다르게 보일 수 있습니다.",
    oneLine:
      "잠시 멈춘 시간 속에서, 전혀 새로운 길이 보이기도 합니다."
  },
  {
    name: "13. 죽음 (Death)",
    subtitle: "끝맺음 · 종료 · 새로운 시작의 준비",
    keywords: ["종결", "정리", "재시작"],
    story:
      "죽음 카드는 실제 죽음이 아니라, 어떤 국면의 ‘완전한 끝’을 상징합니다. 지금의 당신은 더 이상 예전 방식으로는 이어갈 수 없는 지점에 와 있을 수 있습니다.",
    advice:
      "억지로 붙잡고 있는 것이 있다면, 이제는 놓아줄 시기일지도 모릅니다. 끝내야 할 것을 끝내야 새로운 시작을 위한 자리가 생깁니다.",
    oneLine:
      "한 장의 마지막 페이지가 있어야, 새로운 책을 펼칠 수 있습니다."
  },
  {
    name: "14. 절제 (Temperance)",
    subtitle: "조화 · 균형 · 적당함",
    keywords: ["적당한 거리", "균형", "조율"],
    story:
      "절제 카드는 두 가지를 적당히 섞어내는 능력을 상징합니다. 지금의 당신에게는 과한 것과 부족한 것 사이의 균형이 중요한 주제일 수 있습니다.",
    advice:
      "한쪽으로 치우치기보다, 내 몸과 마음이 편안한 지점을 찾아보세요. ‘이 정도면 괜찮다’고 느껴지는 선을 스스로 정하는 것이 필요합니다.",
    oneLine:
      "지나치지도 모자라지도 않은 지점에서, 삶은 가장 편안하게 흐릅니다."
  },
  {
    name: "15. 악마 (The Devil)",
    subtitle: "집착 · 유혹 · 패턴",
    keywords: ["집착", "중독", "끊기 어려운 습관"],
    story:
      "악마 카드는 나를 묶고 있는 습관, 관계, 생각을 상징합니다. 벗어나고 싶다고 느끼면서도, 동시에 익숙해서 손을 놓기 어려운 것들이 있을 수 있습니다.",
    advice:
      "스스로도 알고 있는 ‘나에게 좋지 않은 무언가’가 있다면, 오늘 하루만이라도 그 강도를 조금 줄여보세요. 완전한 단절이 아니어도, 줄이는 첫걸음이 중요합니다.",
    oneLine:
      "나를 묶고 있는 줄의 끝을 쥐고 있는 사람도, 결국 나 자신입니다."
  },
  {
    name: "16. 탑 (The Tower)",
    subtitle: "붕괴 · 충격 · 재구성",
    keywords: ["예상 밖의 변화", "깨달음", "새로운 기반"],
    story:
      "탑 카드는 갑작스러운 충격과 구조의 붕괴를 상징합니다. 믿고 있던 무언가가 흔들리거나, 예상치 못한 일이 벌어질 수 있습니다. 하지만 그 과정에서 진짜 단단한 것이 무엇인지 드러나기도 합니다.",
    advice:
      "무너지는 것에만 집중하지 말고, 그 안에서 무엇을 새로 세울 수 있을지 생각해 보세요. 오래된 틀을 깨야만, 나에게 맞는 구조를 다시 지을 수 있습니다.",
    oneLine:
      "낡은 탑이 무너진 자리에서, 나에게 맞는 집을 새로 지을 수 있습니다."
  },
  {
    name: "17. 별 (The Star)",
    subtitle: "희망 · 치유 · 영감",
    keywords: ["회복", "희망", "영감"],
    story:
      "별 카드는 긴 어둠 끝에 보이는 작은 빛을 상징합니다. 완전히 괜찮아진 것은 아니지만, 다시 한 번 믿어보고 싶다는 마음이 피어오르는 시점입니다.",
    advice:
      "지나온 시간 속에서 내가 지켜낸 것들을 떠올려 보세요. 아직 부족해 보일지라도, 그 안에는 분명 당신만의 강인함이 담겨 있습니다. 스스로에게 조금 더 부드러운 시선을 건네도 괜찮습니다.",
    oneLine:
      "당신이 버티며 지나온 시간들 위에, 이제는 작은 빛이 하나둘 켜지고 있습니다."
  },
  {
    name: "18. 달 (The Moon)",
    subtitle: "불안 · 상상 · 흐릿한 경계",
    keywords: ["불안", "혼란", "예민함"],
    story:
      "달 카드는 또렷한 태양빛이 아닌, 흐릿한 달빛 아래의 풍경을 보여줍니다. 사실보다 상상이 더 크게 느껴지고, 작은 일에도 마음이 예민해질 수 있는 시기입니다.",
    advice:
      "모든 것을 지금 확실히 정하려 하지 말고, ‘아직은 잘 모른다’는 상태를 잠시 허용해 주세요. 감정이 가라앉은 뒤에 다시 보면, 훨씬 명확하게 보이는 것들이 있습니다.",
    oneLine:
      "달빛 아래에서는 모든 것이 흐릿해 보이지만, 그렇다고 길이 사라진 것은 아닙니다."
  },
  {
    name: "19. 태양 (The Sun)",
    subtitle: "성취 · 기쁨 · 자신감",
    keywords: ["성취", "명확함", "즐거움"],
    story:
      "태양 카드는 따뜻한 성공과 명확한 자신감을 보여줍니다. 지금의 당신은 이미 중요한 무언가를 이뤄냈거나, 그 직전에 서 있을 수 있습니다.",
    advice:
      "성과를 과하게 축소하지 말고, 내가 해낸 것을 인정해 주세요. 스스로를 격려하는 태도가 앞으로의 도전에도 큰 힘이 됩니다.",
    oneLine:
      "당신이 빛을 내기 시작하면, 주변의 풍경도 함께 밝아집니다."
  },
  {
    name: "20. 심판 (Judgement)",
    subtitle: "깨달음 · 부름 · 재시작",
    keywords: ["각성", "결산", "새로운 부름"],
    story:
      "심판 카드는 과거의 시간들을 정리하고, 새로운 부름을 받아들이는 순간을 상징합니다. 그동안의 선택과 경험이 하나의 의미로 묶여 보이기 시작할 수 있습니다.",
    advice:
      "지나온 시간을 후회만 하기보다, 그 안에서 내가 배운 것들을 정리해 보세요. 이제는 새로운 방식으로 다시 시작할 수 있는 기회가 열리고 있습니다.",
    oneLine:
      "당신을 부르는 목소리는, 어쩌면 오랫동안 묵혀 두었던 진짜 나의 바람일지도 모릅니다."
  },
  {
    name: "21. 세계 (The World)",
    subtitle: "완성 · 통합 · 하나의 사이클",
    keywords: ["완성", "성취", "마무리와 출발"],
    story:
      "세계 카드는 하나의 큰 여정이 완성되는 순간을 상징합니다. 지금의 당신은 어떤 사이클을 마무리하고, 다음 단계로 나아갈 준비를 하고 있을 수 있습니다.",
    advice:
      "여기까지 온 나 자신을 충분히 축하해 주세요. 끝은 곧 새로운 시작의 문턱입니다. 다음 여정에서 무엇을 가져가고, 무엇을 내려놓을지 정해보는 시간도 필요합니다.",
    oneLine:
      "당신의 한 챕터가 끝났습니다. 그리고 새로운 이야기가 조용히 문을 두드리고 있습니다."
  }
];

// 랜덤으로 타로 카드 한 장 뽑기
function pickRandomTarotCard() {
  const index = Math.floor(Math.random() * tarotDeck.length);
  return tarotDeck[index];
}

// 타로 결과 화면에 뿌려주기
function renderTarotResult(card) {
  const nameEl = document.getElementById("tarot-card-name");
  const subEl = document.getElementById("tarot-card-sub");
  const keywordsEl = document.getElementById("tarot-card-keywords");
  const storyEl = document.getElementById("tarot-card-story");
  const adviceEl = document.getElementById("tarot-card-advice");
  const oneLineEl = document.getElementById("tarot-card-one-line");

  const flipCardEl = document.getElementById("tarot-flip-card");
  const backNameEl = document.getElementById("tarot-back-name");
  const backSubEl = document.getElementById("tarot-back-sub");

  if (!nameEl || !subEl || !keywordsEl || !storyEl || !adviceEl || !oneLineEl) {
    // 타로 페이지가 아닐 때
    return;
  }

  // 텍스트 먼저 세팅
  nameEl.textContent = card.name;
  subEl.textContent = card.subtitle || "";
  storyEl.textContent = card.story;
  adviceEl.textContent = card.advice;
  oneLineEl.textContent = card.oneLine;

  // 키워드 칩
  keywordsEl.innerHTML = "";
  (card.keywords || []).forEach((kw) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = kw;
    keywordsEl.appendChild(span);
  });

  // 플립 카드 뒷면 텍스트
  if (backNameEl) backNameEl.textContent = card.name;
  if (backSubEl) backSubEl.textContent = card.subtitle || "";

  // 플립 애니메이션: 클래스를 잠깐 제거했다가 다시 추가
  if (flipCardEl) {
    flipCardEl.classList.remove("is-flipped");
    // 리플로우 강제 → 애니메이션 재시작 트릭
    void flipCardEl.offsetWidth;
    setTimeout(() => {
      flipCardEl.classList.add("is-flipped");
    }, 30);
  }
}



// 3. 날짜 기반 시드 생성 (하루에 하나 고정)
function getDateSeed() {
  const d = new Date();
  // YYYYMMDD 형식으로 하나의 숫자를 만듦
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

// 4. 이름 + 생년월일 기반 개인 시드 생성
function getPersonalSeed(name, birth) {
  let base = getDateSeed();
  const str = (name || "").trim() + (birth || "").trim();

  for (let i = 0; i < str.length; i++) {
    base += str.charCodeAt(i) * (i + 1);
  }

  return base;
}

// 5. 오늘의 운세 페이지 렌더링
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

// 6. 홈(index.html) 오늘의 한 줄/키워드 렌더링
function renderHomePage(f) {
  const oneLineHome = document.getElementById("home-one-line");
  const keywordHome = document.getElementById("home-keywords");
  if (!oneLineHome && !keywordHome) return; // 홈이 아니면 스킵

  if (oneLineHome) {
    oneLineHome.textContent = f.oneLine;
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

document.addEventListener("DOMContentLoaded", () => {
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

  // ✅ 3) 타로 카드 페이지 초기화
  const tarotButtons = document.querySelectorAll(".tarot-pick");
  const tarotRedrawBtn = document.getElementById("tarot-redraw");

  const handleDraw = (event) => {
    event.preventDefault();
    const card = pickRandomTarotCard();
    renderTarotResult(card);
  };

  if (tarotButtons && tarotButtons.length > 0) {
    tarotButtons.forEach((btn) => {
      btn.addEventListener("click", handleDraw);
    });
  }

  if (tarotRedrawBtn) {
    tarotRedrawBtn.addEventListener("click", handleDraw);
  }
});
