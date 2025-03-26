const stateOrder = [
  "planet--top",
  "planet--right",
  "planet--bottom",
  "planet--left",
];

const labelName = ["Goal", "Intro", "Playlist", "Hobby"];

const planetData = {
  Goal: {
    title: "Goal",
    summary: "멋사에서의 제 목표는요...",
    description: "풀스택(프론트엔드와 백엔드) 세션 완수하는 게 제 목표에요!",
    image: "",
  },
  Intro: {
    title: "Intro",
    summary: "제 소개를 하면요...",
    description: "안녕하세요! 13기 프론트엔드 아기사자 박재우입니다!",
    image: "",
  },
  Playlist: {
    title: "Playlist",
    summary: "제 노동요는요...",
    description: "서정적인 발라드와 팝송이에요!\n 배경음악이 숨어있을지도..?",
    image: "",
  },
  Hobby: {
    title: "Hobby",
    summary: "저에 대해서 더 궁금하신가요?",
    description:
      "저는 칵테일을 만들어서 마시는 걸 좋아하구요!\n 백준을 꾸준히 풀려고 노력 중이에요!",
    image: "",
  },
};
const subData = {
  Goal: {
    title: "Goal",
    description:
      "풀스택을 통해 웹 개발 전반에 대한 이해도를 높이는 게 우선 목표예요!\n그리고 멋사의 부원들과 함께 프로젝트는 물론 다양한 활동들을 통해 자연스럽게 친해지고, 별처럼 빛나는 분들과 가까워지고 싶어요.\n 또한 여러 해커톤과 아이디어톤에도 도전하여, 수상에 가까이 다가가 보는 경험을 해보고자 해요!!\n 궁극적으로는 이러한 세션을 모두 완수하고나서 정말 멋쟁이사자가 되어서, 다른 도움이 필요한 학우들이 있으면 언제든지 당당하게 도와드릴 수 있는 제가 있길 바라요 :)",
    image: "",
  },
  Intro: {
    title: "Intro",
    description:
      "다시 한 번 안녕하세요!\n구슬 아이스크림을 좋아하는 13기 아기사자 박재우입니다!\n이번 멋쟁이 사자처럼 13기 프론트엔드로 지원했어요!\n그나저나 제 MBTI는 분명 INF/TJ 인데 자꾸 다들 슈퍼 E라면서 오해를 하세요 ㅠㅠ\n완전 슈퍼슈퍼 I인데... 그래서 슈퍼 E이신 분들 너무 멋있고 부러워요!\n다가와주시면 격하게 반겨드릴 자신 있으니 언제든지 환영이에요!!",
    image: "",
  },
  Playlist: {
    title: "Playlist",
    description:
      '보시기 전에 오른쪽 버튼을 눌러주세요!!\n 저는 특히 서정적인 곡을 되게 좋아해요!\n 하나 하나의 작품에 그 아티스트만의 가치관과 감정선이 들어있는 것이 마치 실존하는 세계를 직접 감상할 수 있는 것만 같기 때문이에요.\n 그래서 그런지 한 곡에 정착하진 못하고 어떠한 분위기나 키워드를 가지고 있는 노래를 들은 뒤에 파생되는 여러 곡들을 이어들으며 시간을 보내고 있어요!\n 문제는 노래의 제목과 가수를 잘 모르고 공유할 플레이 리스트가 없다는 것...?\n 그래도 최근에는 "그랬나봐 - 토이" 에 빠져서 듣고 있어요!\n 배경음악은 저작권 문제가 있을지 몰라서 다른 음악으로 대체하지만 함께 들으시면서 제 자기소개 페이지를 구경해주시면 기쁠 것 같아요!',
    image: "",
  },
  Hobby: {
    title: "Hobby",
    description:
      "제 취미는 칵테일을 직접 만들어서 마시는 거에요!\n 레시피대로 만드는 것도 좋고 재료가 하나 둘 쌓이기 시작하면 직접 커스텀을 해서 마시기도 해요.\n 물론 지금은 기숙사에서 지내느라 잠시 쉬고 있지만... 추후에 자취를 하게 된다면 종류별로 다시 구비해서 친한 분들 초대하구 여러 안주와 함께 상상만 해도 즐거운 칵테일 파티를 열어보고 싶어요 :)\n 아래는 제 인스타와 깃허브, 백준이에요!\n 사실 세 개 모두 처음 만든 것과 다름없지만... 깃허브와 백준은 꾸준히 해나갈 예정이라 함께 걸어가요 우리!",
    image: "",
  },
};
const panel = document.querySelector(".panel");
const panelTitle = document.querySelector(".panel .panel-title");
const panelSum = document.querySelector(".panel .panel-sum");
const panelDes = document.querySelector(".panel .panel-des");
const panelImg = document.querySelector(".panel .panel-img");
const musicBtn = document.getElementById("music-btn");
const bgm = document.getElementById("bg-music");
const subPanelTitle = document.querySelector(".panel .sub-panel-title");
const subPanelDes = document.querySelector(".panel .sub-panel-des");
const subPanelLinks = document.querySelector(".panel .panel-links");

