export default function(
  filePathOrBuffer: string,
  cbrEstimate?: boolean,
  callback?: (err: Error, duration: number) => void
): Promise<number>
