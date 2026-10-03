import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve(process.argv[2] || ".");
const types = {
  ".js": "text/javascript; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".txt": "text/plain",
  ".xml": "application/xml",
};
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let path = resolve(root, `.${pathname}`);
    if (!path.startsWith(root + sep) && path !== root) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
    response.writeHead(200, {
      "Content-Type": types[extname(path)] || "application/octet-stream",
    });
    response.end(await readFile(path));
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
  }
}).listen(5180, "127.0.0.1", () =>
  console.log("Local: http://127.0.0.1:5180/"),
);
