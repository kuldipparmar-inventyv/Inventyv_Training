
export interface ICommandOutput {
    input: string;
    responseLines: string[];
    success: boolean;
    explanation: string;
    timestamp: Date;
  }