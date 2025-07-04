import { PaginationLink } from '@/types/common';
import { User } from '@/types/index';

export interface SoftwareInterface {
    id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    user: User;

    [key: string]: unknown; // This allows for additional properties...
}

export interface PaginatedSoftwareInterface {
    current_page: number;
    data: SoftwareInterface[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | URL;
    path: string;
    per_page: number;
    prev_page_url: string | URL;
    to: number;
    total: number;
}

export interface SoftwareInterfaceFilters {
    search: string | null;
    status: string | null;
    per_page: string | null;
    sort_field: string | null;
    sort_order: string | null;
}
