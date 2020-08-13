<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class video extends Model
{
    protected $fillable=['videoUrl','title','course_id'];
    public function course()
    {
        return $this->blongTo(course::class);
    }
}
