export function logInfo(message) {
  const dataTime = new Date();
  console.log(`[INFO][${dataTime.toLocaleString()}]:${message}`);
}
export function logError(message) {
  const dataTime = new Date();
  console.log(`[ERROR][${dataTime.toLocaleString()}]:${message}`);
}
