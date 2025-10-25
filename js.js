// script.js
document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const sections = document.querySelectorAll("section");
  let matchFound = false;

  sections.forEach(section => {
    const content = section.textContent.toLowerCase();
    if (content.includes(query)) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      section.style.border = "2px solid #F39C12";
      setTimeout(() => {
        section.style.border = "none";
      }, 2000);
      matchFound = true;
    }
  });

  if (!matchFound) {
    alert("لم يتم العثور على نتائج مطابقة.");
  }
});

// أضف دوال التفاعل هنا
function showMedia(type) {
  const display = document.getElementById('media-display');
  const contents = {
    text: '<h4>هذا نص تفاعلي!</h4><p>يمكنك التفاعل مع هذا المحتوى وتغييره.</p>',
    image: '<img src="img/6.gif" alt="تفاعلي" style="max-width:100%;border-radius:8px;"><p>صورة تفاعلية</p>',
    audio: '<audio controls style="width:100%"><source src="audio/demo.mp3" type="audio/mpeg"></audio>',
    video: '<video controls style="max-width:100%"><source src="vid/1.mp4" type="video/mp4"></video>'
  };
  display.innerHTML = contents[type] || '<p>اختر نوع الوسائط</p>';
}

function changeMediaType() {
  const type = document.getElementById('mediaType').value;
  document.querySelectorAll('.media-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(type + '-content').classList.add('active');
  updateStyles();
}

function updateStyles() {
  const fontSize = document.getElementById('fontSize').value + 'px';
  const bgColor = document.getElementById('bgColor').value;
  const activeContent = document.querySelector('.media-content.active');
  
  if (activeContent) {
    activeContent.style.fontSize = fontSize;
    activeContent.style.backgroundColor = bgColor;
    activeContent.style.padding = '20px';
    activeContent.style.borderRadius = '8px';
  }
}

function checkAnswer(button, result) {
  const buttons = button.parentElement.querySelectorAll('.quiz-btn');
  buttons.forEach(btn => btn.disabled = true);
  
  if (result === 'correct') {
    button.classList.add('correct');
    button.innerHTML += ' <i class="fas fa-check"></i>';
  } else {
    button.classList.add('wrong');
    button.innerHTML += ' <i class="fas fa-times"></i>';
  }
}