import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for output
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const CYAN = '\x1b[36m';
const PURPLE = '\x1b[35m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';

function log(prefix, color, message) {
  const lines = message.toString().split('\n');
  lines.forEach(line => {
    if (line.trim()) {
      console.log(`${color}${BOLD}[${prefix}]${RESET} ${line}`);
    }
  });
}

console.log(`${GREEN}${BOLD}Initializing LearnVerse platform...${RESET}\n`);

// Determine the npm command command depending on platform
const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';

// Spawn server process
const serverProcess = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(__dirname, 'server'),
  env: { ...process.env, PORT: '5000' },
  shell: true
});

// Spawn client process
const clientProcess = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(__dirname, 'client'),
  shell: true
});

serverProcess.stdout.on('data', data => log('Server', PURPLE, data));
serverProcess.stderr.on('data', data => log('Server Error', RED, data));

clientProcess.stdout.on('data', data => log('Client', CYAN, data));
clientProcess.stderr.on('data', data => log('Client Error', RED, data));

serverProcess.on('close', code => {
  console.log(`${RED}${BOLD}[Server] exited with code ${code}${RESET}`);
  clientProcess.kill();
  process.exit(code);
});

clientProcess.on('close', code => {
  console.log(`${RED}${BOLD}[Client] exited with code ${code}${RESET}`);
  serverProcess.kill();
  process.exit(code);
});

// Handle termination signals
const handleExit = () => {
  console.log(`\n${GREEN}${BOLD}Shutting down LearnVerse...${RESET}`);
  serverProcess.kill();
  clientProcess.kill();
  process.exit(0);
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);
