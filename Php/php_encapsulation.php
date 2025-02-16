<?php
class Animal
{
    public $legs;        // Public: Accessible from anywhere
    private $name;       // Private: Accessible only within this class
    protected $species;  // Protected: Accessible within this class and subclasses

    // Method to set the private variable (Encapsulation)
    public function setName($name)
    {
        $this->name = $name;
    }

    // Method to get the private variable (Encapsulation)
    public function getName()
    {
        return $this->name;
    }
}

class Cow extends Animal
{
    // Public method to set protected species
    public function setCowSpecies($species)
    {
        $this->species = $species;
    }

    // Public method to get protected species
    public function getCowSpecies()
    {
        return $this->species;
    }
}

// Creating an instance of Cow
$ani = new Cow();

// Public variable can be accessed directly
$ani->legs = 4;
echo "Legs: " . $ani->legs . "<br>";

// Private variable needs setter and getter (Encapsulation)
$ani->setName('Barbie');
echo "Cow's Name: " . $ani->getName() . "<br>";

// Protected variable cannot be accessed directly but can be set using a method
$ani->setCowSpecies('Dairy Cow');
echo "Cow Species: " . $ani->getCowSpecies();
?>
