import React from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import DayOneSchedule from "./DayOneSchedule";
import DayTwoSchedule from "./DayTwoSchedule";

const Schedule = () => {
  const data = [
    {
      label: "Day One – 1st November 2023",
      value: "dayone",
      desc: <DayOneSchedule />,
    },
    {
      label: "Day Two – 2nd November 2023",
      value: "daytwo",
      desc: <DayTwoSchedule />,
    },
  ];

  return (
    <div className="py-7 bg-[#66b65b0c]">
      <h1 className="text-2xl lg:text-4xl text-[#010101] font-bold mb-4 text-center mx-2">
      Kenya DNS Conference Agenda
      </h1>
      <Tabs id="custom-animation" value="dayone">
        <div className="flex justify-center mx-2">
          <TabsHeader className="!bg-secondary">
            {data.map(({ label, value }) => (
              <div className="flex" key={value}>
                <Tab value={value} defaultChecked={DayOneSchedule}>
                  <span className="font-mont font-semibold">{label}</span>
                </Tab>
              </div>
            ))}
          </TabsHeader>
        </div>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Schedule;
