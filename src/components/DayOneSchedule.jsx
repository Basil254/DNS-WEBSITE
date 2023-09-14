import React from "react";

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Time", "Session and Topic"];

const TABLE_ROWS = [
  {
    time: "7:00 am - 8:00 am",
    sessionAndTopic: "Breakfast and Registration",
  },
  {
    time: "8:00 am - 8:10 am",
    sessionAndTopic: "Welcoming remarks – KeNIC CEO:",
  },
  {
    time: "8.10 am – 8.25 am",
    sessionAndTopic: "Welcoming remarks – KeNIC Chairman:",
  },
  {
    time: "8.25 am – 8.40 am",
    sessionAndTopic:
      "Keynote speech – International delegate:About Cybersecurity",
  },
  {
    time: "8.45 am – 9.00 am",
    sessionAndTopic:
      "Keynote speech – The power of domain names",
  },
  {
    time: "9:00 am - 9:25 am",
    sessionAndTopic: "	Tour of selected Exhibition Booths by the chief guests",
  },
  {
    time: "9:00 am - 9:25 am",
    sessionAndTopic: "Commercials/Music/Recognition of sponsors on tv screens",
  },
  {
    time: "9:00 am - 9:25 am",
    sessionAndTopic: "Presentation – DNS debunking/ essentials and DNSSEC",
  },
  {
    time: "10.15 am- 10.20 am",
    sessionAndTopic:
      "Briefing on the upcoming SLD Auction- available names/ kick off dates/ value/ closure",
  },
  {
    time: "10.00 am – 11.00 am",
    sessionAndTopic:
      "Panel discussion 1 – Influencing Governmental Policy on Internet Penetration in East & Rest of Africa",
  },
  {
    time: "11.00 am -11.30 am",
    sessionAndTopic:
      "Tea Break and Networking Sponsor adverts and marketing opportunity",
  },
  {
    time: "11.30 am – 12.45 pm",
    sessionAndTopic:
      "Panel discussion 2 – Evaluating the risks and opportunities facing the Domain Name Ecosystem",
  },
  {
    time: "12.45 pm – 2.00 pm",
    sessionAndTopic: "Lunch break and Tour of Exhibition Booth",
  },
  {
    time: "2.00 pm – 2.20 pm",
    sessionAndTopic:
      "Konza Presentation- Positioning Kenya and the region for growth.",
  },
  {
    time: "2.25 pm-3.10 pm",
    sessionAndTopic: "Sponsor Session/ Presentations",
  },
  {
    time: "3.10 pm – 3.20 pm",
    sessionAndTopic: "Sponsor Adverts and Marketing opportunity",
  },
  {
    time: "3.20 pm - 4.20 pm",
    sessionAndTopic: "Panel Discussion 3 – Monetizing your online presence.",
  },
  {
    time: "4.30 pm – 4.40 pm",
    sessionAndTopic: "Closing remarks – KeNIC CEO",
  },
  {
    time: "4.45 pm – 6.30 pm",
    sessionAndTopic:
      "Coffee Break and Networking. Sponsor Adverts and Marketing opportunity in the background.",
  },
];

const DayOneSchedule = () => {
  return (
    <div className="lg:mx-[140px]">
      <Card className="h-full w-full overflow-scroll lg:overflow-visible">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="leading-none opacity-70 flex justify-center uppercase font-bold"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ time, sessionAndTopic }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-1"
                : "p-1 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal pl-5"
                    >
                      {time}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal pl-3"
                    >
                      {sessionAndTopic}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default DayOneSchedule;

