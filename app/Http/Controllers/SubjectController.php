<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSubjectRequest;
use App\Http\Requests\UpdateSubjectRequest;
use App\Models\Subject;
use Inertia\Inertia;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Subjects/SubjectIndex")->with([
            "subjects" => Subject::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Subjects/SubjectCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSubjectRequest $request)
    {
        $data = $request->validated();
        Subject::create($data);
        return to_route("subjects.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Subject $subject)
    {
        return Inertia::render("Subjects/SubjectShow", compact("subject"));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Subject $subject)
    {
        return Inertia::render("Subjects/SubjectEdit", compact("subject"));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSubjectRequest $request, Subject $subject)
    {
        $data = $request->validated();
        $subject->update($data);
        return to_route("subjects.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Subject $subject)
    {
        $subject->delete();
        return to_route("subjects.index");
    }
}
