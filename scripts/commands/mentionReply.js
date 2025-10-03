const fs = require("fs");

module.exports.config = {
  name: "mentionReply",
  version: "1.0.0",
  permission: 0,
  credits: "Shakib",
  description: "Auto reply when a specific UID is mentioned with random messages",
  prefix: false,
  category: "auto",
};

module.exports.run = async function({ api, event }) {
  try {
    const threadID = event.threadID;
    const messageID = event.messageID;
    const mentions = event.mentions || {};

    // ✅ Target UID যাকে reply দিতে হবে
    const TARGET_UID = "61573118212019";

    // ✅ Random reply messages
    const replies = [
      "ওরে বেটা! রিদয় ভাই কে ডাকছো কেন? সাহস তো কম না তোর 😏",
      "ভাই একটু দম নিন... রিদয় ভাই এখন ব্যস্ত, দয়া করে বিরক্ত কইরো না 😤",
      "তুই কি জানিস না রিদয় ভাই এখন Netflix & Chill করছে 🍿📺",
      "সে তো এখন তার প্রেমিকার সাথেই ব্যস্ত 💑... তোকে কে সময় দিবে রে!",
      "ট্যাগ ট্যাগ করছো না, ওনি কি তোর বাপরে? 😎",
      "Stop pinging রিদয় ভাই! উনি এখন 'Do Not Disturb' মোডে 🚫📱",
      "রিদয় ভাই তো এখন বউয়ের কানের দুল কিনতেছে বাজারে 😆",
      "ভাই tag মারার আগে আয়না দেখে আসবি, tag পাওয়ার যোগ্য হইছস? 🤭",
      "এইটা tag করার সময় না... রিদয় ভাই এখন hot coffee নিয়া status লিখতেছে ☕💬",
      "রিদয় ভাই এখন “প্রেমের কবি” mood এ আছে 📜, tag দিলে কবিতা বানায় দিবে 😅",
      "ভাই tag না দিয়া প্রেম কর... ওনাকে disturb করলে relation break হইব 🙄",
      "Tag দিলে যে রিপ্লাই দিবে এমন বোকা না সে 😌",
      "সে এখন ব্যস্ত, পরে দেখা হইবো ইনশাআল্লাহ 😇",
      "ভাব নিয়ে হাটে... আর তুই ট্যাগ দিস... দুঃসাহস 😤",
      "সাবধান! রিদয় ভাই কে tag দিলে লাইফে শান্তি থাকবে না 😱",
      "উনি VIP মানুষ, তোর tag তার নোটিফিকেশনেই আসে না 🤣",
      "তুই কি জানিস, রিদয় ভাই এখন OnlyFans খুলছে 😳",
      "রিদয় ভাই তো এখন Crush এর স্ট্যাটাস পড়তেছে 🥲 disturb করবি না",
      "দোস্ত tag দিছোস ভালো কথা, দোয়া কর ওনিও তোরে tag না দেয় 😈",
      "নাম দেখে call করিস, tag না করিস 😒"
    ];

    // যদি target UID মেনশন করা হয়
    if (mentions[TARGET_UID]) {
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      return api.sendMessage(randomReply, threadID, messageID);
    }

  } catch (err) {
    console.error("❌ mentionReply error:", err);
  }
};
