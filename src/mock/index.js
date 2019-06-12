import Mock from "mockjs";
// import { getUserInfo, login, authorization } from "./response/user";
import { getTableData } from "./response/data";
const Random = Mock.Random;

// Mock.mock(/\/getUserInfo/, "post", getUserInfo);
// Mock.mock(/\/login/, "post", login);
// Mock.mock(/\/authorization/, "get", authorization);
Mock.mock(/\/getTableData/, "get", getTableData);


export default Mock;
