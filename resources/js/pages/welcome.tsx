import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Two-Factor Authentication',
        href: '',
    },
];

export default function Page() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Welcome" />
            <div className="flex flex-1 flex-col gap-4 p-4">
                {Array.from({ length: 24 }).map((_, index) => (
                    <div key={index} className="bg-muted/50 aspect-video h-12 w-full rounded-lg" />
                ))}
            </div>
        </AppLayout>
    );
}
