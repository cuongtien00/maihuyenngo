class GameManager {
    constructor (_limit) {
        this.limit = _limit;
        this.current = 0;
        this.quizs = [];
        this.point = 0;
        this.bonus = 0;


    }
    showP () {
        document.getElementById("point").innerHTML = "Điểm Số: " + this.point;
    }
    showBonus () {
        document.getElementById("bonus").innerHTML = "Tiền Thưởng: " + this.bonus +".000.000 VND";
    }
    nextQuiz() {
        let audio = document.getElementById("soundTrue");
        if(this.current < this.limit-1) {
        this.current++;
        this.showP ();
        this.showBonus();
       }else {
        alert("Bạn đã đến câu hỏi cuối");
        alert("Số điểm của bạn là " + this.point + ". Tiền thưởng " + this.bonus + ".000.000 VND");
        audio.play();
        this.current = 0;
        this.point = 0;
        this.bonus = 0;
        this.showP();
        this.showBonus();
       }
    }
    checkAnswer(ans) {
        if (ans === this.quizs[this.current].correct) {
            return true
        }else {
           return false;
        }
    }
    chooseAnswer(ans) {
        let audio = document.getElementById("soundExactly");
        let audio2 = document.getElementById("soundFalse");
        if(this.checkAnswer(ans)){
            audio.play();
            alert("Bạn đã trả lời đúng");
            this.point += 5;
            this.bonus += 2;
        }else {
            alert("Bạn đã trả lời sai."+
                " Đáp án: " + this.quizs[this.current].correct );
            audio2.play();
        }
    }
    endGame() {
        let audio = document.getElementById("soundReset");
        alert("Vui lòng chơi lại từ đầu.");
        this.nextGame();
        audio.play();
        this.showP();
        document.getElementById("bonus").innerHTML = "Tiền thưởng:";

    }
    nextGame() {
        this.current = 0;
        this.point = 0;
        this.bonus = 0;
    }
    resetGame () {}
    addQuiz(quiz) {
        this.quizs.push(quiz);
    }
    deleteQuiz(index) {
        this.quizs.splice(index,1);
    }
    help() {

        for (let i = 0; i < this.quizs[this.current].answer.length; i++) {
            if(this.quizs[this.current].answer[i] !== this.quizs[this.current].correct){
                this.quizs[this.current].answer[i] = " ";

            }
        }
    }
    help2() {
        for (let i = 0; i < this.quizs[this.current].answer.length; i++) {
            if(this.quizs[this.current].answer[i] === this.quizs[this.current].correct && i === 0){
                this.quizs[this.current].answer[i+1] = " ";
                this.quizs[this.current].answer[i+2] = " ";
            } else if (this.quizs[this.current].answer[i] === this.quizs[this.current].correct && i === (this.quizs[this.current].answer.length-1)) {
                this.quizs[this.current].answer[i-1] = " ";
                this.quizs[this.current].answer[i-2] = " ";
            } else if (this.quizs[this.current].answer[i] === this.quizs[this.current].correct) {
                this.quizs[this.current].answer[i+1] = " ";
                this.quizs[this.current].answer[i-1] = " ";
            }
        }

    }

}
let gameManager = new GameManager (6);
gameManager.addQuiz(quiz1);
gameManager.addQuiz(quiz2);
gameManager.addQuiz(quiz3);
gameManager.addQuiz(quiz4);
gameManager.addQuiz(quiz5);
gameManager.addQuiz(quiz6);