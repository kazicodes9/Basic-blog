function addComment(){
    const input=
    document.getElementById('comment-input');
    const comment=input.value.trim();
    if(comment){
        const commentList=
        document.getElementById('comment-list';)
        const li =document.createElement('li');
        li.textContent=comment;
        commentList.appendChild(li);
        input.value='';
    }
}