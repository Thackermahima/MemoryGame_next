const { Telegraf } = require("telegraf");
const TOKEN = process.env.TELEGRAM_BOT_API;
const bot = new Telegraf(TOKEN);

const web_link = "https://memory-game-next-one.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to the Memory Game Bot!", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();