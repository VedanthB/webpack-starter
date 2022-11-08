import App from "./App";
import logo from "./logo.svg";

const root = document.getElementById("root");

root.innerHTML = `
<img src='${logo}' alt="React logo" />

<h1> learning web tooling today </h1>
${App({ name: "Vedanth" })}
`;
