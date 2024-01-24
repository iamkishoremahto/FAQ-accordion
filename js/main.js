let allQuestions = document.querySelectorAll('.accordion_item');

allQuestions.forEach((question) =>{
    let open_icon = question.querySelector('.question_wrapper span');
    let ans = question.querySelector('.ans');

    open_icon.addEventListener('click', () => {
        
        open_icon.classList.toggle('minus_icon');
        ans.classList.toggle('show_ans');
      
    });
});