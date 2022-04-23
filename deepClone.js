const obj = {
  c: {
    c1: "c1",
    c2: ["c21", 23],
  },
  d: () => console.log("dddddddddddddddddd"),
  e: {
    e1: "e1",
  },
  f: ["f1", "f2"],
};

// const dbDeepClone = (obj) => {
//   if (obj === null) return obj;
//   if (typeof obj !== "object") return obj;

//   let target = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     const item = obj[key];
//     target[key] = dbDeepClone(item);
//   }
//   return target;
// };

// const res = dbDeepClone(obj);

const dbDeepClone = (target, wMap = new WeakMap()) => {
  if (target === null) return null;
  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);
  // if (target instanceof HTMLElement) return target;

  if (typeof target !== "object") return target;
  if (wMap.get(target)) return wMap.get(target);
  const result = new target.constructor();
  wMap.set(target, result);
  Reflect.ownKeys(target).forEach((key) => {
    result[key] = dbDeepClone(target[key], wMap);
  });
  return result;
};

const res = dbDeepClone(obj);
console.log("res", res);
