<?php
   
   class Animal
   {
      public $legs ;


      public function __construct($legs1)
      {
          $this->legs = $legs1;
      }

      public function __destruct()
      {
        echo 'destruct is called';
      }
   }
   

   $cow = new Animal(4);
 
   print_r($cow);
 
?>