export function isObj(value) {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

export function isNumber(value){
  return typeof value === "number";
}

export function getValueType(value) {
  return value != null ? typeof value : "null";
}

export function numberToShortHex(number) {
  const hex = number.toString(16);
    return hex.length > 1 ? hex[0] : hex;
}

export function numberToHex(number) {
  const hex = number.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
