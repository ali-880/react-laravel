<?php

namespace App\Http\Controllers;

use App\Http\Requests\user\userLoginApiRequest;
use App\User;
;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
class UserControllerAPI extends Controller
{
    public function register(Request $request)
    {
        $validator =Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email|unique:users,email', 
            'password' => 'required|min:6', 
        ]);
        if ($validator->fails()) { 
            return response()->json(["errors"=>$validator->errors()->all()],422);            
        }
        User::create($request->all());
        return [
            "message"=>trans("api.user.register"),
        ];
    }
    public function login(userLoginApiRequest $request){
        $validator =Validator::make($request->all(), [ 
            'email' => 'required|email', 
            'password' => 'required|min:6', 
        ]);
        if ($validator->fails()) { 
            return response()->json(["errors"=>$validator->errors()->all()],422);            
        }
        $user=User::where('email','=',$request->get('email'))->first();
        if($user){
            if($user->password===$request->get("password")){
                $token = $user->createToken("API",[$user->role()->first()->name])->accessToken;
                $a=["data"=>$user,"message"=>\trans("api.user.login.yes"),"token"=>$token,"role"=>$user->role()->first()->name];
                return \response()->json($a,200);
            }else{
                return \response()->json(\trans("api.user.login.tat"),402);
            }
        }else{
            return \response()->json(\trans("api.user.login.not"),401);
        }
    }
    public function UserInformation(Request $request)
    {
        $a=DB::table('oauth_access_tokens')->where('id','=',$request->get('token_id'))->first()->user_id;
        $b=User::where("id",'=',$a)->first();
        return \response()->json($b,200);
    }
    public function logout (Request $request)
    {
        $user=User::where('id','=',$request->id)->first();
        $token = $user->token();
        $token->revoke();
        $response = ['message' => 'با موفقیت از سیستم خارج شدید.'];
        return response($response, 200);
    }

}

