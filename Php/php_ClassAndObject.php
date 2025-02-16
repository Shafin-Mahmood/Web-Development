<?php
   
   class Animal
   {
      public $legs ;


      public function animalname($name)
      {
        echo 'the name is '.$name ;
      }
   }
   

   $cow = new Animal();
   $cow->legs =4 ;
   print_r($cow);
   $cow->animalname('Cow')

?>