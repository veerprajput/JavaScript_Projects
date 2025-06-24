let playerAttackValue = 100;
let monsterAttackValue = 80;

let chosenMaxLife = parseInt(prompt('Maximum life for you and the monster.', '100'));
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

let battleLog = [];
const LEPA = 'Player_Attack'
const LEPSA = 'Player_Strong_Attack'
const LEMA = 'Monster_Attack'
const LEMSA = 'Monster_Strong_Attack'
const PH = 'Player_Heal'
const MH = 'Monster_Heal'
const GO = 'GAME_OVER'

function writeToLog(event, damage, monsterHealth, playerHealth) {
    let log_entry;
    if (event === LEPA) {
        log_entry = {
            event: event,
            value: damage,
            target: 'Monster',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth,
        }
        battleLog.push(log_entry)
    }
    else if (event === LEPSA) {
        log_entry = {
            event: event,
            value: damage,
            target: 'Monster',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth,
        }
        battleLog.push(log_entry)
    }
    else if (event === LEMA) {
        log_entry = {
            event: event,
            value: damage,
            target: 'Player',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth,
        }
        battleLog.push(log_entry)
    }
    else if (event === LEMSA) {
        log_entry = {
            event: event,
            value: damage,
            target: 'Player',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth,
        }
        battleLog.push(log_entry)
    }
    else if (event === GO) {
        log_entry = {
            event: event,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth,
        }
        battleLog.push(log_entry)
    }
}

function reset() {
    chosenMaxLife = parseInt(prompt('RESTART - Maximum life for you and the monster.', '23'));
    adjustHealthBars(chosenMaxLife);
    playerAttackValue = 100;
    monsterAttackValue = 80;
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function attackHandler() {
    if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You tie')
        reset()
    } else if (currentMonsterHealth <= 0) {
        alert('You win')
        playerAttackValue += 8
        monsterAttackValue += 10
        chosenMaxLife += 50;
        currentMonsterHealth = chosenMaxLife;
        currentPlayerHealth = chosenMaxLife;
        writeToLog('GAME_OVER', 3, currentMonsterHealth, currentPlayerHealth)
        adjustHealthBars(chosenMaxLife);
    } else if (currentPlayerHealth <= 0) {
        alert('You lose!')
        reset()
    } else {
        let damage =  dealPlayerDamage(monsterAttackValue + 0.32);
        currentPlayerHealth -= damage;
        writeToLog('Monster_Attack', damage, currentMonsterHealth, currentPlayerHealth)
        damage =  dealMonsterDamage(playerAttackValue);
        currentMonsterHealth -= damage;
        writeToLog('Player_Attack', damage, currentMonsterHealth, currentPlayerHealth)
    }
}

function strongAttackHandler() {
    if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You tie')
        reset()
    } else if (currentMonsterHealth <= 0) {
        alert('You win')
        playerAttackValue += 10
        monsterAttackValue += 13
        chosenMaxLife += 100;
        currentMonsterHealth = chosenMaxLife;
        currentPlayerHealth = chosenMaxLife;
        writeToLog('GAME_OVER', 3, currentMonsterHealth, currentPlayerHealth)
        adjustHealthBars(chosenMaxLife);
    } else if (currentPlayerHealth <= 0) {
        alert('You lose!')
        reset()
    } else {
        let damage =  dealMonsterDamage(playerAttackValue + 30);
        currentMonsterHealth -= damage;
        writeToLog('Player_Strong_Attack', damage, currentMonsterHealth, currentPlayerHealth)
        damage =  dealPlayerDamage(monsterAttackValue + 25);
        currentPlayerHealth -= damage;
        writeToLog('Monster_Strong_Attack', damage, currentMonsterHealth, currentPlayerHealth)
    }
}

function heal() {
    currentMonsterHealth += 50;
    currentPlayerHealth += 49;
    increasePlayerHealth(49)
    increaseMonsterHealth(50)
}

function printLogHandler() {
    let i = 0;
    for (const logEntry of battleLog) {
        console.log(`#${i}`)
        for (const key in logEntry) {
            console.log(`${key} -> ${logEntry[key]}`)
        }
    }
        i++
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', heal);
logBtn.addEventListener('click', printLogHandler)