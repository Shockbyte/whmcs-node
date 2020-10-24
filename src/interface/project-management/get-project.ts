export interface GetProjectRequest {
  projectid: number;
}

export interface GetProjectResponse {
  result: string;
  projectinfo: ProjectInfo[];
  tasks: Task[];
  messages: Message[];
}

export interface ProjectInfo {
  id: number;
  userid: number;
  title: string;
  attachments: string;
  ticketids: string;
  invoiceids: string;
  notes: string;
  adminid: number;
  status: string;
  created: string;
  duedate: string;
  completed: number;
  lastmodified: string;
}

export interface Task {
  id: number;
  projectid: number;
  task: string;
  notes: string;
  adminid: number;
  created: string;
  duedate: string;
  completed: number;
  billed: number;
  order: number;
  timelogs: TimeLog[];
}

export interface TimeLog {
  id: number;
  projectid: number;
  taskid: number;
  adminid: number;
  start: number;
  end: number;
  donotbill: number;
  starttime: string;
  endtime: string;
}

export interface Message {
  id: number;
  projectid: number;
  date: string;
  message: string;
  attachments: string;
  adminid: number;
}
