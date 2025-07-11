def app

pipeline {
    agent any
    environment {
        ENV_TYPE = "production"
        PORT = 3908
        NAMESPACE = "devsocial-online"
        REGISTRY_HOSTNAME = "phoenix115"
        REGISTRY = "registry.hub.docker.com"
        PROJECT = "social-frontend"
        DEPLOYMENT_NAME = "social-frontend-deployment"
        IMAGE_NAME = "${env.BUILD_ID}_${env.ENV_TYPE}_${env.GIT_COMMIT}"
        DOCKER_BUILD_NAME = "${env.REGISTRY_HOSTNAME}/${env.PROJECT}:${env.IMAGE_NAME}"
    }

    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Unit tests') {
             steps {
                     echo "Running unit tests..."
                     script {
                         sh '''
                             # Принудительно устанавливаем нужную версию pnpm
                             npm install -g pnpm@9.15.3

                             # Проверяем версию pnpm
                             pnpm -v

                             # Чистим кэш (на всякий случай)
                             pnpm store prune || true

                             # Устанавливаем зависимости
                             pnpm install

                             # Запускаем тесты
                             pnpm run test
                         '''
                     }
                 }
        }
        stage('Build docker image') {
            steps {
                echo "Build image started..."
                    script {
                        app = docker.build("${env.DOCKER_BUILD_NAME}")
                    }
                echo "Build image finished..."
            }
        }
        stage('Push docker image') {
             steps {
                 echo "Push image started..."
                     script {
                          docker.withRegistry("https://${env.REGISTRY}", 'devsocial-online') {
                            app.push("${env.IMAGE_NAME}")
                        }
                     }
                 echo "Push image finished..."
             }
       }
       stage('Delete image local') {
             steps {
                 script {
                    sh "docker rmi -f ${env.DOCKER_BUILD_NAME}"
                 }
             }
        }
        stage('Preparing deployment') {
             steps {
                 echo "Preparing started..."
                     sh 'ls -ltr'
                     sh 'pwd'
                     sh "chmod +x preparingDeploy.sh"
                     sh "./preparingDeploy.sh ${env.REGISTRY_HOSTNAME} ${env.PROJECT} ${env.IMAGE_NAME} ${env.DEPLOYMENT_NAME} ${env.PORT} ${env.NAMESPACE}"
                     sh "cat deployment.yaml"
             }

        }
        stage('Deploy to Kubernetes') {
             steps {
                 withKubeConfig([credentialsId: 'prod-kubernetes']) {
                    sh 'kubectl apply -f deployment.yaml'
                    sh "kubectl rollout status deployment/${env.DEPLOYMENT_NAME} --namespace=${env.NAMESPACE}"
                    sh "kubectl get services -o wide"
                 }
             }
        }
    }
}
