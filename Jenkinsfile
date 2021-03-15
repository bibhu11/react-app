pipeline {
    
    // agent { 
    //     dockerfile true 
    // }

    agent any

    tools {
        nodejs "node"
    }

  
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('build') {
            steps{
                sh 'sudo docker build -t react-app -f Dockerfile .'
            }
        }
        // stage('run') {
        //     steps{
        //         sh'sudo docker run --name=react-app -d -p 3000:3000 react-app'
        //     }
        // }
    }

}

//     stages {
//         stage('Hello') {
//             steps {
//                 echo "hello world"
//                 bat 'npm --version'
//             }
//         }
//         stage('Git') {
//             steps {
//                 // Get some code from a GitHub repository
//                 git 'https://github.com/bibhu11/react-app.git';
//             }
//         }
//         stage('Build') {
//             steps {
//                 bat 'npm install'
// 		//bat 'npm run rest-server'
//                 bat 'npm start'
//             }
//         }
//     }
// }
