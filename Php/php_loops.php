<?php
echo 'The for loop is<br>';
//for loop
for ($i = 0; $i < 10; $i++) 
{
    echo 'the number is '.$i.'<br>'; 
}

echo 'The while loop is<br>';
//while loop

$i=0;

while ($i<10)
{
    echo 'the number is '.$i.'<br>'; 
    $i++;
}

//for each loop
echo 'The for each loop is<br>';

$arr = ['Shafin'=>'Batsman', 'Sanim'=>'Bowler', 'Eyasin'=>'Wicket-Keeper'] ; 

foreach($arr as $key=>$val)
{
    echo $key.' role is = ' .$val.'<br>';
}


?>
