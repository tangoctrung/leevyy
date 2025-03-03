import { DAYS } from "@/types";

export function returnTypeDays(day: number, month: number): DAYS {
  if (day === 1 && month === 1) {
    return "1/1";
  }
  if (day === 14 && month === 2) {
    return "14/2";
  }
  if (day === 8 && month === 3) {
    return "8/3";
  }
  if (day === 14 && month === 3) {
    return "14/3";
  }
  if (day === 20 && month === 10) {
    return "20/10";
  }
  if (day === 25 && month === 10) {
    return "25/10";
  }
  return "";
}
