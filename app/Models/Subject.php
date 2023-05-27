<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Stmt\Class_;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = ["code", "title", "description", "coefficient"];

    public function classrooms()
    {
        return $this->belongsToMany(Classroom::class);
    }
}
