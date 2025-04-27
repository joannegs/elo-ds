export const checkIfCustomColor = (color: any): boolean =>
  /^#[0-9A-Fa-f]{6}$|^#[0-9A-Fa-f]{3}$|^rgb|^hsl|^var\(--/.test(color);