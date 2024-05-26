#! /usr/bin/env node

import inquirer from "inquirer";

// Import date from 'date-fns'
import {differenceInSeconds} from "date-fns"
import chalk from "chalk";

    console.log(chalk.italic.blueBright ("\n \t Wellcome to my Countdown Timer \n"));
    

const prompt = await inquirer.prompt ([
    {
        name: "input",
        type: "number",
        message: "Please enter the amount of Seconds", 
        validate: (input) => {

            // When user put Alphabatics values then print 'If' statement
            if (isNaN(input)) {
                return chalk.yellowBright ("\n \t Please enter valid number in seconds \n")
            }

            // When user put value of seconds but greater than in 60 then print 'Else-if' statement
            else if (input > 60) {
                return chalk.yellowBright ("\n \t Sorry! seconds must be in 60 \n")
            }

            // User put numbers around 60 then print 'Else' statement
            else {
                return true
            }
        }
        }
])

let input = prompt.input 

function startTime (value: number) {
    const intTime = new Date().setSeconds (new Date().getSeconds() + value)
        const intervalTime = new Date (intTime)

    setInterval((() => {
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime , currentTime)

        if (timeDiff <= 0) {
            console.log(chalk.redBright ("Timer has completed"));
            process.exit()
        }

        let min = Math.floor (timeDiff%((3600 * 24))/3600)
        let sec = Math.floor (timeDiff%60)
        console.log(`${min.toString().padStart(2 , "0")}:${sec.toString().padStart(2 , "0")}`);
        
    }),1000)
}
startTime(input)










