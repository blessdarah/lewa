<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AcademicYear extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable  = ["description", "start_date", "end_date", "archived_on"];
}
