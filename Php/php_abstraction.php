<?php

    abstract class Vehicle{
        public $wheels;

        public function vehicleName($name){
            echo "The name of this vehicle is $name";
        }

        abstract function showName();
    }

    class Car extends Vehicle{
        public function showName()
        {
            echo 'Function Called';
        }
    }

    $v= new Car;
    $v->vehicleName('car');
    $v-> showName();
?>