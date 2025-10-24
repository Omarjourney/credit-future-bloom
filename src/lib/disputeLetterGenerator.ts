// src/lib/disputeLetterGenerator.ts

export interface DisputeInfo {
  name: string;
  address: string;
  creditBureau: 'Equifax' | 'Experian' | 'TransUnion';
  accountNumber: string;
  reason: string;
  disputeDate?: Date;
}

/**
 * Generates a dispute letter based on user-provided information.
 * This letter follows general FCRA guidelines but should be reviewed by the user
 * for accuracy and completeness before sending.
 */
export function generateDisputeLetter(info: DisputeInfo): string {
  const dateStr = info.disputeDate ? info.disputeDate.toLocaleDateString() : new Date().toLocaleDateString();
  return `\n${dateStr}\n\n${info.creditBureau}  \nRe: Dispute of inaccurate information  \n\nTo Whom It May Concern,  \n\nMy name is ${info.name} and my address is ${info.address}. I am writing to dispute an item in my credit report. The account number is ${info.accountNumber}. The reason for my dispute is: ${info.reason}.  \n\nUnder the Fair Credit Reporting Act (FCRA), I am requesting that you investigate this matter and remove or correct the inaccurate information. Please provide written confirmation of your investigation and resolution.  \n\nSincerely,  \n\n${info.name}\n`;
}
