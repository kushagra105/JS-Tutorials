document.querySelector('#q1').addEventListener('submit',hello);
function hello(e){
    e.preventDefault();
    const a=document.getElementById('q2').value;
    const b=document.getElementById('q3').value;
    console.log(a);
    const c = `<h1>${a}</h1>
        <h2>${b}</h2>`;
    const x= document.getElementById('w1')
    x.innerHTML=c;
}
