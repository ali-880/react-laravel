<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable=['content'];
    public function courses()
    {
        return $this->blongsToMany(course::class);
    }
}
