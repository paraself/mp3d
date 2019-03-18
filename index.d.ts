export default function(
  filePathOrBuffer: string,
  cbrEstimate?: boolean = false,
  callback?: (err: Error, duration: number) => void
): Promise<number>
