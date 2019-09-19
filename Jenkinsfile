pipeline {
  agent {
    docker {
      image 'node:12'
    }

  }
  stages {
    stage('requirements') {
      steps {
        sh 'sudo npm install'
      }
    }
    stage('test') {
      steps {
        sh 'npm test'
      }
    }
  }
}