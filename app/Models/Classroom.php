<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Classroom extends Model
{
    use HasFactory;

    protected $fillable = ["name", "code", "description"];

    public function students(): HasMany
    {
        return $this->hasMany(Student::class);
    }
    public function subjects(): BelongsToMany
    {
        return $this->belongsToMany(Subject::class);
    }

    public function teachers(): HasManyThrough
    {
        return $this->hasManyThrough(Subject::class, Teacher::class);
    }
}
