(function(){
  window.wireQuiz=function(id,answer,right,wrong){const group=document.getElementById(id),feedback=group.querySelector('.feedback');group.querySelectorAll('[data-answer]').forEach(button=>button.addEventListener('click',()=>{const ok=button.dataset.answer===answer;group.querySelectorAll('[data-answer]').forEach(item=>{item.classList.remove('correct','wrong');if(item.dataset.answer===answer)item.classList.add('correct');else if(item===button)item.classList.add('wrong')});feedback.textContent=ok?'✅ '+right:'🔎 '+wrong}))};
})();
