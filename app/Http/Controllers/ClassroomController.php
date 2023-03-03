<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreclassroomRequest;
use App\Http\Requests\UpdateclassroomRequest;
use App\Models\Classroom;
use Inertia\Inertia;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Classroom/ClassroomIndex')->with([
            "classrooms" => Classroom::latest()->get()
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
    public function show(classroom $classroom)
    {
        return Inertia::render("Classroom/ClassroomShow")->with([
            "classroom" => $classroom
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(classroom $classroom)
    {
        return Inertia::render("Classroom/ClassroomEdit")->with([
            "classroom" => $classroom
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateclassroomRequest $request, classroom $classroom)
    {
        $data = $request->validated();
        $classroom->update($data);
        return to_route("classrooms.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(classroom $classroom)
    {
        $classroom->delete();
        return to_route('classrooms.index');
    }
}
