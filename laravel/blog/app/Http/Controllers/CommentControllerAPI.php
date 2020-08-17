<?php

namespace App\Http\Controllers;

use App\comment;
use App\course;
use Illuminate\Http\Request;

class CommentControllerAPI extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $course=course::where('slug','=',$id)->first();
        $comments=$course->comments()->where('approval','=',0)->with('user')->get();
        return \response()->json(["comments"=>$comments],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        comment::create($request->all());
        $d=[
            "message"=>"کامنت شما پس از بازرسی توسط تیم فنی منتشر می شود",
        ];
        return \response()->json($d,200);
    }
    public function update($id)
    {
        $comment=comment::where('id','=',$id)->first();
        $comment->approval=0;
        $d=[
            "message"=>"کامنت در صفحه ی مورد نظرر قرارگرفت"
        ];
        $comment->save();
       
        return \response()->json($d,200);
    }
    public function updatePublish($id)
    {
        $comment=comment::where('id','=',$id)->first();
        $comment->approval=1;
        $d=[
            "message"=>"کامنت از حالت انتشار خارج شود",
        ];
        $comment->save();
       
        return \response()->json($d,200);
    }
    public function show()
    {
        $comment=comment::where('approval','=',1)->orderBy('id','DESC')->get();
        return \response()->json(["comments"=>$comment],200);
    }
    public function showPublish()
    {
        $comment=comment::where('approval','=',0)->orderBy('id','DESC')->get();
        return \response()->json(["comments"=>$comment],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment=comment::where('id','=',$id)->first();
        $comment->delete();
        $d=[
            "message"=>"کامنت شما از لیست کامنت ها حذف شود"
        ];
        return \response()->json($d,200);
    }
}
