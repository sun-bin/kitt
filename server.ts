Deno.serve(async (req) => {
  const url = new URL(req.url);
  const path = url.pathname;

  // 处理CSS文件请求
  if (path === '/style.css') {
    const cssContent = await Deno.readTextFile('./frontend/style.css');
    return new Response(cssContent, {
      headers: { "content-type": "text/css; charset=UTF-8" },
    });
  }

  // 读取配置文件
  const configText = await Deno.readTextFile('./kitt.config.json');
  const kittProfile = JSON.parse(configText);

  // 读取HTML模板文件
  let html = await Deno.readTextFile('./frontend/index.html');

  // 替换模板占位符
  html = html
    .replace('{{name}}', kittProfile.name)
    .replace('{{vehicle}}', kittProfile.vehicle)
    .replace('{{capabilities}}', kittProfile.capabilities.map(cap => `<li>${cap}</li>`).join(''))
    .replace('{{motto}}', kittProfile.motto);

  return new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8" },
  });
});