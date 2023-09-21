// Desafio - JavaScript: Caixa Eletrônico

const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
          number: "5160 4196 4843 3388",
          creditBalance: 1000,
          ensign: "American Express",
        },
    ],
};

let option = parseInt(prompt(`Digite (1) se deseja sacar, digite (2) se deseja ver o seu saldo, digite (3) se deseja realizar um deposito:`));
if(option == 1) {
    responseWithDraw = parseInt(prompt("Digite (1) Para saque na poupança ou (2) para Saque de Crédito"));

    if(responseWithDraw !== 1 && responseWithDraw !== 2) {
        window.alert(`Command Invalid`);
        responseWithDraw = parseInt(prompt("Digite (1) Para saque na poupança ou (2) para Saque de Crédito"));
    }

    withdrawnAmount = parseInt(prompt("Digite o valor que deseja sacar:"));
    makeWithDrawal(user, withdrawnAmount, responseWithDraw);
} else if(option == 2) {
    responseBalance = parseInt(prompt("Digite (1) Para tipo de conta poupança ou (2) para tipo de conta Crédito"));
    if(responseBalance !== 1 && responseBalance !== 2) {
        window.alert(`Command Invalid`);
        responseWithDraw = parseInt(prompt("Digite (1) tipo de conta poupança ou (2) ara tipo de conta Crédito"));
    }
    getBalance(user, responseBalance);
} else if(option == 3) {
    let valueForDeposit  = parseInt(prompt(`Digite o valor do deposito:`));
    makeDeposit(user, valueForDeposit);
} else {
    window.alert("Command Invalid");
}


function makeWithDrawal(user, withdrawnAmount, responseWithDraw) {
    if(typeof withdrawnAmount == 'string') {
        return "This value is not allowed";
    }

    if(withdrawnAmount < 5) {
        return window.alert("This value is not allowed");
    } else if(responseWithDraw == 1) {
        console.log("Escolheu o saque de Poupança");
        if(user.savingsBalance < withdrawnAmount) {
            return window.alert("Balance unavailable");
        } else {
            user.savingsBalance -= withdrawnAmount;
            console.log(`Sucess: new savingsBalance - $ ${user.savingsBalance}`);
            return window.alert('Withdrawal carried out');
        }
    } else if(responseWithDraw == 2) {
        console.log("Escolheu o saque de Credito");
        if(user.cardsInformation[0].creditBalance < withdrawnAmount) {
            return window.alert("Balance unavailable");
        } else {
            user.cardsInformation[0].creditBalance -= withdrawnAmount;
            console.log(`Sucess: new creditBalance - $ ${user.cardsInformation[0].creditBalance}`);
            return window.alert('Withdrawal carried out');
        }
    } 
}


function getBalance(user, responseBalance) {
    let balance = 0;
    if(responseBalance == 1) {
        balance = user.savingsBalance;
        return window.alert(`Saldo: $ ${balance}`);
    } else if(responseBalance == 2) {
        balance = user.cardsInformation[0].creditBalance;
        return window.alert(`Saldo: $ ${balance}`);
    }
}

function makeDeposit(user, valueForDeposit) {
    if(typeof valueForDeposit == 'string') {
        return window.alert("This value is not allowed");
    } else if (valueForDeposit < 5 || valueForDeposit > 500) {
        return window.alert("This value is not allowed");
    } else {
        user.savingsBalance += valueForDeposit;
        return window.alert(`Deposit made successfully / new value $ ${user.savingsBalance}`);
    }
}