import MODEL from "./model";

function getMostOccuringElem(array) {
  if (array.length === 0) return null;
  var modeMap = {};
  var maxEl = array[0],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

export const getPrediction = (dataSet) => {
  const results = Object.entries(dataSet).map(
    ([key, value]) => MODEL[key][value]
  );

  return getMostOccuringElem(results);
};

export const getFormIsInvalid = (values) => {
  return Object.values(values).some((value) => !value);
};
