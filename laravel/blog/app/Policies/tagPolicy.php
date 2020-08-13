<?php

namespace App\Policies;

use App\tag;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class tagPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any tag.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the tag.
     *
     * @param  \App\User  $user
     * @param  \App\tag  $tag
     * @return mixed
     */
    public function view(User $user, tag $tag)
    {
        //
    }

    /**
     * Determine whether the user can create tag.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the tag.
     *
     * @param  \App\User  $user
     * @param  \App\tag  $tag
     * @return mixed
     */
    public function update(User $user, tag $tag)
    {
        //
    }

    /**
     * Determine whether the user can delete the tag.
     *
     * @param  \App\User  $user
     * @param  \App\tag  $tag
     * @return mixed
     */
    public function delete(User $user, tag $tag)
    {
        //
    }

    /**
     * Determine whether the user can restore the tag.
     *
     * @param  \App\User  $user
     * @param  \App\tag  $tag
     * @return mixed
     */
    public function restore(User $user, tag $tag)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the tag.
     *
     * @param  \App\User  $user
     * @param  \App\tag  $tag
     * @return mixed
     */
    public function forceDelete(User $user, tag $tag)
    {
        //
    }
}
