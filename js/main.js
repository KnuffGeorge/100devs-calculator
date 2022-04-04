const keys = document.querySelector('.buttons')
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if (!target.matches('.button')){
            return;
        }else{
            console.log(value)
            calculator.parseInput(value)
        }
    })

const calculator = {
    displayText: '0',
    prevTotal: null,

    parseInput(value) {
        switch (value) {
            case '=':
                this.calcAnswer(this.displayText)
                break;
            case 'AC':
                this.clearAll()
                break;
            case '.':
                if (this.displayText === 0){
                //pass 0. into input
                }else{
                    //add . to string
                }
            default:
                this.addText(value)
        }
    },
    addText(value) {        
        if (this.displayText === '0'){
        this.displayText = ''
        } else if (this.prevTotal !== null){
            this.displayText = this.prevTotal
            this.prevTotal = null
        }
        if (isNaN(+(value)) && isNaN(+(this.displayText))){
            if (isNaN(this.displayText.slice(-1))){
                return;
            }
        }
        this.displayText += value
        this.outputText(this.displayText)
    },
    
    outputText(text){
        document.querySelector('.calculator-screen').value = text
    }, 

    calcAnswer(equation) {
        let result = Function("return " + equation)()
        if (this.displayText != 0){
            this.outputText(result)
        }
    },

    clearAll() {
        this.displayText = '0',
        this.prevTotal = null,
        this.outputText(this.displayText)
    }
}