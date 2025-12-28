pipeline{
    agent {
        node {
            label 'docker-agent-node'
        }
    }
    triggers {
        pollSCM 'H/5 * * * *'
    }
    stages {
        stage ('Build') {
            steps {
                echo "Building..."
                sh '''
                npm install
                '''
            }
        }
        stage ('Test') {
            steps {
                echo "Testing..."
                sh '''
                npm start
                '''
            }
        }
        stage ('Deliver') {
            steps {
                echo "Deliver..."
                sh '''
                echo "Everything worked"
                '''
            }
        }
    }
}