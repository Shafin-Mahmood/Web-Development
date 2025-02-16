<?php
    class Vehicle{
        public $wheels;

        public function vehicleName($name){
            echo "The name of this vehicle is $name";
        }
    }
    class Motorcycle extends Vehicle{
        public $weight;

    }

    $honda= new Motorcycle();
    echo $honda->vehicleName('hornet ');
    $honda->wheels=4;
    echo $honda->wheels;

?>