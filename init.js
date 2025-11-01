const mongoose = require('mongoose');
const chat = require("./models/schema");
main().then((res)=>{
    console.log("The connection b/w server and js is Successfull");

}).catch((err)=>{
    console.log("the err which is occuring is " ,err.errors);

});

async function main()
{
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const chats = [
  {
    from: "Hiroshi Tanaka",
    to: "Yuki Sato",
    msg: "Ohayou gozaimasu, kyou mo ganbarimashou! (Good morning, let's do our best today!)",
    CreatedAt: new Date()
  },
  {
    from: "Yuki Sato",
    to: "Hiroshi Tanaka",
    msg: "Hai! Kaigi no junbi wa dekiteimasu. (Yes! The meeting preparations are done.)",
    CreatedAt: new Date()
  },
  {
    from: "Aiko Nakamura",
    to: "Ryo Suzuki",
    msg: "Kinou no eiga, totemo omoshirokatta desu ne. (Yesterday's movie was really interesting, wasn't it?)",
    CreatedAt: new Date()
  },
  {
    from: "Ryo Suzuki",
    to: "Aiko Nakamura",
    msg: "Hontou ni! Mata issho ni mi ni ikimashou. (Really! Let's go watch another one together.)",
    CreatedAt: new Date()
  },
  {
    from: "Kenji Yamamoto",
    to: "Mika Kobayashi",
    msg: "Kouhii demo dou desu ka? Gogo no kyuukei ni. (How about some coffee during the afternoon break?)",
    CreatedAt: new Date()
  },
  {
    from: "Mika Kobayashi",
    to: "Kenji Yamamoto",
    msg: "Ii desu ne! Sanji goro ni ikimashou. (Sounds good! Let's go around 3 o’clock.)",
    CreatedAt: new Date()
  },
  {
    from: "Naoki Fujita",
    to: "Haruka Arai",
    msg: "Atarashii purojekuto no shiryou wo okurimashita. Kakunin shite kudasai. (I’ve sent the new project documents. Please check them.)",
    CreatedAt: new Date()
  },
  {
    from: "Haruka Arai",
    to: "Naoki Fujita",
    msg: "Arigatou gozaimasu! Ima sugu kakunin shimasu. (Thank you! I’ll check right away.)",
    CreatedAt: new Date()
  },
  {
    from: "Takeshi Mori",
    to: "Sakura Endo",
    msg: "Kondo no shuumatsu, Fujisan ni ikimasen ka? (Shall we go to Mount Fuji this weekend?)",
    CreatedAt: new Date()
  },
  {
    from: "Sakura Endo",
    to: "Takeshi Mori",
    msg: "Ikitai desu! Tenki ga yoi to ii desu ne. (I’d love to! Hope the weather is good.)",
    CreatedAt: new Date()
  },
  {
    from: "Yuto Hayashi",
    to: "Hina Matsuda",
    msg: "Shukudai mou owarimashita ka? (Did you finish your homework?)",
    CreatedAt: new Date()
  },
  {
    from: "Hina Matsuda",
    to: "Yuto Hayashi",
    msg: "Mada desu kedo, mou sukoshi de owarimasu. (Not yet, but I’m almost done.)",
    CreatedAt: new Date()
  },
  {
    from: "Daichi Kato",
    to: "Emi Nishimura",
    msg: "Kinou no happyou, sugoku yokatta desu yo! (Your presentation yesterday was really great!)",
    CreatedAt: new Date()
  },
  {
    from: "Emi Nishimura",
    to: "Daichi Kato",
    msg: "Arigatou! Kinchou shita kedo, ureshii desu. (Thanks! I was nervous, but I’m happy to hear that.)",
    CreatedAt: new Date()
  },
  {
    from: "Ren Ishida",
    to: "Aya Takahashi",
    msg: "Ashita wa nanji ni aimashou ka? (What time shall we meet tomorrow?)",
    CreatedAt: new Date()
  },
  {
    from: "Aya Takahashi",
    to: "Ren Ishida",
    msg: "Gogo ni ji goro wa dou desu ka? (How about around 2 p.m.?)",
    CreatedAt: new Date()
  },
  {
    from: "Souta Kimura",
    to: "Nana Inoue",
    msg: "Kesa wa samukatta ne. (It was cold this morning, huh?)",
    CreatedAt: new Date()
  },
  {
    from: "Nana Inoue",
    to: "Souta Kimura",
    msg: "Sou da ne! Fuyu ga kiteimasu. (Yeah, winter is coming.)",
    CreatedAt: new Date()
  },
  {
    from: "Kenta Watanabe",
    to: "Reina Okada",
    msg: "Mainichi benkyou taihen da ne. (Studying every day must be tough, huh?)",
    CreatedAt: new Date()
  },
  {
    from: "Reina Okada",
    to: "Kenta Watanabe",
    msg: "Sou demo nai yo, tanoshii toki mo aru. (Not really, there are fun times too.)",
    CreatedAt: new Date()
  }
];

chat.insertMany(chats)
