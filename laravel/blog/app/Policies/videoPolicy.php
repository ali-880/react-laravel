<?php

namespace App\Policies;

use App\video;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class videoPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any video.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the video.
     *
     * @param  \App\User  $user
     * @param  \App\video  $video
     * @return mixed
     */
    public function view(User $user, video $video)
    {
        //
    }

    /**
     * Determine whether the user can create video.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the video.
     *
     * @param  \App\User  $user
     * @param  \App\video  $video
     * @return mixed
     */
    public function update(User $user, video $video)
    {
        //
    }

    /**
     * Determine whether the user can delete the video.
     *
     * @param  \App\User  $user
     * @param  \App\video  $video
     * @return mixed
     */
    public function delete(User $user, video $video)
    {
        //
    }

    /**
     * Determine whether the user can restore the video.
     *
     * @param  \App\User  $user
     * @param  \App\video  $video
     * @return mixed
     */
    public function restore(User $user, video $video)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the video.
     *
     * @param  \App\User  $user
     * @param  \App\video  $video
     * @return mixed
     */
    public function forceDelete(User $user, video $video)
    {
        //
    }
}
