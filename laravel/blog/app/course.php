<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use App\tag;
class course extends Model
{
    use Sluggable;
    protected $fillable=['title','imageUrl','price','description','teacher','name'];
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
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
}
