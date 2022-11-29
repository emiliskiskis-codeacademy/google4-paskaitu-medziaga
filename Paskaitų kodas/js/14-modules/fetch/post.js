import { req } from "./util.js";

export function post(url, body) {
  return req(url, "POST", JSON.stringify(body));
}
