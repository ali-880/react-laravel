<?php

namespace App\Http\Controllers;

use App\Http\Requests\user\userLoginApiRequest;
use App\Http\Requests\user\userRegisterApiRequest;
use App\User;
use Illuminate\Http\Request;

class UserControllerAPI extends Controller
{
    public function register(userRegisterApiRequest $request)
    {
        User::create($request->only(['email','password','name']));
        return [
            "message"=>trans("api.user.register"),
        ];
    }
    public function login(userLoginApiRequest $request){
        $user=User::where('email','=',$request->only('email'))->first();
        if($user){
            if($user->password===$request->get("password")){
                $token = $user->createToken('MyApp')-> accessToken;
                $a=["data"=>$user,"message"=>\trans("api.user.login.yes"),"token"=>$token];
                return \response()->json($a,200);
            }else{
                return \response()->json(\trans("api.user.login.tat"),402);
            }
        }else{
            return \response()->json(["message"=>\trans("api.user.login.no")],401);
        }
    }
}
