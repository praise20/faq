//using selectors inside the element

const questions = document.querySelectorAll('.question');

// calling what should happen to each article with class 'question'
questions.forEach(function(question){
    // look for the button in each question. That's why it's not document but question.
    const btn= question.querySelector(".question-btn");
    btn.addEventListener("click",function(){
        // to not open any other question except the one with show-Text(the one you are presently viewing)
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text");
    })
})

// traversing the dom which is another way 

// const btns= document.querySelectorAll(".question-btn");
// btns.forEach(function(eachBtn){
//     eachBtn.addEventListener('click',function(e){
//         console.log(e.currentTarget.parentElement.parentElement);
//         const question= e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })