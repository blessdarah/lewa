<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'idc_number',
        'gender',
        'address',
        'email',
        'phone_number',
        'dob',
        'avatar',
        'prefix',
    ];

    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class);
    }

    public function classrooms(): HasManyThrough
    {
        return $this->hasManyThrough(Subject::class, Classroom::class);
    }

}
