import express from "express";
import Discord, { Message, IntentsBitField } from "discord.js";

const app = express();

const client = new Discord.Client({
  intents: [
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.MessageContent,
  ],
});
app.get("/", (req, res) => {
  res.send("HelloWorld");
});

client.on("ready", () => {
  console.log("aaaaaaa");
});

client.on("messageCreate", (message) => {
  if (message.content === "aaa") {
    message.reply('Hi')
  }
});

client.login(
  "MTA2NDk1NTEwNTAwNDIyNDUzMg.G1Ohtn.fUC8karQ7M5KKwBdbZVyZv686d8atsMrOCXDr4"
);
