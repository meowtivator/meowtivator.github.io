const stateOrder = [
  "planet--top",
  "planet--right",
  "planet--bottom",
  "planet--left",
];

const planetData = {
  top: {
    title: "Goal",
    summary: "멋사에서의 제 목표는요...",
    description:
      "풀스택(프론트엔드와 백엔드) 세션을 모두 수강하며 웹 개발 전반에 대한 이해도를 높이고 싶어요. 그리고 멋사의 부원들과 함께 프로젝트는 물론 다양한 활동들을 통해 자연스럽게 친해지고, 별처럼 빛나는 분들과 가까워지고 싶어요. 또한 여러 해커톤과 아이디어톤에도 도전하여, 수상에 가까이 다가가 보는 경험을 해보고자 합니다!! 궁극적으로는 이러한 세션을 모두 완수하고나서 정말 멋쟁이사자가 되어서, 다른 도움이 필요한 학우들이 있으면 언제든지 당당하게 도와드릴 수 있는 제가 있길 바라요 :)",
    image: "",
  },
  right: {
    title: "Intro",
    summary: "제 소개를 하면요...",
    description:
      "안녕하세요! 구슬 아이스크림을 좋아하는 13기 아기사자 박재우입니다! 이번 멋쟁이 사자처럼 13기 프론트엔드로 지원했어요! 그나저나 제 MBTI는 분명 INF/TJ 인데 자꾸 다른 분들이 슈퍼 E라면서 오해를 하세요 ㅠㅠ 완전 슈퍼슈퍼 I인데... 그래서 슈퍼 E이신 분들 너무 멋있고 부러워요! 다가와주시면 격하게 반겨드릴 자신 있으니 언제든지 환영이에요!!",
    image: "",
  },
  bottom: {
    title: "Playlist",
    summary: "제 노동요는요...",
    description:
      "저는 서정적인 발라드와 팝송을 되게 좋아해요! 하나 하나의 작품에 그 아티스트만의 가치관과 감정선이 들어있는 것이 마치 실존하는 세계를 직접 감상할 수 있는 것만 같기 때문이에요. 그래서 그런지 한 곡에 정착하진 못하고 어떠한 분위기나 키워드를 가지고 있는 노래를 들은 뒤에 파생되는 여러 곡들을 이어들으며 시간을 보내고 있어요! 문제는 노래의 제목과 가수를 잘 모른다는 것...? 딱히 노래를 플레이리스트에 담아놓지 않아서 공유할 플레이 리스트는 없다는 것...? 그래도 최근에 많이 들은 이 노래를 함께 들으면서 제 자기소개 페이지를 구경해주시면 기쁠 것 같아요!",
    image: "",
  },
  left: {
    title: "Hobby",
    summary: "저에 대해서 더 궁금하신가요?",
    description:
      "제 취미는 칵테일을 직접 만들어서 마시는 거에요! 레시피대로 만드는 것도 좋고 재료가 하나 둘 쌓이기 시작하면 직접 커스텀을 해서 마시기도 해요. 물론 지금은 기숙사에서 지내느라 잠시 쉬고 있지만... 추후에 자취를 하게 된다면 종류별로 다시 구비해서 친한 분들 초대하구 여러 안주와 함께 상상만 해도 즐거운 칵테일 파티를 열어보고 싶어요 :) 아래는 제 인스타와 깃허브, 백준이에요! 사실 세 개 모두 처음 만든 것과 다름없지만... 깃허브와 백준은 꾸준히 해나갈 예정이라 함께 걸어가시지 않으실래요?",
    image: "",
  },
};

const panel = document.querySelector(".panel");
const panelTitle = document.querySelector(".panel .panel-title");
const panelSum = document.querySelector(".panel .panel-sum");
const panelDes = document.querySelector(".panel .panel-des");
const panelImg = document.querySelector(".panel .panel-img");

function updatePanel(planet) {
  let pos = planet.id;
  const data = planetData[pos];
  panelTitle.textContent = data.title;
  panelSum.textContent = data.summary;
  panelDes.textContent = data.description;
  panelImg.src = data.image;
}

function rotatePlanets(shift) {
  document.querySelectorAll(".planet").forEach((p) => {
    let currentIndex = stateOrder.findIndex((state) =>
      p.classList.contains(state)
    );
    if (currentIndex === -1) return;

    if (shift !== 2) {
      let newIndex = (currentIndex + shift + 4) % 4;
      p.classList.remove(...stateOrder);
      p.classList.add(stateOrder[newIndex]);
    } else {
      for (let i = 1; i <= 2; i++) {
        setTimeout(() => {
          let newIndex = (currentIndex + i + 4) % 4;
          p.classList.remove(...stateOrder);
          p.classList.add(stateOrder[newIndex]);
        }, i * 350);
      }
    }
  });
}

document.querySelectorAll(".planet").forEach((planet) => {
  planet.addEventListener("click", (e) => {
    document
      .querySelectorAll(".planet")
      .forEach((p) => p.classList.remove("active"));
    planet.classList.add("active");
    let shift = 0;
    if (planet.classList.contains("planet--top")) {
      shift = 2;
    } else if (planet.classList.contains("planet--right")) {
      shift = 1;
    } else if (planet.classList.contains("planet--left")) {
      shift = -1;
    }

    if (
      planet.classList.contains("planet--bottom") &&
      panel.classList.contains("show")
    ) {
      panel.classList.remove("show");
      return;
    }
    panel.classList.remove("show");
    let delayTime = shift === 2 ? 900 : shift !== 0 ? 400 : 100;
    setTimeout(() => {
      rotatePlanets(shift);
    }, 0);
    setTimeout(() => {
      updatePanel(planet);
      panel.classList.add("show");
    }, delayTime);
    e.stopPropagation();
  });
});

document.addEventListener("click", (e) => {
  if (!panel.contains(e.target)) {
    panel.classList.remove("show");
    document.querySelectorAll(".planet").forEach((p) => {
      p.classList.remove("active");
    });
  }
  e.stopPropagation();
});
