var area = document.getElementById('area'),
    move = 1, volume = 1, cross = 0, zero = 0;
for (var i = 0; i < 9; i++)
    area.innerHTML+='<div class="cell"></div>';
area.addEventListener('click', (event) => {
    if (event.target.innerHTML == '')
    {
        if (move % 2 === 0){
            event.target.innerHTML = 'O';
            document.getElementById('text').innerHTML = "х КРЕСТИКИ х";
            check('O');
        }
        else{
           event.target.innerHTML = 'X'; 
           document.getElementById('text').innerHTML = "o НОЛИКИ о"
           check('X');
        }
        move++;
        if (volume++ == 9)
            alert('draw');
    } 
})

function check(alpha)
{
    var cells = document.getElementsByClassName('cell');
    var h = [0, 0, 0];
    var v = [0, 0, 0];
    var d = [0, 0];
    for (var i = 0; i < 9; i+=3)
        for (var j = 0; j < 3; j++)
            if (cells[i+j].innerHTML == alpha) {
                h[i/3]++;
                v[j]++;
            }
    for (var i = 0, n = 0; i < 9; i+=2){
        n = n == 1 ? 0 : 1;
        if (cells[i].innerHTML == alpha)
            if (i == 4) { d[0]++; d[1]++; }
            else d[n]++;
    }
    if (v[0] == 3 || v[1] == 3 || v[2] == 3|| h[0] == 3 || 
        h[1] == 3 || h[2] == 3 || d[0] == 3 || d[1] == 3)
        {
            alert('vic');
            if (alpha == 'O') zero++;
            else cross++;
        }
}