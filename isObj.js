export function isObj(value) {
    return typeof value === "object" && value != null && !Array.isArray(value);
  }