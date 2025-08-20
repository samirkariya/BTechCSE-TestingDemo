pipeline {
	agent any
	tools {
		nodejs 'Node_20'
	}

	stages {
		stage('Checkout') {
			steps {
				checkout scm
			}
		}
	
		stage('Install') {
			steps {
				bat 'npm install'
			}
		}

		stage('Test') {
			steps {
				bat 'npm run test:ci'
			}
			post {
				always {
					junit 'junit.xml'
				}
			}
		}

		stage('Publish Coverage (HTML)') {
			steps {
				publishHTML target: [
				reportDir: 'coverage/lcov-report',
				reportFiles: 'index.html',
				reportName: 'Jest Coverage',
				keepAll: true
				]
			}
		}
	}
	
}