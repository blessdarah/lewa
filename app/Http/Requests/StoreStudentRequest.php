<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            "classroom_id" => 'required|numeric',
            "name"=>'string|required',
            "surname"=>'string|required',
            "dob"=>'required|date',
            "pob" => "string|required",
            "country" => "string|required",
            "region" => "string|required",
            "city" => "string|required",
            "address" => "string|required",
            "avatar" => "nullable",
            "gender" => "string|required",
            "phone_number" => "string|required",
            "email" => "email|required",
            "is_disabled" => "nullable|boolean",
            "disability_type" => "nullable|string",
        ];
    }
}
