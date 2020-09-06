pipeline {
    agent { docker { image 'node:12.18.1-alpine3.12' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}