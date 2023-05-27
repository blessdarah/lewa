<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'firstname' => fake()->name,
        'lastname' => fake()->name,
        'idc_number' => fake()->name,
        'gender' => array_rand(array('male', 'female')),
        'address' => fake()->address,
        'email' => fake()->email,
        'phone_number' => fake()->phoneNumber,
        'dob' => fake()->date,
        'avatar' => fake()->imageUrl,
        'prefix' => fake()->title,
        ];
    }
}
