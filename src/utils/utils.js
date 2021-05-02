// Euqation Unit 'Pyeong' of measurements to suqare metre
// 1㎡ = 0.3025 pyeong
export function converToPyeong(size) {
  return Math.floor(size * 0.3025);
}

export function getImgSrc(imageLists, name) {
  const { imgSrc } = [...imageLists].find(({ keyword }) => keyword === name);

  return imgSrc;
}
