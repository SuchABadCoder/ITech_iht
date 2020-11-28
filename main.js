var area = document.getElementById('area'),
    move = 1, volume = 1, victory = false;

for (var i = 0; i < 9; i++)
    area.innerHTML+='<div class="cell"></div>';

if (sessionStorage.getItem('zero') == null)
{
    sessionStorage.setItem('zero', 0);
    sessionStorage.setItem('cross', 0);
}

document.getElementById('zero').innerHTML = "Нолики: " + sessionStorage.getItem('zero');
document.getElementById('cross').innerHTML = "Крестики: " + sessionStorage.getItem('cross');

area.addEventListener('click', (event) => {
    if (event.target.innerHTML == '' && !victory)
    {
        if (move % 2 === 0){
            event.target.innerHTML = 'O';
            document.getElementById('text').innerHTML = "х КРЕСТИКИ х";
            check('O');
            if(victory)
            {
                document.getElementById('text').innerHTML = "Победили нолики!";
                document.getElementById('zero').innerHTML = "Нолики: " + sessionStorage.getItem('zero');
                ;
            }
        }
        else{
           event.target.innerHTML = 'X'; 
           document.getElementById('text').innerHTML = "o НОЛИКИ о"
           check('X');
           if(victory)
           {
                document.getElementById('text').innerHTML = "Победили крестики!";
                document.getElementById('cross').innerHTML = "Крестики: " + sessionStorage.getItem('cross');
           }
        }
        move++;
        if (volume++ == 9 && !victory)
            document.getElementById('text').innerHTML = "Ничья!";
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
            victory = true;
            if (alpha == 'O'){
                zero = sessionStorage.getItem('zero');
                zero++;
                sessionStorage.setItem('zero', zero);
            } 
            else {
                cross = sessionStorage.getItem('cross');
                cross++;
                sessionStorage.setItem('cross', cross);;
            }
        }
}

 function start()
 {
    var cells = document.getElementsByClassName('cell');
    victory = false;
    foreach (cell in cells)
        cell.innerHTML = '';
 }

