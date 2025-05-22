<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class ApiMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            $token = JWTAuth::getToken();
            $payload = JWTAuth::setToken($token)->getPayload();
            $user = JWTAuth::setToken($token)->authenticate();

            $response = $next($request);

            $exp = $payload->get('exp');
            $now = now()->timestamp;

            // Jika tersisa kurang dari 15 menit, refresh token
            if (($exp - $now) < 900) {
                $newToken = JWTAuth::setToken($token)->refresh();
                // Set token baru ke header response
                $response->headers->set('Authorization', 'Bearer ' . $newToken);
            }

            // Jika kurang dari 15 menit tersisa, refresh token
            if ($exp - $now < 900) {
                $newToken = JWTAuth::parseToken()->refresh();
                $response->headers->set('Authorization', 'Bearer ' . $newToken);
            }
        } catch (JWTException $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response()->json(['error' => 'Token is Invalid'], 403);
            } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response()->json(['error' => 'Token is Expired'], 403);
            } else {
                return response()->json(['error' => 'Authorization Token not found'], 403);
            }
        }
        return $response;
    }
}
