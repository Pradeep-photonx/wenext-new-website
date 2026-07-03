export const CheckedIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2025_106078)">
            <g clipPath="url(#clip1_2025_106078)">
                <rect x="0.6" y="0.6" width="12.8" height="12.8" rx="2.4" fill="#111111" stroke="#111111" strokeWidth="1.4" />
            </g>
        </g>
        <path d="M9.66536 5L5.9987 8.66667L4.33203 7" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <clipPath id="clip0_2025_106078">
                <rect width="14" height="14" fill="white" />
            </clipPath>
            <clipPath id="clip1_2025_106078">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const CheckBoxIconSvg = (
    props: React.SVGProps<SVGSVGElement> & { fill?: string },
) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            {...props}
        >
            <rect width={15} height={15} x={0.5} y={0.5} stroke="#111111" rx={3.5} />
        </svg>
    );
};

export const DefaultIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2025_2102)">
            <rect x="0.6" y="0.6" width="12.8" height="12.8" rx="2.4" fill="none" stroke="#111111" strokeWidth="1.2" />
        </g>
        <defs>
            <clipPath id="clip0_2025_2102">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const IntermediateIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2025_119547)">
            <g clipPath="url(#clip1_2025_119547)">
                <rect x="0.6" y="0.6" width="12.8" height="12.8" rx="2.4" fill="#111111" stroke="#111111" strokeWidth="1.2" />
            </g>
        </g>
        <path d="M4 7H10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <defs>
            <clipPath id="clip0_2025_119547">
                <rect width="14" height="14" fill="white" />
            </clipPath>
            <clipPath id="clip1_2025_119547">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export const DisabledIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2025_37770)">
            <rect width="14" height="14" rx="3" fill="white" />
            <rect x="0.6" y="0.6" width="12.8" height="12.8" rx="2.4" stroke="#111111" strokeOpacity="0.4" strokeWidth="1.2" />
        </g>
        <defs>
            <clipPath id="clip0_2025_37770">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
