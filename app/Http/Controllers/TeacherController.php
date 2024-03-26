<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTeacherRequest;
use App\Models\Subject;
use App\Models\Teacher;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Teacher/TeacherIndex')->with([
            "teachers" => Teacher::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Teacher/TeacherCreate');
    }

    /**
     * Store a newly created resource in storage.
     * @return RedirectResponse
     */
    public function store(StoreTeacherRequest $request): RedirectResponse
    {
        $data = $request->validated();
        Teacher::create($data);
        return to_route("teachers.index");
    }

    /**
     * Display the specified resource.
     * @return Response
     */
    public function show(Teacher $teacher): Response
    {
        $classrooms = DB::select("Select * from classrooms where id in
            (Select classroom_id from subject_teacher a
            join classroom_subject b
            on a.subject_id = b.subject_id
            where teacher_id = {$teacher->id})");

        return Inertia::render("Teacher/TeacherShow")->with([
            "teacher" => Teacher::where('id', $teacher->id)
                ->with('subjects')
                ->first(),
            "subjects" => Subject::orderBy('title')->get(),
            "classrooms" => $classrooms
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit(Teacher $teacher): Response
    {
        return Inertia::render("Teacher/TeacherEdit")->with([
            "teacher" => $teacher
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @return RedirectResponse
     */
    public function update(StoreTeacherRequest $request, Teacher $teacher): RedirectResponse
    {
        $data = $request->validated();
        $teacher->update($data);
        return to_route("teachers.index");
    }

    /**
     * Remove the specified resource from storage.
     * @return RedirectResponse
     */
    public function destroy(Teacher $teacher): RedirectResponse
    {
        $teacher->delete();
        return to_route('teachers.index');
    }
}
