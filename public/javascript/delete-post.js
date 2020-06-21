async function deleteFormHandler(event) {
    event.preventDefault();
 
    const id = window.location.toString().split('/')[
       window.location.toString().split('/').length - 1
    ];
    
    const postComments = await fetch(`/api/comments/${id}`, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json'
       }
     })
       .then(response => response.json());
 
    for (let i = 0; i < postComments.length; i++){
       console.log(resComment[i].id);
       await fetch(`/api/comments/${postComments[i].id}`, {
          method: 'DELETE'
       });
    }
 
 
    const response = await fetch(`/api/posts/${id}`, {
       method: 'DELETE'
    });
 
    if (response.ok) {
       document.location.replace('/dashboard/');
    } else {
       alert(response.statusText);
    }
 }
 
 document.querySelector('#delete-post').addEventListener('click', deleteFormHandler);