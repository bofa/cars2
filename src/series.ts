import { DateTime } from "luxon";

export function smooth(list: { x: DateTime, y: number }[], size: number) {
  // TODO Control if it's correct
  const output = list
    .map((v1, i1, a1) => {
      const y = a1
        .slice(i1-size+1, i1+1)
        // .filter((v2, i2) => i2 <= i1 && v1.x.diff(v2.x.plus({ days: 3 }), 'months').months <= size - 1)
        .map(({ y }, i, a) => y)

      return {
        x: v1.x,
        y: y.reduce((acc, v) => acc + v, 0)
      }
    })
    .slice(size - 1);

  return output;
}

