<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId("classroom_id")->constrained();

            $table->string("name");
            $table->string("surname");
            $table->date("dob");
            $table->string("pob");
            $table->string("country");
            $table->string("region");
            $table->string("city");
            $table->string("address");
            $table->string("avatar")->nullable();
            $table->string("gender");
            $table->string("phone_number")->nullable();
            $table->string("email")->nullable();
            $table->boolean("is_disabled")->default(false);
            $table->string("disability_type")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
