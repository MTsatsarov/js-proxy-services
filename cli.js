#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function initConfig() {
  const configPath = path.join(process.cwd(), 'mylib-config.json');
  const configExists = fs.existsSync(configPath);

  if (!configExists) {
    fs.writeFileSync(configPath, JSON.stringify({ apiUrl: 'http://api.example.com' }, null, 2), 'utf8');
    console.log('Config file created at:', configPath);
  } else {
    console.log('Config file already exists at:', configPath);
  }
}

function run() {
  initConfig();  // Initialize configuration if not present
  const configPath = path.join(process.cwd(), 'mylib-config.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  require('./index')(config.apiUrl);  // Start the library with API URL
}

run();
