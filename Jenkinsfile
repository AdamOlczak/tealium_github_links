pipeline {
  agent {
    docker {
      image 'node:12'
    }

  }
  stages {
    stage('requirements') {
      steps {
        sh 'npm ci'
      }
    }
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
  }
}