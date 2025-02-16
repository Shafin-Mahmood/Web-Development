<?php
    interface Vehicle{
        public function vehicleWheel();
    }
    class Motorcycle implements Vehicle{
        public $wheels;
        public function __construct($wheel){
            $this->wheels=$wheel;
        }
        public function vehicleWheel(){
            echo "Number of wheels of motorcycle is $this->wheels";
        }
    }

    class Car  implements Vehicle{
        public $wheels;
        public function __construct($wheel){
            $this->wheels=$wheel;
        }
        public function vehicleWheel(){
            echo "Number of wheels of car is $this->wheels";
        }
    }

    class Bus  implements Vehicle{
        public $wheels;
        public function __construct($wheel){
            $this->wheels=$wheel;
        }
        public function vehicleWheel(){
            echo "Number of wheels of bus is $this->wheels";
        }
    }

    function showValue(Vehicle $v){
        $v->vehicleWheel();
    }

    $showWheels= new Car('4');
    showValue($showWheels);
?>