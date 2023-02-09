import qs from "qs";

import { convertSpacingToHyphen } from "../utils/string";

const convertStringToPathName = (str) => {
  return convertSpacingToHyphen(str.toLowerCase());
};

const parseQueryStringToObj = (query = "") => {
  return qs.parse(query, { ignoreQueryPrefix: true });
};

const stringifyQueryObj = (queryObj = {}) => {
  return qs.stringify(queryObj, { indices: false }); // indices = false -> remove %5B0%5D in url
};

export { convertStringToPathName, parseQueryStringToObj, stringifyQueryObj };
