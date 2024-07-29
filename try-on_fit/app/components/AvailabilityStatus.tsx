'use client';

import React from "react";

export default function AvailabilityStatus({ status }: { status: 'available' | 'unavailable' }) {
    const isAvailable = status === 'available';
    return (
        <p className={isAvailable ? 'text-green-500' : 'text-red-500'}>
            {isAvailable ? 'Item available' : 'Item unavailable'}
        </p>
    );
}
