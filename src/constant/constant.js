const root = document.getElementById('root');
const operators = ['+', '-', '*', '/']
const keys = [['1', '2', '3', '+'], ['4', '5', '6', '-'], ['7', '8', '9', '*'],
    ['.', '0', '/', '**'], ['CE', 'C', '(', ')'],['=']]
let outputResultText = document.createElement('input')
let h1 = document.createElement('h1')
let body = document.getElementById('body')

export {root,operators,keys,outputResultText,h1,body}