import Mock from "mockjs";
import { getUserInfo, login, authorization } from "./response/user";
import { getTableData } from "./response/data";
const Random = Mock.Random;

Mock.mock(/\/getUserInfo/, "post", getUserInfo);
Mock.mock(/\/login/, "post", login);
Mock.mock(/\/authorization/, "get", authorization);
Mock.mock(/\/getTableData/, "get", getTableData);

Mock.setup({
  timeout: 0
});

Random.extend({
  fruit() {
    const fruit = ["apple", "peach", "lemon"];
    return this.pick(fruit);
  }
});

export default Mock;
