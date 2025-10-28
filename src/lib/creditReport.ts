export interface ParsedCreditItem {
  accountName: string;
  balance: number;
  status: string;
  [key: string]: unknown;
}

export interface ParsedCreditReport {
  items: ParsedCreditItem[];
  raw?: unknown;
}

export async function parseCreditReport(
  file: File | Blob | ArrayBuffer | string
): Promise<ParsedCreditReport> {
  // TODO: implement actual parsing logic using PDF/text extraction.
  // This is a placeholder implementation returning an empty report.
  return {
    items: [],
    raw: null,
  };
}
