export type Period = "AM" | "PM"

export type TimeValue = {
    hour: number;
    minute: number;
    period: Period;
};