class Quiz {
    constructor(_question,_answer,_correct) {
        this.question = _question;
        this.answer = _answer;
        this.correct = _correct;
    }
}
let quiz1 = new Quiz("Chiều cao của Quang Hải?",['Một mét bẻ đôi','Hai mét rưỡi','1m48','1m65'],'1m65');
let quiz2 = new Quiz("Nước uống nào có chứ cả canxi và sắt?",['Cafe','Coca','Nước mía','Nước chè'],'Cafe');
let quiz3 = new Quiz("Điều gì là khổ nhất?",['Xấu','Lép','Dốt','Nghèo'],'Lép');
let quiz4 = new Quiz("A gọi B bằng chú, B gọi C bằng em, C gọi A bằng gì?",['Mẹ','Bà','Mồm','Điện thoại'],'Mồm');
let quiz5 = new Quiz("Tháng nào ngắn nhất trong năm?",['Bảy','Hai','Ba','Mười'],'Ba');
let quiz6 = new Quiz("2 con vịt đi trước 2 con vịt, 2 con vịt đi sau 2 con vịt, 2 con vịt đi giữa 2 con vịt. Hỏi có mấy con vịt?",['2 con','10 con','4 con','5 con'],'2 con');