import { SVGProps } from "react";

type GlobeIconProps = {} & JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>;

const GlobeIcon: React.FC<GlobeIconProps> = (props: GlobeIconProps) => {
    return (
        <svg
            {...props}
            enableBackground="new 0 0 50 50"
            height="50px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 50 50"
            width="50px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect fill="none" height="50" width="50" />
            <circle
                cx="25"
                cy="25"
                fill="none"
                r="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
            />
            <ellipse
                cx="25"
                cy="25"
                fill="none"
                rx="12"
                ry="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
            />
            <path
                d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
            />
            <path
                d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
                x1="1"
                x2="49"
                y1="25"
                y2="25"
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="2"
                x1="25"
                x2="25"
                y1="1"
                y2="49"
            />
        </svg>
    );
};

export default GlobeIcon;
