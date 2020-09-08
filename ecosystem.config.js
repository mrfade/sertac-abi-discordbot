module.exports = {
  apps: [
    {
      name: 'sertac-abi-discordbot',
      exec_mode: 'fork',
      instances: 1,
      script: '/usr/bin/npm',
      args: 'start'
    }
  ]
}
