pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Hello') {
            steps {
                echo "hello world"
                bat 'npm --version'
            }
        }
        stage('Git') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/bibhu11/react-app.git';
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
		//bat 'npm run rest-server'
                bat 'npm start'
            }
        }
    }
}
