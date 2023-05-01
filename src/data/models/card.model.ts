import { TimeModel } from "@/data";

export interface CardModel {
    date: Date;
    time: Omit<TimeModel, "isRunning">;
}
