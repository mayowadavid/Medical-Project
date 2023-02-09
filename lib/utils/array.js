const filterObjectInArrayByRegex = (arr, key, str) => {
  return arr.filter((e) =>
    new RegExp(str.replace(/\\/, /\\\\/), "i").test(e[key])
  );
};

const filterObjectInArrayByKey = (arr, key = "id") => {
  const uniqueKeys = [...new Set(arr.map((e) => e[key]))];

  return arr.filter(
    (e, idx) => uniqueKeys.findIndex((k) => k === e[key]) === idx
  );
};

export { filterObjectInArrayByRegex, filterObjectInArrayByKey };
