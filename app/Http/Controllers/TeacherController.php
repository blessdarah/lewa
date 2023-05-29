<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeacherRequest;
use App\Models\Subject;
use App\Models\Teacher;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Teacher/TeacherIndex')->with([
            "teachers" => Teacher::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Teacher/TeacherCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTeacherRequest $request)
    {
        $data = $request->validated();
        Teacher::create($data);
        return to_route("teachers.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Teacher $teacher)
    {
        return Inertia::render("Teacher/TeacherShow")->with([
            "teacher" => Teacher::where('id', $teacher->id)->with('subjects')->first(),
            "subjects" => Subject::orderBy('title')->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Teacher $teacher)
    {
        return Inertia::render("Teacher/TeacherEdit")->with([
            "teacher" => $teacher
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreTeacherRequest $request, Teacher $teacher)
    {
        $data = $request->validated();
        $teacher->update($data);
        return to_route("teachers.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teacher $teacher)
    {
        $teacher->delete();
        return to_route('teachers.index');
    }
}
