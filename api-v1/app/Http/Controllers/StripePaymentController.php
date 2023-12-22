<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StripePaymentController extends Controller
{
    public function requestPayment(Request $request){
        $x = array();
        if(count($request['orderedItem'])){
            foreach($request['orderedItem'] as $k=>$v){
                if($v['quantity']>0)
                $x[] = array(
                    'price_data' => [
                        'currency' => 'sgd',
                        'product_data' => [
                          'name' => $v['name'],
                        ],
                        'unit_amount' => $v['price']*100,
                      ],
                      'quantity' => $v['quantity'],
                );
            }
        }
        $params1['line_items'] = $x;
        $params2 = array(
            'mode' => 'payment',
            'success_url' => env('APP_URL').'/api/confirmation?t=success',
            'cancel_url' => env('APP_URL').'/api/confirmation?t=cancel',
        );
        $params = array_merge($params1,$params2);
        // print_r($params);
        $sk = env('STRIPE_SECRET');
        $stripe = new \Stripe\StripeClient($sk);
        $checkout_session = $stripe->checkout->sessions->create($params);
          
        return $checkout_session;
    }

    public function checkConfirmation(Request $request){
        return redirect('http://localhost:3001/?t='.$request['t']);
    }
}
