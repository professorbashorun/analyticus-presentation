module.exports = {
  apps: [{
    name: 'analyticus-presentation',
    script: './app'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-221-221-191.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/key1026.pem',
      ref: 'master',
      repo: 'git@github.com:professorbashorun/analyticus-presentation.git',
      path: './',
      'post-deploy': 'sudo git pull https://github.com/professorbashorun/analyticus-presentation && sudo npm install && sudo pm2 startOrRestart /analyticus-presentation/ecosystem.config.js'
    }
  }
}
