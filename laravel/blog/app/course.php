<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\tag;
use Cviebrock\EloquentSluggable\Sluggable;

class course extends Model
{
    use Sluggable;
    protected $fillable=['title','imageUrl','price','description','teacher','name'];
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    public function videos()
    {
        return $this->hasMany(video::class);
    }
    public function tags()
    {
        return $this->blongsToMany(\App\Tag::class);
    }
    public function comments()
    {
        return $this->hasMany(comment::class);
    }
}
