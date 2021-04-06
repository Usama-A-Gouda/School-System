import { Student } from './student.model';
export interface ApiResponse {
  data: Student[];
  page: number;
  per_page: number;
  support: { url: string, test: string };
  total: number;
  total_pages: number;
}
