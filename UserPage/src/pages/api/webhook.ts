import moyenne from "@/utils/functions";
import { NextApiRequest, NextApiResponse } from "next";

export default function TestWebHook(req: NextApiRequest, res: NextApiResponse) {
    var {userStats} = req.body;

    userStats.sort((a: any, b: any) => {
        return moyenne(b) - moyenne(a);
    });

    try {
      fetch(
        "https://discord.com/api/webhooks/1159388373849493585/C3DOF68m8Z3Kn4Vgiabecj8lqg-K_GW0kCGPRPiWrd80akAT--4Fx6gqque70e3tMd1J",
        {
          method: "POST",
          body: JSON.stringify({
            embeds: [
              {
                title: "Les stats du serveur sont arrivées ! ",
                url: "https://tofu.doctorpok.io/leaderboard",
                description: "Voici les stats du serveur !",
                fields: [
                  {
                      name: "🥇 " + userStats[0].name,
                      value: "`" + moyenne(userStats[0]) + "` points",
                      inline: false,
                      },
                      {
                      name: "🥈 " + userStats[1].name,
                      value: "`" + moyenne(userStats[1]) + "` points",
                      inline: false,
                      },
                      {
                      name: "🥉 " + userStats[2].name,
                      value: "`" + moyenne(userStats[2]) + "` points",
                      inline: false,
                  }
                ],
                thumbnail: {
                    url: "https://tofu.doctorpok.io/embed.png",
                },
                author: {
                  icon_url:
                    "https://tofu.doctorpok.io/favicon.ico",
                  name: "Battle-Aventure Bot",
                },
                color: 166604,
                timestamp: new Date(),
              },
            ],
            avatar_url:
              "https://tofu.doctorpok.io/favicon.ico",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        res.status(200).json({ message: "Webhook sent" });
    } catch (err) {
      res.status(500).json({ message: "Webhook failed", error: err });
    }
}
