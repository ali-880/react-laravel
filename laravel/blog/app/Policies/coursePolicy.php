<?php

namespace App\Policies;

use App\course;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class coursePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any course.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the course.
     *
     * @param  \App\User  $user
     * @param  \App\course  $course
     * @return mixed
     */
    public function view(User $user, course $course)
    {
        //
    }

    /**
     * Determine whether the user can create course.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the course.
     *
     * @param  \App\User  $user
     * @param  \App\course  $course
     * @return mixed
     */
    public function update(User $user, course $course)
    {
        //
    }

    /**
     * Determine whether the user can delete the course.
     *
     * @param  \App\User  $user
     * @param  \App\course  $course
     * @return mixed
     */
    public function delete(User $user, course $course)
    {
        //
    }

    /**
     * Determine whether the user can restore the course.
     *
     * @param  \App\User  $user
     * @param  \App\course  $course
     * @return mixed
     */
    public function restore(User $user, course $course)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the course.
     *
     * @param  \App\User  $user
     * @param  \App\course  $course
     * @return mixed
     */
    public function forceDelete(User $user, course $course)
    {
        //
    }
}
