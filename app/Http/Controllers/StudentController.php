<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Models\Classroom;
use App\Models\Guardian;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Students/StudentIndex')->with([
             'students' => Student::with('classroom')->latest()->get()
         ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Students/StudentCreate')->with([
            'guardians' => Guardian::all(),
            'classrooms' => Classroom::orderBy('name', 'asc')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        $data = $request->validated();
        Student::create($data);
        return to_route('students.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        $classroom = Classroom::find($student->classroom_id);
        return Inertia::render('Students/StudentShow')->with([
            'student' => $student,
            'classroom' => $classroom
        ]) ;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        $classrooms = Classroom::orderBy('name')->get();
        return Inertia::render('Students/StudentEdit', compact('student', 'classrooms'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreStudentRequest $request, Student $student)
    {
        $data = $request->validated();
        $student->update($data);
        return to_route('students.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();
        return to_route('students.index');
    }
}
