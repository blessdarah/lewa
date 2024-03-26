<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreclassroomRequest;
use App\Http\Requests\UpdateclassroomRequest;
use App\Models\Classroom;
use App\Models\Student;
use App\Models\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Classroom/ClassroomIndex')->with([
            "classrooms" => Classroom::with('students')->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Classroom/ClassroomCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreclassroomRequest $request)
    {
        $data = $request->validated();
        Classroom::create($data);
        return to_route("classrooms.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Classroom $classroom)
    {
        // get all teachers and subjects taught in this class
        $teacherSubjects = DB::table('subject_teacher as st')
            ->join('classroom_subject as cs', 'st.subject_id', '=', 'cs.subject_id')
            ->join('teachers as t', 't.id', '=', 'st.teacher_id')
            ->join('subjects as s', 's.id', '=', 'st.subject_id')
            ->where('classroom_id', $classroom->id)
            ->select(DB::raw("concat(t.firstname, ' ', t.lastname) as teacher"), 's.title as subject')
            ->get();

        return Inertia::render("Classroom/ClassroomShow")->with([
            "classroom" => Classroom::where('id', $classroom->id)->with('subjects')->first(),
            "subjects" => Subject::orderBy('title')->get(),
            "students" => Student::with('classroom')->where('classroom_id', $classroom->id)->get(),
            "teacherSubjects" => $teacherSubjects
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Classroom $classroom)
    {
        return Inertia::render("Classroom/ClassroomEdit")->with([
            "classroom" => $classroom
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Classroom $classroom)
    {
        if(request()->query('attach') === 'subjects') {
            $subjects = $request->input('subjects');
            $classroom->subjects()->sync($subjects);
            return redirect()->back();
        }

        $updateRequest = new UpdateclassroomRequest();
        $data = $request->validate($updateRequest->rules());
        $classroom->update($data);
        return to_route("classrooms.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Classroom $classroom)
    {
        $classroom->delete();
        return to_route('classrooms.index');
    }
}
