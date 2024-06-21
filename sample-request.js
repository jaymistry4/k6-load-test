
// This will export to HTML as filename "load-test-result.html" AND also stdout using the text summary
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import http from "k6/http";

export const options = {
  iterations: 1,
};

export default function () {
  const response = http.get("https://test-api.k6.io/public/crocodiles/");
}

export function handleSummary(data) {
  return {
    "load-test-result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}

