function checkInputValue(e) {
    //check input value when keypress
    this.value = this.value.replace(/[^\d\/*\-+.()]/,'');
}

export default checkInputValue