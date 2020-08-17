<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::check())
        {
            if(Auth::user()->role_id==2)
            {
                return $next($request);
            }else{
                $message="سطح دسترسی شما شامل این قسمت نمی شود";
                return \response()->json($message, 403); 
            }
        }else{
            $message="ابتدا در سامانه ثبت نام کنید";
            return \response()->json($message,401);
        }
    }
}
