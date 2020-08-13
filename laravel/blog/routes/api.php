<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/*
|--------------------------------------------------------------------------
| course endpoints
|--------------------------------------------------------------------------
 */
Route::name('courses.')->prefix('courses')->group(function () {
    Route::get('/', 'courseControllerAPI@index')->name('index');
    Route::post('/', 'courseControllerAPI@store')->name('create');
    Route::get('/{slug}', 'courseControllerAPI@show')->name('show');
    Route::post('/upload', 'courseControllerAPI@upload')->name('upload1');
    Route::post('/update/{id}', 'courseControllerAPI@update')->name('update');
    Route::delete('/{id}', 'courseControllerAPI@destroy')->name('destroy');
});
Route::post("/register","UserControllerApi@register");
Route::post("/login","UserControllerApi@login");
/*
|--------------------------------------------------------------------------
| video endpoints
|--------------------------------------------------------------------------
 */
Route::name('videos.')->prefix('videos')->group(function () {
    Route::post('/update{id}', 'videoControllerAPI@update')->name('update');
    Route::delete('/delete{id}', 'videoControllerAPI@destroy')->name('destroy');
    Route::post('/{slug}', 'videoControllerAPI@upload')->name('upload');
});

/*
|--------------------------------------------------------------------------
| tag endpoints
|--------------------------------------------------------------------------
 */
Route::name('tags.')->prefix('tags')->group(function () {
    Route::get('/', 'tagControllerAPI@index')->name('index');
    Route::post('/', 'tagControllerAPI@store')->name('create');
    Route::get('/{tag}', 'tagControllerAPI@show')->name('show');
    Route::patch('/{tag}', 'tagControllerAPI@update')->name('update');
    Route::delete('/{tag}', 'tagControllerAPI@destroy')->name('destroy');
});

/*
|--------------------------------------------------------------------------
| work endpoints
|--------------------------------------------------------------------------
 */
Route::name('works.')->prefix('works')->group(function () {
    Route::get('/', 'workControllerAPI@index')->name('index');
    Route::post('/', 'workControllerAPI@store')->name('create');
    Route::get('/{work}', 'workControllerAPI@show')->name('show');
    Route::patch('/{work}', 'workControllerAPI@update')->name('update');
    Route::delete('/{work}', 'workControllerAPI@destroy')->name('destroy');
});

