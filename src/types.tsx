interface RecordType {
  title: string;
  date: string;
  contents: string;
  tags: string[];
}

interface DiaryType {
  [key: number]: RecordType;
}

export type { RecordType, DiaryType };
