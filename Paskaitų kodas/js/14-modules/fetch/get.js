import { req } from "./util.js";

export function get(url) {
  return req(url, "GET", null);
}
