<?php

namespace App\Http\Controllers;

use App\tag;
use App\Http\Resources\tagResource;
use App\Http\Controllers\Controller;
use App\Http\Requests\tagRequest;
use App\Http\Resources\Collections\tagCollection;

class tagControllerAPI extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return App\Http\Resources\Collections\tagCollection
     */
    public function index()
    {
        $this->authorize('viewAny', tag::class);

        $tag = tag::all();

        return new tagCollection($tag);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\tagRequest  $request
     * @return \App\Http\Resources\tagResource
     */
    public function store(tagRequest $request)
    {
        $this->authorize('create', tag::class);

        $tag = tag::create($request->validated());

        return new tagResource($tag);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\tag  $tag
     * @return \App\Http\Resources\tagResource
     */
    public function show(tag $tag)
    {
        $this->authorize('view', $tag);

        return new tagResource($tag);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\tagRequest  $request
     * @param  \App\tag  $tag
     * @return \App\Http\Resources\tagResource
     */
    public function update(tagRequest $request, tag $tag)
    {
        $this->authorize('update', $tag);

        $tag->update($request->validated());

        return new tagResource($tag);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\tag  $tag
     * @return \App\Http\Resources\tagResource
     */
    public function destroy(tag $tag)
    {
        $this->authorize('delete', $tag);

        $tag->delete();

        return new tagResource($tag);

    }
}
