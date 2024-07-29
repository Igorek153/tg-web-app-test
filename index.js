const TelegramBot = require('node-telegram-bot-api');

const token = '7239054977:AAF58yEiEFIjviCF-Un8lQqbZB7enYCsacU';
const webUrl = 'https://www.youtube.com/'
const bot = new TelegramBot(token, {polling: true});


bot.on('message',async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  console.log('text', text)
  if (text === '/start') {
    await bot.sendMessage(chatId, 'Lets go', {
      reply_markup: {
        keyboard: [
          [{text: 'Start game', web_app: {url: webUrl}}]
        ]
      }
    })
  }

});