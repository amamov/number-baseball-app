// 해당 object의 value 값의 count가 맞으면 true, 틀리면 false를 반환하는 함수

const checkCountValue = (obj, value, count) =>
  Object.values(obj).filter((element) => element === value).length === count;

export default checkCountValue;
