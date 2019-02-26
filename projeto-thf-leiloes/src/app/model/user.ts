import { NoteSummary } from './noteSumary';

export interface User {

  id?: string;
  email: string;
  password: string;
  access_token: string;
  refresh_token: string;
  isSuperUser: boolean;
  /**
   * Notes list of user.
   */
  notes?: Array<NoteSummary>;
}
