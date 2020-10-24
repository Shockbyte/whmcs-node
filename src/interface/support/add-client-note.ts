export interface AddClientNoteRequest {
  userid: number;
  notes: string;
  sticky?: boolean;
}

export interface AddClientNoteResponse {
  result: string;
  noteid: number;
}
