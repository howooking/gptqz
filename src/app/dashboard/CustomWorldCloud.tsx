"use client";

import WordCloud from "react-d3-cloud";

export default function CustomWorldCloud({
  data,
}: {
  data: {
    text: string;
    value: number;
  }[];
}) {
  const fontSizeMapper = (word: { text: string; value: number }) => {
    return Math.log2(word.value) * 5 + 10;
  };
  return (
    <div className="select-none scale-125">
      <WordCloud
        data={data}
        height={550}
        font="Times"
        fontStyle="italic"
        fontWeight="bold"
        spiral="rectangular"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        onWordClick={(event, word) => {}}
        onWordMouseOver={(event, word) => {}}
        onWordMouseOut={(event, word) => {}}
      />
    </div>
  );
}
