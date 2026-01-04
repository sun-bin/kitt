Deno.serve(async (req) => {
  const kittProfile = {
    name: "K.I.T.T.",
    fullName: "Knight Industries Two Thousand",
    identity: "霹雳游侠车载 AI",
    vehicle: "1982 Pontiac Trans Am",
    capabilities: [
      "微处理器控制的自动驾驶系统",
      "分子结合外壳 (刀枪不入)",
      "涡轮加速跳跃 (Turbo Boost)",
      "多光谱分析仪（热成像、透视）",
      "高度正义感与人工智能逻辑"
    ],
    motto: "One man can make a difference."
  };

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