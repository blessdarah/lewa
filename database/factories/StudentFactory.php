<?php

namespace Database\Factories;

use App\Models\Classroom;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'classroom_id' => Classroom::factory(),
            'name' => fake()->name,
            'surname' => fake()->lastName,
            'dob' => fake()->date,
            'pob' => fake()->city,
            'country' => fake()->country,
            'region' => fake()->word,
            'city' => fake()->city,
            'address' => fake()->address,
            'gender' => fake()->randomKey(['male' => 'm', 'female' => 'f']),
            'phone_number' => fake()->phoneNumber(),
        ];
    }
}
