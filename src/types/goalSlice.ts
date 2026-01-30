export interface Goal {
    id: string;
    text: string;
    status: boolean;
}

export interface goalSliceProps {
    goals: Goal[];
}