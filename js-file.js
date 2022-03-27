btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const btn2= document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});