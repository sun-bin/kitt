Deno.serve(async (req) => {
  // 读取配置文件
  const configText = await Deno.readTextFile('./kitt.config.json');
  const kittProfile = JSON.parse(configText);

  // 读取HTML模板文件
  let html = await Deno.readTextFile('./index.html');

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