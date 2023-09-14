import React from "react";

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Time", "Session and Topic"];

const TABLE_ROWS = [
  {
    time: "7:00 am - 8:00 am",
    sessionAndTopic: "Breakfast and Registration",
  },
  {
    time: "8:00 am - 8:15 am",
    sessionAndTopic: "Welcoming remarks – KeNIC CEO:",
  },
  {
    time: "8.20 am – 9:00 am",
    sessionAndTopic: "Presentation: DNS and Web 3.0",
  },
  {
    time: "9:00 am – 10:00 am",
    sessionAndTopic: "Panel discussion 1 – Data protection.",
  },
  {
    time: "10:30 am – 10:55 am",
    sessionAndTopic: "Tea Break and Networking Sponsor adverts and marketing opportunity",
  },
  {
    time: "11:00 am – 12:45 pm",
    sessionAndTopic:
      "Panel discussion 2 – Strengthening collaboration among stakeholders in the domain name ecosystem in Africa",
  },
  {
    time: "12:45 pm – 2:00 pm",
    sessionAndTopic: "Lunch break and Tour of Exhibition Booth",
  },
  {
    time: "2.00 pm – 3.00 pm",
    sessionAndTopic: "Panel discussion 3:– Children’s right",
  },
  {
    time: "3:10 pm- 4:15 pm",
    sessionAndTopic: "Copyrights/Trademarks",
  },
  {
    time: "4:15 pm– 4:30 pm",
    sessionAndTopic: "Closing Session from the Partners ",
  },
  {
    time: "",
    sessionAndTopic: "1. KICTANet",
  },
  {
    time: "",
    sessionAndTopic: "2. AFTLD",
  },
  {
    time: "",
    sessionAndTopic:
      "3. The Internet Society",
  },
  {
    time: "",
    sessionAndTopic:
      "4. Konza Technopolis",
  },
  {
    time: "",
    sessionAndTopic:
      "5. KeNIC CEO – thank you to our sponsors",
  },
  {
    time: "4:30pm – 5:30pm",
    sessionAndTopic: "Coffee break Booth Visit & Networking",
  },
  {
    time: "6:00pm – 7.30pm",
    sessionAndTopic: "Cocktail",
  },
  {
    time: "7:30 pm - 9:00 pm",
    sessionAndTopic: "Gala Dinner",
  },
];

const DayTwoSchedule = () => {
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

export default DayTwoSchedule;
