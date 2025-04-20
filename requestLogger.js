import fs from 'fs';
import path from 'path';

const logFilePath = path.resolve('requests.json');

export function logRequest(ip, endpoint) {
  const logEntry = {
    ip,
    endpoint,
    timestamp: new Date().toISOString()
  };

  let logs = [];
  if (fs.existsSync(logFilePath)) {
    const data = fs.readFileSync(logFilePath);
    logs = JSON.parse(data);
  }

  logs.push(logEntry);

  fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));
}
