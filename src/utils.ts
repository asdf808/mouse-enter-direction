type Point = {
  x: number;
  y: number;
};

export function checkIntersect(p1: Point, p2: Point, p3: Point, p4: Point) {
  if (
    !(
      Math.min(p1.x, p2.x) <= Math.max(p3.x, p4.x) &&
      Math.min(p3.y, p4.y) <= Math.max(p1.y, p2.y) &&
      Math.min(p3.x, p4.x) <= Math.max(p1.x, p2.x) &&
      Math.min(p1.y, p2.y) <= Math.max(p3.y, p4.y)
    )
  )
    return false;

  const u = (p3.x - p1.x) * (p2.y - p1.y) - (p2.x - p1.x) * (p3.y - p1.y);
  const v = (p4.x - p1.x) * (p2.y - p1.y) - (p2.x - p1.x) * (p4.y - p1.y);
  const w = (p1.x - p3.x) * (p4.y - p3.y) - (p4.x - p3.x) * (p1.y - p3.y);
  const z = (p2.x - p3.x) * (p4.y - p3.y) - (p4.x - p3.x) * (p2.y - p3.y);
  return u * v <= 0.00000001 && w * z <= 0.00000001;
}
