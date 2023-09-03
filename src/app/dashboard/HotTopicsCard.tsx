import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomWorldCloud from "./CustomWorldCloud";
// import WordCloud from "../WordCloud";
// import prisma from "@/lib/db";

const data = [
  { text: "Hey", value: 1000 },
  { text: "lol", value: 200 },
  { text: "first impression", value: 800 },
  { text: "very cool", value: 1000000 },
  { text: "duck", value: 1000 },
];

export default async function HotTopicsCard() {
  // const topics = await prisma.topic_count.findMany({});
  // const formattedTopics = topics.map((topic) => {
  //   return {
  //     text: topic.topic,
  //     value: topic.count,
  //   };
  // });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <CustomWorldCloud data={data} />
      </CardContent>
    </Card>
  );
}
