document.querySelector('.letter').addEventListener('click', function () {
    this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  });
  

  const letter = document.querySelector('.letter');
  const body = document.body;
  
  let isFront = true; // 앞면 상태를 추적
  
  letter.addEventListener('click', () => {
    if (isFront) {
      letter.style.transform = 'rotateY(-180deg)'; // 뒷면으로 회전
      body.style.background = '#000000'; // 배경 흰색
    } else {
      letter.style.transform = 'rotateY(0deg)'; // 앞면으로 회전
      body.style.background = '#000000'; // 배경 빨간색
    }
    isFront = !isFront; // 상태 변경
  });
  

  