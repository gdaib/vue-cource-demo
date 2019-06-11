import Mock from "mockjs";

function doCustomTimes(times, cb) {
  let i = 0;
  while (i < times) {
    cb();
  }
}

export const getTableData = () => {
  const template = {
    name: "@name",
    "age|18-25": 0,
    email: "@email"
  };
  let arr = [];
  doCustomTimes(5, () => {
    arr.push(Mock.mock(template));
  });
  return arr;
};