function updatePanel(planet) {
  let pos = planet.id;
  const data = planetData[pos];
  panelTitle.textContent = data.title;
  panelSum.textContent = data.summary;
  panelDes.textContent = data.description;
  panelImg.src = data.image;
  const sData = subData[pos];
  subPanelTitle.textContent = sData.title;
  subPanelDes.textContent = sData.description;
  if (pos === "Hobby") {
    subPanelLinks.classList.add("show");
  } else {
    subPanelLinks.classList.remove("show");
  }
}

function updateLabel(idx) {
  const label = document.querySelector(".label");
  label.classList.add("fade-out");

  setTimeout(() => {
    leftIdx = (idx + 1) % 4;
    rightIdx = (idx - 1 + 4) % 4;
    const leftLabel = document.querySelector(".label--left");
    const rightLabel = document.querySelector(".label--right");
    leftLabel.textContent = labelName[leftIdx];
    rightLabel.textContent = labelName[rightIdx];
    label.classList.remove("fade-out");
  }, 500);
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

function moveUp() {
  const elements = document.querySelectorAll(
    ".planet:not(.planet--bottom), .label, .panel"
  );
  elements.forEach((el) => {
    el.classList.add("move-up");
  });
  const planet = document.querySelector(".planet--bottom");
  planet.classList.add("move-main");
  planet.classList.add("active");
  document.body.classList.add("active");
}

function moveDown() {
  const elements = document.querySelectorAll(
    ".planet:not(.planet--bottom), .label, .panel"
  );
  elements.forEach((el) => {
    el.classList.remove("move-up");
  });
  const planet = document.querySelector(".planet--bottom");
  planet.classList.remove("move-main");
  planet.classList.remove("active");
  document.body.classList.remove("active");
}

document.querySelector(".intro-btn").addEventListener("click", function (e) {
  moveUp();
});

document.querySelector(".label--left").addEventListener("click", (e) => {
  rotatePlanets(-1);
  const planet = document.querySelector(".planet--bottom");
  let labelIdx = labelName.findIndex((label) => label === planet.id);
  updatePanel(planet);
  updateLabel(labelIdx);
});
document.querySelector(".label--right").addEventListener("click", (e) => {
  rotatePlanets(1);
  const planet = document.querySelector(".planet--bottom");
  let labelIdx = labelName.findIndex((label) => label === planet.id);
  updatePanel(planet);
  updateLabel(labelIdx);
});
document.addEventListener("DOMContentLoaded", () => {
  updatePanel({ id: "Playlist" });
  setTimeout(() => {
    panel.classList.remove("intro");
  }, 1000);
});

document.querySelectorAll(".planet").forEach((planet) => {
  planet.addEventListener("click", (e) => {
    if (planet.id === "Playlist" && planet.querySelector(".ring-container")) {
      planet.querySelector(".ring-container").style.display = "none";
      e.stopPropagation();
    }

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

    let labelIdx = labelName.findIndex((label) => label === planet.id);
    updateLabel(labelIdx);
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
document.addEventListener("keydown", (e) => {
  if (
    !document.querySelector(".overlay").classList.contains("none") &&
    (e.key === "ArrowLeft" || e.key === "ArrowRight")
  ) {
    document.querySelector(".overlay").classList.add("none");
    return;
  }
  if (document.body.classList.contains("active")) {
    return;
  }

  if (e.key === "ArrowLeft") {
    rotatePlanets(1);
    const planet = document.querySelector(".planet--bottom");
    let labelIdx = labelName.findIndex((label) => label === planet.id);
    updatePanel(planet);
    updateLabel(labelIdx);
  } else if (e.key === "ArrowRight") {
    rotatePlanets(-1);
    const planet = document.querySelector(".planet--bottom");
    let labelIdx = labelName.findIndex((label) => label === planet.id);
    updatePanel(planet);
    updateLabel(labelIdx);
  }
});
document.addEventListener("click", (e) => {
  document.querySelector(".overlay").classList.add("none");
  if (e.target.closest(".panel-links")) {
    return;
  }
  if (!panel.contains(e.target)) {
    panel.classList.remove("show");
    moveDown();
  }
  e.stopPropagation();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    moveDown();
  }
  e.stopPropagation();
});
musicBtn.addEventListener("click", (e) => {
  musicBtn.classList.remove("intro");
  musicBtn.classList.toggle("play-btn");
  musicBtn.classList.toggle("pause-btn");
  musicBtn.classList.add("on");
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }

  musicBtn.addEventListener(
    "animationend",
    () => {
      if (!musicBtn.classList.contains("intro"))
        musicBtn.classList.remove("on");
    },
    { once: true }
  );
  e.stopPropagation();
});
