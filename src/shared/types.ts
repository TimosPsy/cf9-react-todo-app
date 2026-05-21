export interface LayoutProps {
    children: React.ReactNode;
    addClasses?: string;
}

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    addClasses?: string;
}