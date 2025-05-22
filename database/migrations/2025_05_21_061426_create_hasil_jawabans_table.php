<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hasil_jawaban', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('id_hasil_kuisioner')->constrained('hasil_kuisioner')->references('id')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignUuid('id_pertanyaan')->constrained('master_pertanyaan')->references('id')->onDelete('restrict')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hasil_jawaban');
    }
};
