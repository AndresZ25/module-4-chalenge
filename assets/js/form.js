document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    

      if (username && title && content) {
      const post = { username, title, content };
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));
      
      window.location.href = 'blog.html';
    } else {
      alert('Please complete all fields.');
    }
  });
  