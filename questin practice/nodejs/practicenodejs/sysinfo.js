const os = require("os"); //Write a Node script that prints system info (os module). ans it
console.log("System Information:");
console.log("-------------------");
console.log("Operating System:", os.type()); // OS name
console.log("Platform:", os.platform()); // Platform (linux, win32, darwin)
console.log("Architecture:", os.arch()); // CPU architecture
console.log("CPU Cores:", os.cpus().length); // Number of CPU cores
console.log("Total Memory (GB):", (os.totalmem() / 1e9).toFixed(2));
console.log("Free Memory (GB):", (os.freemem() / 1e9).toFixed(2));
console.log("System Uptime (seconds):", os.uptime());
console.log("Hostname:", os.hostname());
