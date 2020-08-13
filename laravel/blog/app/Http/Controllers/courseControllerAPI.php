<?php

namespace App\Http\Controllers;
use App\course;
use App\Http\Requests\UploadRequest;
use App\Http\Resources\courseResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\courseRequest;
use App\Http\Resources\Collections\courseCollection;
use http\Env\Request;
use http\Env\Response;
use Illuminate\Support\Facades\Storage;

class courseControllerAPI extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return App\Http\Resources\Collections\courseCollection
     */
    public function index()
    {
        $course = course::all();
        return \response()->json($course,200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\courseRequest  $request
     * @return \App\Http\Resources\courseResource
     */
    public function store(courseRequest $request)
    {
        $file=$request->file('imageUrl');
        $file_name="course_image".time().'.'.$file->getClientOriginalExtension();
        $file->storeAs(
            'public/images', $file_name
        );
        course::create(array_merge($request->except(['imageUrl',]),["imageUrl"=>$file_name]));
        return [
            "message"=>trans('api.course.create'),
            "data"=>course::get(),
        ];
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\course  $course
     * @return \App\Http\Resources\courseResource
     */
    public function show($slug)
    {
        $course=course::where('slug','=',$slug)->first();
        $videos=$course->videos()->get();
        $a=["course"=>$course,"video"=>$videos];
        return \response()->json($a,200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\courseRequest  $request
     * @param  \App\course  $course
     * @return \App\Http\Resources\courseResource
     */
    public function update(courseRequest $request, $id)
    {
        $course=course::where('id','=',$id)->first();
        if($request->file('imageUrl')){
            $file=$request->file('imageUrl');
            Storage::delete('public/images/'.$course->imageUrl);
            $file_name="course_image".time().'.'.$file->getClientOriginalExtension();
            $file->storeAs(
                'public/images', $file_name
            );
            $course->update(array_merge($request->except(['imageUrl',]),["imageUrl"=>$file_name]));
        }else{
            $course->update(array_merge($request->except(['imageUrl',]),["imageUrl"=>$course->imageUrl]));
        }
        return [
            "message"=>trans('api.course.update'),
            'data'=>course::get(),
        ];
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\course  $course
     * @return \App\Http\Resources\courseResource
     */
    public function destroy($id)
    {
        $course=course::where('id','=',$id)->first();
        $course->delete();
        Storage::delete('public/images/'.$course->imageUrl);
        return [
            'message'=>trans('api.course.delete'),
            'data'=>course::get(),
        ];
    }
    public function upload(UploadRequest $request)
    {
        $file=$request->file('upload');
        $file_name="editor_image".time().'.'.$file->getClientOriginalExtension();
        $file->storeAs(
            'public/images', $file_name
        );
        $CKEditorFuncNum = $request->input('CKEditorFuncNum');
        $url = asset('public/images'.$file);
        $msg = 'Image uploaded successfully';
        $response = "<script>window.parent.CKEDITOR.tools.callFunction($CKEditorFuncNum, '$url', '$msg')</script>";
        return \response($response,200);
    }
}
