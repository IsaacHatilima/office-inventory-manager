<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\ConnectedAccount;
use App\Models\Device;
use App\Models\DeviceStaffMapping;
use App\Models\MemberOfStaff;
use App\Models\Profile;
use App\Models\Software;
use App\Models\User;
use App\Policies\ConnectedAccountPolicy;
use App\Policies\DevicePolicy;
use App\Policies\DeviceStaffMappingPolicy;
use App\Policies\MemberOfStaffPolicy;
use App\Policies\ProfilePolicy;
use App\Policies\SoftwarePolicy;
use App\Policies\UserPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [

        Profile::class => ProfilePolicy::class,
        User::class => UserPolicy::class,
        ConnectedAccount::class => ConnectedAccountPolicy::class,
        MemberOfStaff::class => MemberOfStaffPolicy::class,
        Device::class => DevicePolicy::class,
        DeviceStaffMapping::class => DeviceStaffMappingPolicy::class,
        Software::class => SoftwarePolicy::class,
    ];

    /**
     * Register services.
     */
    public function register(): void
    {
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
    }
}
