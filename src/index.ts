import { checkIntersect } from "./utils";

const card = document.querySelector(".box") as HTMLDivElement;

const clientRect = card.getClientRects()[0];

const leftTopPoint = {
  x: clientRect.left,
  y: clientRect.top,
};
const rightTopPoint = {
  x: clientRect.right,
  y: clientRect.top,
};
const leftBottomPoint = {
  x: clientRect.left,
  y: clientRect.bottom,
};
const rightBottomPoint = {
  x: clientRect.right,
  y: clientRect.bottom,
};

const directions = [
  { startPoint: leftTopPoint, endPoint: rightTopPoint, text: "上" },
  { startPoint: leftBottomPoint, endPoint: rightBottomPoint, text: "下" },
  { startPoint: leftTopPoint, endPoint: leftBottomPoint, text: "左" },
  { startPoint: rightTopPoint, endPoint: rightBottomPoint, text: "右" },
];

let outPoint = { x: 0, y: 0 };
document.addEventListener("mousemove", (e) => {
  outPoint = {
    x: e.clientX,
    y: e.clientY,
  };
});

card.addEventListener("mouseenter", (e) => {
  const innerPoint = {
    x: e.clientX,
    y: e.clientY,
  };
  directions.some(({ startPoint, endPoint, text }) => {
    if (checkIntersect(innerPoint, outPoint, startPoint, endPoint)) {
      card.innerText = text;
      return true;
    }
    return false;
  });
  e.stopPropagation();
});

card.addEventListener("mouseleave", () => {
  card.innerText = "";
});
