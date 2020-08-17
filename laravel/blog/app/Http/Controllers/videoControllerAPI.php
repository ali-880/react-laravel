<?php

namespace App\Http\Controllers;

use App\course;
use App\video;
use App\Http\Resources\videoResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\videoRequest;
use App\Http\Resources\Collections\videoCollection;
use Illuminate\Support\Facades\Storage;

class videoControllerAPI extends Controller
{
    //public function __construct()
    //{
      //  $this->middleware(['isAdmin',"auth:api"]);
    //}
    public function upload($slug,videoRequest $request)
    {
        $course=course::where('slug','=',$slug)->first();
        $file=$request->file('videoUrl');
        $file_name="course_video".time().'.'.$file->getClientOriginalExtension();
        $file->storeAs(
            'public/video', $file_name);
        $video=$course->videos()->create(array_merge($request->except(['videoUrl']),["videoUrl"=>$file_name]));
        return [
            'video'=>$video,
            'message'=>trans('api.video.upload'),
        ];
    }
    public function update($id,videoRequest $request)
    {
        $video=video::where('id','=',$id)->first();
        if($request->file('videoUrl')){
            $file=$request->file('videoUrl');
            Storage::delete('public/video/'.$video->videoUrl);
            $file_name="course_image".time().'.'.$file->getClientOriginalExtension();
            $file->storeAs(
                'public/video', $file_name
            );
            $video->update(array_merge($request->except(['videoUrl']),["videoUrl"=>$file_name]));
        }else{
            $video->update(array_merge($request->except(['videoUrl']),["videoUrl"=>$video->imageUrl]));
        }
        return [
            'message'=>trans('api.video.update'),
        ];
    }
    public function destroy($id)
    {
        $vidio=video::where('id','=',$id)->first();
        $vidio->delete();
        return [
            "message"=>trans('api.video.destroy')
        ];
    }
}
