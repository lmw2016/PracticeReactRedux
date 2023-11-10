import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:58134/performance";

export function getPerformances() {
  return fetch(url).then(handleResponse).catch(handleError);
}
