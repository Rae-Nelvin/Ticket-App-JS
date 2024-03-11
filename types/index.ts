import { ObjectId } from "mongodb";

export interface TicketProps {
  _id: ObjectId;
  title: string;
  description: string;
  priority: number;
  progress: number;
  status: string;
  category: string;
  createdAt: string;
}
