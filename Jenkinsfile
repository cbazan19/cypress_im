
/*def COLOR_MAP = [
    'SUCCESS': 'good',
    'FAILURE': 'danger'

]

def getBuildUser(){
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

 */

pipeline{
    agent any

    /*  Variable para la notificación en slack

    environment{
        BUILD_USER = ''
    }*/

    triggers {
        //cron('0 1 * * *') // Ejecutar todos los días a la 1:00 AM
        //cron('0 10 * * 1-5') // Ejecutar de lunes a viernes a las 10:00 AM  
        cron('30 09 * * 1-5') // Ejecutar de lunes a viernes a las 09:30 AM
    }

    parameters{
        string(name:"SPEC", defaultValue: "cypress/e2e/1-getting-started/abbaco_smoke_prod.cy.js", description: "Ejemplo: cypress/e2e/1-getting-started/abbaco_smoke_prod.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'edge', 'firefox', 'chromium'], description: "Elegir browser para ejecutar el test")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Build'){
            steps{
                echo "Building application"
            }
        }
        stage('Testing'){
            steps{
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }

        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }      
        }
    }

    post{
        always{

            /* Configuración para la notificación en slack

            script{
                BUILD_USER = getBuildUser()
            }

            slackSend   channel: 'cypress',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER} \n Test ejecutado: ${SPEC} \n Navegador: ${BROWSER} \n Ver detalle en: ${env.BUILD_URL}HTML_20Report/"    */

            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }

    }


}


