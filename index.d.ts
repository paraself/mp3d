export default function(
  filePathOrBuffer: string | Buffer,
  cbrEstimate?: boolean,
  callback?: (err: Error, duration: number) => void
): Promise<number>
